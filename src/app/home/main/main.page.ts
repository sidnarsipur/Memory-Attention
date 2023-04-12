import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';
import { Game } from '../../shared/game.model'
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { FirstscreenComponent } from 'src/app/shared/firstscreen/firstscreen.component';
import { EventemitterService } from 'src/app/shared/eventemitter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  sessionData = {}
  index = 0
  detailMode = false
  gamesArray: Game[] = [];
  chipIsClicked = false;
  firstTime: boolean;
  subscription = new Subscription()
  daysOfWeek = ["M", "Tu", "W", "Th", "F", "Sa", "Su"]
  colorsOfWeek = []
  r: string = 'Rewards';
  g: string = 'Games';
  s: string = 'Statistics';
  constructor(
    private gameService: GameService,
    private router: Router,
    private modalController: ModalController, 
    private routerOutlet: IonRouterOutlet,
    private eventemitter: EventemitterService) { }

  ngOnInit() {

    // if they sart the game for the first time it shows the welcome screen and it also sets default path to this page
    this.gamesArray = this.gameService.getGames()
    let theFirstTime = localStorage.getItem('firstTime')
    if (theFirstTime) {
      this.firstTime = false
    } else {
      this.firstTime = true
    }

    if (this.firstTime === true) {
      this.presentModal()
      localStorage.setItem('firstTime', 'true')
    }
    localStorage.setItem('navpath', 'main')
    // this.gameService.getSessionData()
    // console.log('ngOnInit')
    // this.subscription = this.eventemitter.databaseemitter.subscribe(value => {
    //   let newArray = {}
    //     console.log(value)
    //     console.log('databasemitter')

    //     let gamesArray = this.gamesArray
    //     for (let game of gamesArray) {
    //       newArray[game.name] = []
    //     }
    //     for (let session of value) {
    //       if (newArray[session.game]) {
    //         newArray[session.game].push(     
    //           {
    //             date: session.date,
    //             level: session.level,
    //             score: session.score,
    //             time: session.time,
    //             wrongs: session.wrongs
    //           })
    //       }

    //     }
    //     this.sessionData = newArray
    //     this.filterForThisWeek()
    // })
  }

  // sets the default path to this page and it also fetches the sessions from the database and forms the activity log
  ionViewDidEnter() {
    localStorage.setItem('navpath', 'main')
    this.gameService.getSessionData()
    console.log('ngOnInit')
    this.subscription = this.eventemitter.databaseemitter.subscribe(value => {
      console.log(value)
      console.log('databasemitter')
      let newArray = {}
      let gamesArray = this.gamesArray
      for (let game of gamesArray) {
        newArray[game.name] = []
      }
      for (let session of value) {
        if (newArray[session.game]) {
          newArray[session.game].push(     
            {
              date: session.date,
              level: session.level,
              score: session.score,
              time: session.time,
              wrongs: session.wrongs
            })
        }
      }
      this.sessionData = newArray
      this.filterForThisWeek()
    })
  }

  //
  filterForThisWeek() {
    let sessiondays = []
    let playeddaysofweek = []
    let currdate = new Date()
    let currday = currdate.getDay()
    let startOfWeekDay = currdate.getDate() - currday + (currday == 0 ? -6:1);
    let startOfWeek = new Date(currdate.setDate(startOfWeekDay)).setHours(0, 0, 0, 0)
    console.log(new Date(startOfWeek), currday == 0 ? -6:1)
    console.log(new Date().getDay())
    let thisweeksgames = []
    for (let game of this.gamesArray) {
      for (let item of this.sessionData[game.name]) {
        if (new Date(item.date).valueOf() > startOfWeek) {
          thisweeksgames.push(new Date(item.date))
          sessiondays.push(new Date(item.date).getDay() + (new Date(item.date).getDay() == 0 ? 7 : 0))
        }
      }
    }

    for (let i = 0; i < 7; i++) {
      playeddaysofweek.push('')
      if (i <= new Date().getDay() + (currday == 0 ? 7:0) - 1) {
        playeddaysofweek[i] = 'red'
      }
      if (sessiondays.includes(i + 1)) {
        playeddaysofweek[i] = 'green'
      }
      if (i > new Date().getDay() + (currday == 0 ? 7:0) - 1) {
        playeddaysofweek[i] = 'grey'
      }
    }

    this.colorsOfWeek = playeddaysofweek
    console.log(playeddaysofweek)
    console.log(thisweeksgames)
  }


  toRewards() {
    //this.router.navigate('/');
  }

  // goes to games list
  toGames() {
    console.log("hi");
    this.router.navigate(['/home/games-list']);
  }

  // goes to unfinished stats page
  toStats() {
    this.router.navigate(['/home.page']);
  }

  // modal for first time
  async presentModal() {
    const modal = await this.modalController.create({
      component: FirstscreenComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      showBackdrop: true,
      backdropDismiss: true
    })
    await modal.present()
  }


  // onClickCard(gamename: string) {
    
  //   if (!this.chipIsClicked) {
  //     this.router.navigate(['/description/' + gamename])
  //   } else {
  //     this.chipIsClicked = false
  //   }
  // }

  // onClickChip(gamename: string) {
  //   let spacelessgamename = gamename.split(" ").join("")
  //   // removes spaces from gamename so the path is proper
  //   this.chipIsClicked = true
  //   this.router.navigate(['/' + spacelessgamename])
  // }

  onCheckGame(gamename?) {
    if (gamename) {
      this.index = gamename
    }
    console.log(this.sessionData[gamename], gamename)
    this.detailMode = !this.detailMode
  }

  // unsibscribes
  ionViewDidLeave() {
    console.log('leftview')
    this.subscription.unsubscribe()
  }

  // unsubscribes
   ngOnDestroy() {
     this.subscription.unsubscribe()
   }

}
