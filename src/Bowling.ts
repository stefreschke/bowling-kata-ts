
import { Round } from "./Round";

export interface BallThrowable {
    numberOfRemainingThrows(): number;
    throwBall(pinsThrown: number): void;
    standingPins(): number;
    currentPoints(): number;
}

export class BowlingGame implements BallThrowable {

    round: Round;
    players: number;
    pins: number;

    constructor() {
        this.round = new Round();
        this.players = 1;
        this.pins = 10;
    }
    
    numberOfRemainingThrows(): number {
        throw new Error("Method not implemented.");
    }
    
    throwBall(pinsThrown: number) {
        this.round.throwBall(pinsThrown);
    }

    standingPins() {
        return this.round.standingPins();
    }

    currentPoints() {
        return this.round.currentPoints();
    }
}
