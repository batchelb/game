import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { CharacterComponent } from './character/character.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MatInputModule, MatDialogModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { CapitalizeFirstPipe } from './captilize.pipe';
import { GameService } from './game.service';
import { RouterModule, Routes } from '@angular/router';
import { SkillsDialogComponent } from './character/skills-dialog/skills-dialog.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { EquipmentDialogComponent } from './character/equipment-dialog/equipment-dialog.component';
import { PerformSkillModalComponent } from './skills/perform-skill-modal/perform-skill-modal.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';

const appRoutes: Routes = [
  { path: 'character', component: CharacterComponent },
  { path: '**', component: StartGameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    CharacterComponent,
    WorldMapComponent,
    ActivitiesComponent,
    CapitalizeFirstPipe,
    SkillsDialogComponent,
    EquipmentDialogComponent,
    PerformSkillModalComponent,
    BattleFieldComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule, 
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CapitalizeFirstPipe, GameService],
  bootstrap: [AppComponent],
  entryComponents: [SkillsDialogComponent, PerformSkillModalComponent]
})
export class AppModule { }
