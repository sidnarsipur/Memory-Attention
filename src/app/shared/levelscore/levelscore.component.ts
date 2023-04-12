import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './levelscore.component.html',
  styleUrls: ['./levelscore.component.scss'],
})
export class LevelscoreComponent implements OnInit {
  @Input('level') level: number;
  @Input('score') score: number;

  constructor() { }

  ngOnInit() {}

  getScore() {
    if (JSON.stringify(this.score).length > 4) {
      this.score = +JSON.stringify(this.score).slice(0,4)
    }
    return this.score
  }

  getLevel() {
    return JSON.stringify(this.level)
  }
}
