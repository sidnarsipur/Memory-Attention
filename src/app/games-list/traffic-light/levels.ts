import { level } from '../stroop-game/level.model'
import {Level} from './level'

// this contains the time, ratio of red to green to yellow, the interval between lights and the instructions for each level

export const Levels: Level[] = [
    //level 1
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 2000,
        totallength: 30000
    },
    //level 2
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 2000,
        totallength: 30000
    },
    //level 3
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 1000,
        totallength: 30000
    },
    //level 4
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 1000,
        totallength: 30000
    },
    //level 5
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 2000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 6
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 2000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 7
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 1000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 8
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 1000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 9
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 500,
        totallength: 30000,
        mode: "double-up"
    },
    //level 10
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 500,
        totallength: 30000,
        mode: "double-up"
    },
]