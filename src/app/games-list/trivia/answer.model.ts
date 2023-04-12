export class Answer {
    public value: string;
    public color: string;
    public disabled: boolean;
    
    constructor(value: string,  color: string, disabled: boolean) {
        this.value = value;
        this.color = color;
        this.disabled = disabled;
    }
}