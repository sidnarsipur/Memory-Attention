import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordfinderPageRoutingModule } from './wordfinder-routing.module';

import { WordfinderPage } from './wordfinder.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordfinderPageRoutingModule,
    SharedModule,
  ],
  declarations: [WordfinderPage],
  exports: [WordfinderPage],
})
export class WordfinderPageModule {}
