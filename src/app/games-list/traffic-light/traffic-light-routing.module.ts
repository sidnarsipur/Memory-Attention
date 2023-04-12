import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrafficLightPage } from './traffic-light.page';

const routes: Routes = [
  {
    path: '',
    component: TrafficLightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficLightPageRoutingModule {}
