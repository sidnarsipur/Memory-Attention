import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule } from '@ionic/angular';

import { RiddlesPageRoutingModule } from './trivia-routing.module';

import { RiddlesPage } from './trivia.page';
import { from } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiddlesPageRoutingModule,
    HttpClientModule, 
    SharedModule
  ],
  declarations: [RiddlesPage],
  providers: [],
  exports: [RiddlesPage],
})
export class TriviaPageModule {}
