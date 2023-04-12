import { Injectable } from '@angular/core';
import { level } from './level.model'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StroopService {
  levelArray: level[] = 
    [
      new level (
        1,
        0,
        100,
        23,
        ['Black'],
        ['Red', 'Yellow', 'Green', 'Blue'],
        1,
        80
      ),
      new level (
        2,
        0,
        200,
        27,
        ['Red', 'Black', 'Yellow'],
        ['Red', 'Black', 'Yellow'],
        2,
        80
      ),
      new level (
       3,
       0,
       200,
       27,
       ['Yellow', 'Pink', 'Black'],
       ['Yellow', 'Pink', 'Black'],
      1,
      80
    
    ), 
      new level (
        4,
        0,
        200,
        27,
        ['Green', 'Blue', 'Red'],
        ['Green', 'Blue', 'Red'],
        2,
        80
      ),
      new level (
        5,
        0,
        200,
        27,
        ['Black', 'Green', 'Red', 'Blue'],
        ['Red', 'Black', 'Green', 'Blue'],
        1,
        80
      ),
      new level (
        6,
        0,
        200,
        27,
        ['Green', 'Blue', 'Black', 'Red'],
        ['Red', 'Black', 'Green', 'Blue'],
        1,
        80
      ),
      new level (
        7,
        0,
        200,
        27,
        ['Red', 'Yellow', 'Green', 'Blue'],
        ['Red', 'Brown', 'Yellow', 'Blue'],
        2,
        80
      ),
      new level (
        8,
        0,
        200,
        27,
        ['Red', 'Black', 'Green', 'Yellow'],
        ['Blue', 'Red', 'Yellow', 'Blue'],
        2,
        70
      ),
      new level (
        9,
        0,
        250,
        23,
        ['Yellow', 'Black', 'Green', 'Blue'],
        ['Red', 'Green', 'Black', 'Blue'],
        1,
        70
      ),
      new level (
        10,
        0,
        250,
        27,
        ['Red', 'Yellow', 'Green', 'Blue'],
        ['Red', 'Green', 'Yellow', 'Blue'],
        2,
        60
      )
    ]

  private level = new BehaviorSubject<level[]>(this.levelArray);
  sendlevel = this.level.asObservable();

  constructor() {}

  random(arr: string[]){
    let string: string = arr[Math.floor(Math.random() * arr.length)]
    return string ;
  }
}