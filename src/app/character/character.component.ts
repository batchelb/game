import { Component, OnInit } from '@angular/core';
import { GameService} from '../game.service';
import { MatDialog } from '@angular/material';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component'
import { EquipmentDialogComponent } from './equipment-dialog/equipment-dialog.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {

  constructor(public gameService:GameService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(type) {
    const component:any = type === 'equipment' ? EquipmentDialogComponent : SkillsDialogComponent;
    this.dialog.open(component, {
      width: '300px', 
      data:{type:type, character: this.gameService.character}
    }).afterClosed().subscribe((character)=>{
      if(character){
        if(type === 'attributes') {
          const updatedStats = {};
          character.attributes.forEach((attribute)=>{
            updatedStats[attribute.name] = attribute.value;
          });
         character.attributes = updatedStats;
        }
        this.gameService.character = character;
      }
    });
  }
}
