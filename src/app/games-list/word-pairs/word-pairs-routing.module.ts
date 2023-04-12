import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordPairsPage } from './word-pairs.page';

const routes: Routes = [
  {
    path: '',
    component: WordPairsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordPairsPageRoutingModule {}
