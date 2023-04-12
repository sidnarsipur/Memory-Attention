import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { GameService } from './game.service';
import { LevelscoreComponent } from './levelscore/levelscore.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FirstscreenComponent } from './firstscreen/firstscreen.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [StartComponent, MenuComponent, LevelscoreComponent, FirstscreenComponent, SpinnerComponent, DescriptionComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [StartComponent, MenuComponent, LevelscoreComponent, FirstscreenComponent, SpinnerComponent, DescriptionComponent, HeaderComponent],
  providers: [GameService, DataService]
})
export class SharedModule { }
