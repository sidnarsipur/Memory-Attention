import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SortThemPageRoutingModule } from './sort-them-routing.module';

import { SortThemPage } from './sort-them.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortThemPageRoutingModule,
    SharedModule
  ],
  declarations: [SortThemPage],
  exports: [SortThemPage],
})
export class SortThemPageModule {}
