export class Winner {
    public id: number;

    public wins: string;

    public time: string;

    constructor(id: number, wins: string, time: string) {
        this.id = id;
        this.wins = wins;
        this.time = time;
    }
}
