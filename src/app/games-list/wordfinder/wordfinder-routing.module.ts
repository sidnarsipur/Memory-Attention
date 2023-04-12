import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordfinderPage } from './wordfinder.page';

const routes: Routes = [
  {
    path: '',
    component: WordfinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordfinderPageRoutingModule {}
