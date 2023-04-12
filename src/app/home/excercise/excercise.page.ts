import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.page.html',
  styleUrls: ['./excercise.page.scss'],
})
export class ExcercisePage implements OnInit {
  array = [ 1, 2, 3, 4, 5]
  constructor(
    private router: Router,
    private GameService: GameService
    ) { }

  // just sets it such that when the path is /home then it goes here
  ngOnInit() {
    localStorage.setItem('navpath', 'exercise-sets')
  }
  ionViewDidEnter() {
    localStorage.setItem('navpath', 'exercise-sets')
  }

  // navigates to the exercise set path
  onExcerciseSet(number) {
    this.router.navigate(['excercise-sets/' + number])
  }

  // gets the exercise set array
  returnExSetAray() {
    return this.GameService.excerciseSets
  }

}
