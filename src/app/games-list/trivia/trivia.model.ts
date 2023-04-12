export class Riddle {
    public question: string;
    public answers: string[];
    public correct: string;
    
    
    constructor(question: string,  answers: string[], correct: string) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
}