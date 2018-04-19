import { Injectable } from '@angular/core';
import { Character} from './character.model';
import { ExploreItem } from './explore-item.model';
import { Enemy } from './enemy.model';
import { Item } from './item.model';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PerformSkillModalComponent } from './skills/perform-skill-modal/perform-skill-modal.component';

@Injectable()
export class GameService {
  public tools = ['bow','sword','shield','armor','hoe','pick ax','wood ax','pole','hammer','can'];
  public skills = ['farming','mining','exploring','apothecary','crafting','fishing'];
  public character = new Character();
  public day = 1;
  public nightSubject = new Subject<null>();
  public night = false;
  exploringChart = {
    deseret:[
      new ExploreItem(1,2,'enemy','Gaint Scorpion'),
      new ExploreItem(3,5,'enemy','Steel Knight'),
      new ExploreItem(8,10,'enemy','Iron Sword'),
      new ExploreItem(20,25,'apothecary','Health Herb', 2),
      new ExploreItem(28,36,'item','Wood'),
      new ExploreItem(40,50,'item', 'Iron'),
      new ExploreItem(53,56,'equipment','Iron Bow'),
      new ExploreItem(58,65,'food','Food', 3),
      new ExploreItem(66,73,'item','Bronze Armor'),
      new ExploreItem(75,81,'tool','Iron Hoe'),
      new ExploreItem(83,84,'equipment','Steel Sword'),
      new ExploreItem(90,93,'equipment','Steel Shield'),
      new ExploreItem(94,97,'equipment','Steel Armor'),
      new ExploreItem(99,100,'item','Special Ore'),
    ],
    plain:[
      new ExploreItem(1,2,'enemy','Bronze Swordmen'),
      new ExploreItem(20,25,'apothecary','Health Herb', 2),
      new ExploreItem(28,36,'item','Wood'),
      new ExploreItem(40,50,'item', 'Bronze'),
      new ExploreItem(53,56,'equipment','Bronze Bow'),
      new ExploreItem(58,75,'food','Food', 2),
      new ExploreItem(80,94,'animal','Bison'),
      new ExploreItem(99,100,'food','Food',10),
    ],
  }
  get randomNumber() {
    return Math.floor(Math.random() * 101) + 1
  }
  constructor(private dialog: MatDialog) {}

  startNewDay() {
    this.night = true;
    this.day++;
    this.character.energy = 10;
    this.nightSubject.next();
    setTimeout(()=>{
      this.nightSubject.next()
    },2000);
  }

  explore(){
    const skill = this.character.skills.exploring;
    let randomNumber = this.randomNumber
    if(skill >= 9) {
      randomNumber += 20;
    } else if (skill >= 6) {
      randomNumber += 10;
    } else if (skill >= 4) {
      randomNumber += 5;
    }
    if(randomNumber > 100){
      randomNumber = 100;
    }
    this.character.energy -= 3;
    const randomItem = this.getRandomItem(this.exploringChart[this.character.location.type],randomNumber);
    this.openDialog(PerformSkillModalComponent,randomItem,'600px',(item)=>{
      if(item.name) {
        for(let i = 0; i < item.quantity;i++) {
          this.character.supplies.push(new Item(item.name,item.type));
        }
      }
      if(item.again) {
        this.explore();
      }

    });
  }

  openDialog(component,data,width,func) {
    this.dialog.open(component,{data:data,width:width}).afterClosed().subscribe(func);
  }

  getRandomItem(list,randomNumber) {
    const item =  list.find((item)=>{return item.low <= randomNumber && randomNumber <= item.high}) || {};
    item.number = randomNumber;
    item.character = this.character;
    item.getRandomNumbers = this.getRandomNumbers.bind(this);
    return item;
  }

  getRandomNumbers(func) {
    for(let i = 0; i < 3000;i += 75){
      setTimeout(()=>{
        func(this.randomNumber, i > 2924);
      },i);
    }
  }
}
