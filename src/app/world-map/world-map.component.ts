import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.less']
})
export class WorldMapComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {}
}
