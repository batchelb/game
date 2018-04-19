import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
	selector: 'app-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: ['./start-game.component.less']
})
export class StartGameComponent implements OnInit {

	constructor(public gameService: GameService,
				private router:Router) { }

	public newCharacter = new Character()
	public selectedTools = [];

	ngOnInit() {
	}

	disabled() {
		return this.selectedTools.length !== 3;
	}
	save() {
		this.newCharacter.toolsList.forEach((tool)=>{
			this.newCharacter[tool.name]= _.includes(this.selectedTools,tool.name) ? 'bronze' : 'standard'
		});
		this.newCharacter.equipmentList.forEach((equipment)=>{
			this[equipment.name] =_.includes(this.selectedTools,equipment.name) ? 'bronze' : 'standard';
		});
		this.gameService.character = this.newCharacter;
		this.router.navigate(['character']);
	}

	updateCheckedList(tool) {
		const toolIndex = this.selectedTools.findIndex((value) => { return value === tool });
		toolIndex === -1 ? this.selectedTools.push(tool) : this.selectedTools.splice(toolIndex, 1)
	}

	checkboxDisabled(tool) {
		return this.selectedTools.length >= 3 && !this.selectedTools.some((t) => { return t === tool });
	}
}
