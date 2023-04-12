import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSpanPageRoutingModule } from './card-span-routing.module';

import { CardSpanPage } from './card-span.page';
import { CardSpanService } from './card-span.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    CardSpanPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [CardSpanPage],
  providers: [CardSpanService],
  exports: [CardSpanPage],
})
export class CardSpanPageModule {}
