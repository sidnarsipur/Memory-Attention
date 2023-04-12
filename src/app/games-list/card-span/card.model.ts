export class Card {
    public imgURL: string;
    public name: string;
    public suite: string;
    constructor(imgURL: string, name: string, suite: string) {
        this.imgURL = imgURL;
        this.name = name;
        this.suite = suite;
    }
}