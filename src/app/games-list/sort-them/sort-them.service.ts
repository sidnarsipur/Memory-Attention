import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SortThemService {
  numberofchips = 20
  height: number;
  width: number;
  level: number = 1;
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  smallalphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  radiusconstant = 55
  heightconstant = 70
  bottomconstant = 55
  colors = ["primary", "secondary", "tertiary", "warning", "danger", "dark", "medium", "light"]
  prevscore = 0

  // figures out the dimensions of the screen when the service is created
  constructor(private platform: Platform) { 
    this.getDimensions()
  }

  // figures out the radius and returns it
  getRadiusConstant() {
    return this.radiusconstant
  }

  // returns the game level
  getLevel() {
    return this.level
  }

  // figures out the button size from the screen size
  getDimensions() {
    this.height = +this.platform.height()
    this.width = +this.platform.width()
    let mode = this.platform.platforms()
    console.log(mode)
    let platform:string;
    for (let item of mode) {
      if (item === "ios") {
        this.heightconstant = 110
        platform = "ios"
      }
      if (item === "android") {
        this.heightconstant = 130
        this.bottomconstant = 75
        platform = "android"
      }
    }
    if (this.width*this.height >= 250126) {
      if (platform === "ios") {
        this.bottomconstant = 125
        if(this.width*this.height >= 786432) {
          this.bottomconstant = 125
        }
      }
    }

  }

  // makes the radius from the height of the screen
  generateRadiusConstant() {
    let height = this.height - this.heightconstant - this.bottomconstant
    let radconst = height/10
    if (radconst > 75) {
      radconst = 75
    }
    this.radiusconstant = radconst
    console.log(this.radiusconstant)
  }


  // generates coordinates for the buttons 
  generateCoordinates() {
    this.getDimensions()
    this.generateRadiusConstant()
    let top = []
    let left = []
    let array = []
    let toppossibilities: number[] = [];
    for (let tops = this.heightconstant; tops < this.height - this.bottomconstant;) {
      toppossibilities.push(tops)
      tops = tops + this.radiusconstant
    }
    let currenttoplength = toppossibilities.length
    for (let i = 1; i < this.numberofchips + 1; i++) {
      array.push({text: 1, color: "light", shape: "round"})
      let currentop = Math.round(Math.random()*(toppossibilities.length - 1))
      let currentleft = Math.round(Math.random()*(this.width - 80))
      top.push(toppossibilities[currentop])
      left.push(currentleft)
      console.log(toppossibilities, currentop, toppossibilities[currentop], toppossibilities[1])
      toppossibilities.splice(currentop, 1)
    }
    let topleft = this.seriesFixArray(currenttoplength, top, left)
    top = topleft.top
    left = topleft.left
    array = this.getArray(array)
    return {top: top, left: left, array: array}
  }

  // fixes the array if too many or too few coordinates are generated
  seriesFixArray(currenttoplength, top, left) {
    console.log(currenttoplength)
    if (currenttoplength < this.numberofchips) {
      let topleft = this.fixArray(currenttoplength, top, left)
      top = topleft.top
      left = topleft.left
      let tobefixed = top.length
      // for (let item of top) {
      //   if (item === undefined) {
      //     tobefixed = tobefixed - 1
      //   }
      // }
      // if (tobefixed < top.length) {
      //   let lefttop = this.seriesFixArray(tobefixed, top, left)
      //   top = lefttop.top
      //   left = lefttop.left
      // }
    }
    return {top, left}
  }

  // part of the series fix array function that generates new coordinates if the number of necessary buttons is greater than the number of coordinates generated
  fixArray(currenttoplength, top, left) {
      let numtobefixed = top.length - currenttoplength
      top.splice(top.length - numtobefixed, numtobefixed)
      left.splice(left.length - numtobefixed, numtobefixed)
      let i = 0
      let possibilities = []
      for (let coordinate of left) {
        if (coordinate + this.radiusconstant*2 < this.width - 80) {
          possibilities.push({top: top[i], left: coordinate + this.radiusconstant + 25 + Math.round(Math.random()*(this.width - 80 - (coordinate + this.radiusconstant*2)))})
        }
        if (coordinate - this.radiusconstant*2 > 0) {
          possibilities.push({top: top[i], left: coordinate - this.radiusconstant - 25 - Math.round(Math.random()*(coordinate - this.radiusconstant*2))})
        }
        i++
      }
      for (let i = 0; i < numtobefixed; i++) {
        let currenttopleft = possibilities.splice(possibilities.length - 1, 1)
        // if (currenttopleft.length === 0) {
        //   currenttopleft = [{top: undefined, left: undefined}]
        // }
        top.push(currenttopleft[0].top)
        left.push(currenttopleft[0].left)
      }
    return {top, left}
  }

  // based on level this function makes the proper array of numbers/ letters
  getArray(array: any[]) {
    let startindex = 0
    let numbersorletters = 0
    let multiple = 1
    let sevenoreight: boolean = this.level === 7 || this.level === 8
    if (this.level === 4) {
      numbersorletters = Math.round(Math.random()) + 1
    }
    if (sevenoreight) {
      numbersorletters = 1
      multiple = Math.round(Math.random()*5) + multiple + 1
    }
    if (this.level === 4 || sevenoreight) {
      if (numbersorletters === 1) {
        startindex = Math.round(Math.random()*10)
      }
      if (numbersorletters === 2) {
        startindex = Math.round(Math.random()*6)
      }
    }
    if (this.level === 6 || this.level === 9) {
      startindex = Math.round(Math.random()*6)
    }
    if (this.level === 10) {
      startindex = 2*Math.round(Math.random()*3)
    }
    console.log(array)
    for (let i = 1; i < array.length + 1; i++) {
      if (this.level === 1 || numbersorletters === 1) {
          array[i - 1].text = multiple*(i) + startindex
      }
      if (this.level === 2 || numbersorletters === 2) {
        array[i - 1].text = this.alphabet[i - 1 + startindex]
      }
      if (this.level === 3) {
        array[i - 1].text = this.smallalphabet[i - 1 + startindex]
      }
      if (this.level === 5 || this.level === 6) {
        if (i % 2 === 1) {
          array[i - 1].text = (i + 1)/2 + startindex
        }
        if (i % 2 === 0) {
          array[i - 1].text = this.alphabet[i/2 - 1 + startindex]
        }
      }
      if (this.level === 9) {
        switch(i % 3) {
          case 1:
            array[i - 1].text = (i - 1)/3 + startindex + 1
            break
          case 2: 
            array[i - 1].text = this.alphabet[(i - 2)/3 + startindex]
            break
          case 0: 
            array[i - 1].text = this.smallalphabet[(i - 3)/3 + startindex]
            break
        }
      }
      if (this.level === 10) {
        console.log(i % 4)
        switch (i % 4) {
          case 1:
            array[i - 1].text = (0.5*i) + 0.5 + startindex
            break
          case 2:
            array[i - 1].text = (0.5*i) + 1 + startindex
            break
          case 3:
            array[i - 1].text = this.alphabet[0.5*(i - 3) +startindex]
            break
          case 0:
            array[i - 1].text = this.smallalphabet[0.5*i - 1 + startindex]
            break
        }
      }
      if (this.level === 6 || this.level > 7) {
        array[i - 1].color = this.colors[Math.round(Math.random()*this.colors.length - 1)]
      }
    }
    console.log(array)
    return array
  }

  // level scenarios when it is level 10 or the score reaches 200
  increaseLevel(score) {
    if (this.level === 10) {
      return true
    }
    if (score >= 200) {
      this.level++
    }
  }

  // resets level
  endGame() {
    this.level = 1
  }
}
