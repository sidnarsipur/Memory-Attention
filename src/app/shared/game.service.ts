import { Injectable } from '@angular/core';
import { Device } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { DataService } from './data.service';
import { Game } from './game.model';

@Injectable({providedIn: 'root'})
export class GameService {
    timer = 0
    pausetimer = 0
    timerfunc;
    scoreconstant = 50
    scoringconstant = 200;
    // defines the levels and types of the exercise sets
    excerciseSets: any[] = 
    [
        {type: 1, level: [1,2]},
        {type: 2, level: [1,2]},
        {type: 1, level: [3,4]},
        {type: 2, level: [3,4]},
        {type: 1, level: [5,6]},
        {type: 2, level: [5,6]},
        {type: 1, level: [7,8]},
        {type: 2, level: [7,8]},
        {type: 1, level: [9,10]},
        {type: 2, level: [9,10]},
    ]
    excerciseSetsDescription: any[] = [{
        gameIndexes: [{number: 6, spclVar: 0}, 0, 1, 4, 3, {number: 5, spclVar: 0}, 8, 9, 10]
    }, {
        gameIndexes: [{number: 6, spclVar: 1}, 2, 1, 9, 7, {number: 5, spclVar: 1}, 8, 9, 10]
    }]

    // array of game names, taglines and descriptions and asset URls
    gamesArray: Game[] =  
    [   
        new Game(
            'Digit Span',
            'Test your memory!',
            // 'growing list of numbers and letters that are shown which the user has to repeat',
            `This game targets your short-term memory.

            Goal: Recall lists of numbers as they appear on the screen
            
            How to Play:
             - Numbers will appear in a sequence on the screen, one at a time
             - Memorize them
             - Select the numbers in the order they appeared
             - Select Submit
             - Earn ` + this.scoringconstant + ` points to advance to the next level
             - The number of digits will increase with levels
            `, 
            '../../assets/game-icons/digit-span-icon.png',
            '../../assets/start-images/digit-span.png'
        ),
        new Game(
            'Trivia',
            'Under Development, not in a condition to be tested.',
            // 'riddles from a database are shown and the user has to answer',
            `This game targets your long-term memory and general knowledge.

            Goal: Respond to general knowledge questions
            
            How to Play:
             - Read the question carefully
             - Select your answer choice
             - Select submit
             - Click on ‘Next Question’ to proceed
             - Earn ` + this.scoringconstant + ` points to advance to next the next level
            `,
            '../../assets/game-icons/riddles-icon.png',
            ''
        ),
        new Game(
            'Card Span',
            "What's your favorite suite?",
            // 'Cards from a deck of 52 are shown and the user has to input which cards they saw afterward',
            `This game targets your short term memory and attention.

            Goal: Select the cards in the order they appear
            
            How to Play:
             - Memorize the cards that appear on the screen
             - Recall and select the suit and rank
             - Select submit
             - Earn ` + this.scoringconstant + ` points to advance to next the next level
            `,
            '../../assets/game-icons/card-span-icon.png',
            '../../assets/start-images/card-span.png'
        ),
        new Game(
            'Traffic Light',
            "Catchphrase has to be added.",
            `This game targets your reflexes and attention.

            Goal: Respond quickly to the color given
            
            How to Play:
             - 3 circles appear on the screen
             - Read the directions on top for color
             - Select the circle only when the desired color appears
             - Earn ` + this.scoringconstant + ` points to advance to next the next level
            `,
            '../../assets/game-icons/traffic-light-icon.png',
            '../../assets/start-images/traffic-light.png'
        ),
        new Game(
            'Number Sort',
            "",
            `This game targets your attention. 

            Goal: Sort or categorize numbers and/or letters in the order given within the time limit.
            
            How to Play:
             - Numbers or letters will be scattered on the screen
             - Select the correct numbers or letters in the order
             - Earn 50 points for correct selection
             - Earn ` + this.scoringconstant + ` points to advance to the next level
             - Incorrect selection will result in losing 4 points
            `,
            '../../assets/game-icons/sort-them-icon.png',
            '../../assets/start-images/sort-them.png'
        ),
        new Game(
            'Word Pairs',
            "Catchphrase has to be added.",
            `This game targets your short-term memory.

            Goal: Remember and rematch word pairs in record time 
            
            How to Play:
             - Memorize the pairs of words that flash on the screen
             - Match the pair by selecting
             - Click or touch ‘submit’ button
             - Earn ` + this.scoringconstant + ` points to advance to the next level
            `,
            '../../assets/game-icons/word-pairs-icon.png',
            ''
        ), 
        new Game(
            'Word to Images',
            "Catchphrase has to be added.",
            `This game targets your short-term memory.

            Goal: Match the correct words to their corresponding images
            
            How to Play:
             - List of words or images appear on screen once
             - Memorize them
             - Click or touch ‘submit’ button
             - Earn ` + this.scoringconstant + ` points to advance to the next level
            `,
            '../../assets/game-icons/word-to-images-icon.png',
            ''
        ),
        new Game(
            "Stroop Game",
            "",
            `Welcome to Stroop Test! This game tests your ability to improve your selective attention  and control of  cognitive interference.

            The goal of the game is to click on all the words that fit the criteria given and improve your time for each round. 
            
            Good Luck! 
            `,
            "../../assets/game-icons/stroop-icon.png",
            ''
        ),
        new Game(
            "Word Finder",
            "Under Development",
            `This game targets your vocabulary and long term memory.

            Goal: Find all the possible words using the letters in a given word
            
            How to Play:
             - Make words with three or more letters
             - Select the desired letters
             - Select ‘add word’ 
             - Select ‘submit’ when ready
             - Earn ` + this.scoringconstant + ` points to advance to the next level
            `,
            "../../assets/game-icons/word-finder-icon.png",
            ''
        ),
        new Game(
            "Matrix Reasoning",
            "Under Development",
            `This game targets your visual and spatial abilities.

            Goal: Complete the pattern correctly
            
            How to Play:
             - Examine the pattern carefully
             - Select the number that matches the answer choice
             - Select submit
             - Earn ` + this.scoringconstant + ` points to advance to next the next level
            `,
            "../../assets/game-icons/visual-puzzles-icon.png",
            ''
        )
    ]

