import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcerciseSetsPageRoutingModule } from './excercise-sets-routing.module';

import { ExcerciseSetsPage } from './excercise-sets.page';
import { GamesListModule } from '../games-list/games-list.module';
import { SharedModule } from '../shared/shared.module';
import { ChoosingComponent } from './choosing/choosing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcerciseSetsPageRoutingModule,
    GamesListModule,
    SharedModule
  ],
  declarations: [ExcerciseSetsPage, ChoosingComponent]
})
export class ExcerciseSetsPageModule {}
