import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSpanPageModule } from './card-span/card-span.module';
import { DigitSpanPageModule } from './digit-span/digit-span.module';
import { TriviaPageModule } from './trivia/trivia.module';
import { SortThemPageModule } from './sort-them/sort-them.module';
import { StroopGamePageModule } from './stroop-game/stroop-game.module';
import { TrafficLightPageModule } from './traffic-light/traffic-light.module';
import { WordPairsPageModule } from './word-pairs/word-pairs.module';
import { WordToImagesPageModule } from './word-to-images/word-to-images.module';
import { WordfinderPageModule } from './wordfinder/wordfinder.module';
import { MatrixReasoningPageModule } from './matrix-reasoning/matrix-reasoning.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardSpanPageModule,
    DigitSpanPageModule,
    TriviaPageModule,
    SortThemPageModule,
    StroopGamePageModule,
    TrafficLightPageModule,
    WordPairsPageModule,
    WordToImagesPageModule,
    WordfinderPageModule,
    MatrixReasoningPageModule
  ],
  exports: [
    CardSpanPageModule,
    DigitSpanPageModule,
    TriviaPageModule,
    SortThemPageModule,
    StroopGamePageModule,
    TrafficLightPageModule,
    WordPairsPageModule,
    WordToImagesPageModule,
    WordfinderPageModule,
    MatrixReasoningPageModule
  ]
})
export class GamesListModule { }
