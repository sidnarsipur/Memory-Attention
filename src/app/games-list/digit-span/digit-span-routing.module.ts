import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitSpanPage } from './digit-span.page';

const routes: Routes = [
  {
    path: '',
    component: DigitSpanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitSpanPageRoutingModule {}
