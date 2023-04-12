import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitSpanPageRoutingModule } from './digit-span-routing.module';

import { DigitSpanPage } from './digit-span.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitSpanPageRoutingModule,
    SharedModule
  ],
  declarations: [DigitSpanPage],
  exports: [DigitSpanPage],
})
export class DigitSpanPageModule {}
