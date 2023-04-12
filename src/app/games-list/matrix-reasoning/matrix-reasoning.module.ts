import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrixReasoningPageRoutingModule } from './matrix-reasoning-routing.module';

import { MatrixReasoningPage } from './matrix-reasoning.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrixReasoningPageRoutingModule,
    SharedModule
  ],
  declarations: [MatrixReasoningPage],
  exports: [MatrixReasoningPage]
})
export class MatrixReasoningPageModule {}
