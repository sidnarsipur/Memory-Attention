import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../login/login.guard';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    // redirectTo: "main",
    // pathMatch: "full",
    children: [
      {
        path: 'exercise-sets',
        loadChildren: () => import('./excercise/excercise.module').then( m => m.ExcercisePageModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'games-list',
        loadChildren: () => import('./games-list/games-list.module').then( m => m.GamesListPageModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule),
        canActivate: [LoginGuard]
      },
      {
        path:'main',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule),
        canActivate: [LoginGuard]
      },
      // {
      //   path: '',
      //   redirectTo: 'main',
      //   pathMatch: 'full'
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
