export class level {
    lvlNo: number ;
    totalScore: number ;
    scoreReq: number ; 
    elementCount: number ;
    colorPool: string[];
    wordPool: string[]
    type: number;
    ratio: number;
    
    
    constructor (lvlNo:number, totalScore:number, scoreReq: number, elementCount:number, colorPool: string[],wordPool:string[], type:number, ratio:number){
       this.lvlNo = lvlNo ;
       this.totalScore = totalScore ;
       this.scoreReq = scoreReq ;
       this.elementCount = elementCount ;
       this.colorPool = colorPool ;
       this.wordPool = wordPool ;
       this.type = type ;
       this.ratio = ratio
    }
}