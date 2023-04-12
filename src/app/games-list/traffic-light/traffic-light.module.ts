import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficLightPageRoutingModule } from './traffic-light-routing.module';

import { TrafficLightPage } from './traffic-light.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficLightPageRoutingModule,
    SharedModule
  ],
  declarations: [TrafficLightPage],
  exports: [TrafficLightPage],
})
export class TrafficLightPageModule {}
