import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcerciseSetsPage } from './excercise-sets.page';

const routes: Routes = [
  {
    path: '',
    component: ExcerciseSetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcerciseSetsPageRoutingModule {}
