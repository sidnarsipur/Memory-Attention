export class Game {
    public name: string;
    public catchphrase: string;
    public description: string;
    public thumbnailURL: string;
    public startURL: string;
    constructor(name: string, catchphrase: string, description: string, thumbnailURL: string, startURL: string) {
        this.name = name;
        this.catchphrase = catchphrase;
        this.description = description;
        this.thumbnailURL = thumbnailURL;
        this.startURL = startURL
    }
}