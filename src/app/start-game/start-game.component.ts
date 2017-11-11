import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Character } from '../character.model';
@Component({
	selector: 'app-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: ['./start-game.component.less']
})
export class StartGameComponent implements OnInit {

	constructor(public gameService: GameService) { }

	public newCharacter = new Character()
	public selectedTools = [];

	ngOnInit() {
	}

	disabled() {
		return this.selectedTools.length !== 3;
	}
	save() {
		this.newCharacter.tools = this.selectedTools;
	}

	updateCheckedList(tool) {
		const toolIndex = this.selectedTools.findIndex((value) => { return value === tool });
		toolIndex === -1 ? this.selectedTools.push(tool) : this.selectedTools.splice(toolIndex, 1)
	}

	checkboxDisabled(tool) {
		return this.selectedTools.length >= 3 && !this.selectedTools.some((t) => { return t === tool });
	}
}