    constructor(private dataService: DataService, private platform: Platform) {
        // dataService.take1()
        // dataService.testRequest()
        dataService.getLocalID()
        if (platform.is("capacitor") === true) {
        }
    }

    // returns the array of games
    getGames() {
        return this.gamesArray
    }

    trivia(){
        this.dataService.getTriviaData()
    }

    matrixreasoning(){
        this.dataService.getMatrixReasoningData()
    }

    // starts the common timer function
    startTimer() {
        this.timer = 0
        if (this.timerfunc) {
            clearInterval(this.timerfunc)
            this.pausetimer = 0
        }
        this.timer = this.timer + this.pausetimer
        this.pausetimer = 0
        this.timerfunc = setInterval(() => {
            this.timer = this.timer + 1000
        }, 1000)
    }

    // pauses the timer function
    pauseTimer() {
        clearInterval(this.timerfunc)
        this.timerfunc = undefined
        this.pausetimer = this.timer
    }

    // clears the timer and returns the time
    clearTimer() {
        clearInterval(this.timerfunc)
        this.timerfunc = undefined
        this.pausetimer = 0
        return this.timer
    }

    // common score function
    getScore(totalnumber, wrongs) {
        let gamescore = Math.round(this.scoreconstant - this.scoreconstant*(wrongs)/totalnumber)
        if (gamescore < 0) {
            gamescore = 0
        }
        return gamescore
    }

    // stores level and score and other data in the database
    storeLevelScore(gameno, score, level, excerciseSetMode, time?, wrongs?, prevscore?: number, prevlevel?: number) {
        this.dataService.storeLevelScore(this.gamesArray[gameno].name, score, level, excerciseSetMode, time, wrongs, prevscore, prevlevel)
    }

    // gets level and score from the database
    getLevelScore(gameno, excerciseMode) {
        this.dataService.getLevelScore(this.gamesArray[gameno].name, excerciseMode)
    }

    getSessionData() {
        this.dataService.getSessionData()
    }

    // gets information for games such as key word pairs etc using the path
    gameinfoget(path) {
      this.dataService.gameinfoget(path)
    }

    // just returns the scoring constant which is a variable at which the game proceeds to the next level if the score is greater than or equal to it
    getScoringConstant()
    {
        return this.scoringconstant;
    }
}