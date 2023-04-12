import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortThemPage } from './sort-them.page';

const routes: Routes = [
  {
    path: '',
    component: SortThemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortThemPageRoutingModule {}
