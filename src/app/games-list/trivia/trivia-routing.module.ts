import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RiddlesPage } from './trivia.page';

const routes: Routes = [
  {
    path: '',
    component: RiddlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), 
            CommonModule],
  exports: [RouterModule],
})
export class RiddlesPageRoutingModule {}
