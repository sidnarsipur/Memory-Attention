import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardSpanPage } from './card-span.page';

const routes: Routes = [
  {
    path: '',
    component: CardSpanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSpanPageRoutingModule {}
