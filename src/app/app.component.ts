import { Component, ViewChild } from '@angular/core';
import { GameService} from './game.service';
// import { AngularFireDatabase  } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  showNight = false;
  
  constructor(private gameService:GameService) {//, db:AngularFireDatabase, public afAuth: AngularFireAuth){
    this.gameService.nightSubject.subscribe(()=>{
      this.showNight = !this.showNight;
    });

      // db.object('1').valueChanges().subscribe((what)=>{
      //   console.log(what)
      // })
  }
}
