import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrixReasoningPage } from './matrix-reasoning.page';

const routes: Routes = [
  {
    path: '',
    component: MatrixReasoningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatrixReasoningPageRoutingModule {}
