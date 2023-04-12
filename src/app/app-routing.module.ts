import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'description/:game',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'DigitSpan',
    loadChildren: () => import('./games-list/digit-span/digit-span.module').then( m => m.DigitSpanPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'CardSpan',
    loadChildren: () => import('./games-list/card-span/card-span.module').then( m => m.CardSpanPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'TrafficLight',
    loadChildren: () => import('./games-list/traffic-light/traffic-light.module').then( m => m.TrafficLightPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'NumberSort',
    loadChildren: () => import('./games-list/sort-them/sort-them.module').then( m => m.SortThemPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'StroopGame',
    loadChildren: () => import('./games-list/stroop-game/stroop-game.module').then( m => m.StroopGamePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'WordtoImages',
    loadChildren: () => import('./games-list/word-to-images/word-to-images.module').then( m => m.WordToImagesPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'WordFinder',
    loadChildren: () => import('./games-list/wordfinder/wordfinder.module').then( m => m.WordfinderPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'WordPairs',
    loadChildren: () => import('./games-list/word-pairs/word-pairs.module').then( m => m.WordPairsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'Trivia',
    loadChildren: () => import('./games-list/trivia/trivia.module').then( m => m.TriviaPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'excercise-sets/:number',
    loadChildren: () => import('./excercise-sets/excercise-sets.module').then( m => m.ExcerciseSetsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'MatrixReasoning',
    loadChildren: () => import('./games-list/matrix-reasoning/matrix-reasoning.module').then( m => m.MatrixReasoningPageModule)
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
