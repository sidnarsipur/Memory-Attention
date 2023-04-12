import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordToImagesPage } from './word-to-images.page';

const routes: Routes = [
  {
    path: '',
    component: WordToImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordToImagesPageRoutingModule {}
