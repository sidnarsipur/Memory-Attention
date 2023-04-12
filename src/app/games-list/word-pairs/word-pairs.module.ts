import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordPairsPageRoutingModule } from './word-pairs-routing.module';

import { WordPairsPage } from './word-pairs.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordPairsPageRoutingModule,
    SharedModule
  ],
  declarations: [WordPairsPage],
  exports: [WordPairsPage],
})
export class WordPairsPageModule {}
