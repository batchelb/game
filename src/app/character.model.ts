import { Item } from './item.model';
import { Actor } from './actor.model';
export class Character extends Actor {

    public name:string = 'Blarby the Darbot';
    public race:string = 'elf';
    public class:string = 'thief';
    public tools = {
        hoe:'Standard',
        pick:'Standard',
        ax:'Standard',
        pole:'Standard',
        hammer:'Standard',
        wateringCan:'Standard'
    };
    public skills = {
        farming:1,
        mining:1,
        exploring:1,
        apothecary:1,
        waterstuff:1,
        crafting:1,
    };
    get attributeList() {
        return this.makeList(this.attributes, 'type');
    }
    get equipmentList() {
        return this.makeList(this.equipment, 'type');
    }
    get toolsList() {
        return this.makeList(this.tools, 'type');
    }
    get skillsList() {
        return this.makeList(this.skills, 'value');
    }
    makeList(object, objectProp){
        const returnList = [];
        for(let key in object) {
            returnList.push({name:key,[objectProp]:object[key]})
        }
        return returnList;
    }
    public supplies:any[] = [];
    public skillPoints = 10;
    public attributePoints = 10;
// ['bow','sword','shield','armor','hoe','pick ax','wood ax','pole','hammer','can'];
    public house;
    public boat;
    public wagon;
    public warMachines:any[];
    public craftables:any[];
    public energy = 10;
    public healthRemaining = 10
    public worldMap;
    public XP;
    terrainTiles = [
        {type:'plain', color:'lightyellow'},
        {type:'forest', color:'green'},
        {type:'deep forest', color:'darkgreen'},
        {type:'swamp', color:'turquoise'},
        {type:'shallows', color:'lightblue'},
        {type:'ocean', color:'blue'},
        {type:'desert', color:'brown'},
        {type:'mountains', color:'red'},
        {type:'temple', color:'black'}
      ]
      worldMapLayout = [
        [2,2,2,2,1,2,1,1,1,2,2,1,1,3,3,4,4,4,4,4,4,6,6],
        [1,2,8,2,2,2,1,1,1,2,2,2,1,3,3,3,4,4,4,4,4,6,6],
        [2,2,2,2,1,1,1,0,1,1,1,1,1,3,3,3,3,4,4,4,4,4,4],
        [2,2,2,0,2,1,1,0,0,1,1,1,1,3,3,3,3,3,4,4,4,4,4],
        [1,1,2,2,1,1,0,0,0,0,1,0,0,3,3,3,3,3,8,4,4,4,4],
        [0,0,2,1,1,1,1,0,0,0,0,1,0,0,3,3,3,3,3,4,4,4,4],
        [1,1,0,0,0,1,1,0,0,0,1,0,0,0,3,3,3,3,3,3,3,3,3],
        [1,1,1,0,0,4,4,4,4,4,4,0,0,0,3,3,3,0,0,0,0,0,0],
        [0,0,1,1,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [6,6,6,6,6,6,6,6,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2],
        [6,6,6,6,6,6,6,6,6,0,2,2,2,2,2,2,2,2,2,2,1,2,2],
        [6,6,6,6,6,6,6,6,6,0,2,2,2,2,2,2,2,2,2,2,1,1,1],
        [6,6,8,6,6,6,6,6,6,6,7,4,4,4,4,4,4,4,4,4,4,4,4],
        [6,6,6,6,6,6,6,6,6,6,7,7,4,4,4,4,4,4,4,4,4,4,4],
        [6,6,6,6,6,6,6,6,6,6,7,7,6,6,6,6,6,6,6,6,6,6,6],
        [6,6,6,6,6,6,6,6,3,3,3,6,6,6,6,6,6,6,6,6,6,6,6],
        [7,7,7,7,7,7,7,7,3,3,3,6,6,6,6,6,6,6,6,8,6,6,6],
        [7,7,7,7,7,7,7,7,3,3,3,6,6,6,6,6,6,6,6,6,6,6,7]
    ]
    locationY = 7;
    locationX = 4;
    get location(){
        return this.worldMap[this.locationY][this.locationX];
    }
    battleY;
    battleX;
    battleMovement = 10;
    background ='blue';
    availbleToMove=false;
    constructor(){
        super();
        this.worldMap = this.buildNewMap(this.worldMapLayout,this.terrainTiles);
        this.location.currentColor = 'lightyellow';
    }

    buildNewMap(mapArray,mappingTiles){
        return mapArray.map((row)=>{
            return row.map((tile, j)=>{
              const wholeTile:any =this.terrainTiles[tile];
              return {type:wholeTile.type, currentColor: 'grey', color: wholeTile.color}
            });
        });
    }

    move(location,change) {
        if(this.energy >=2){
            this.energy -= 2;
            const compare = change === -1 ? 0 : (location==='locationX'? 22 : 19);
            if(this[location] !== compare) {
                this[location] += change;
                this.location.currentColor = this.location.color;
            }
        }
    }

    addSupply(item){
        this.supplies.push(item);
    }
}