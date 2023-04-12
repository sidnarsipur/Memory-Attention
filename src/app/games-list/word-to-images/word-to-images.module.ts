import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordToImagesPageRoutingModule } from './word-to-images-routing.module';

import { WordToImagesPage } from './word-to-images.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordToImagesPageRoutingModule,
    SharedModule
  ],
  declarations: [WordToImagesPage],
  exports: [WordToImagesPage],
})
export class WordToImagesPageModule {}
