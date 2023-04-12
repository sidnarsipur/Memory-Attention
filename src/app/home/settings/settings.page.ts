import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  level = 1;
  isLoading = false 
  constructor(private dataService: DataService, private router: Router, private gameService: GameService) { }

  // sets default path
  ngOnInit() {
    localStorage.setItem('navpath', 'settings')
  }
  ionViewDidEnter() {
    localStorage.setItem('navpath', 'settings')
  }

  // logs out of the account
  onLogout() {
    this.dataService.logout()
    this.router.navigate(['/login'])
  }

  // changes level in database
  levelChange() {
    this.isLoading = true
    for (let i = 0; i <= this.gameService.gamesArray.length - 1; i++) {
      this.gameService.storeLevelScore(i, 0, this.level, false)
      if (i === this.gameService.gamesArray.length - 1) {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    }
    console.log(this.level)
  }
}
