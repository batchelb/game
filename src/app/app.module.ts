import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { CharacterComponent } from './character/character.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { CapitalizeFirstPipe } from './captilize.pipe';
import { GameService } from './game.service';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    CharacterComponent,
    WorldMapComponent,
    ActivitiesComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule, 
    MatSelectModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [CapitalizeFirstPipe, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
