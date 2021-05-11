
import { BallThrowable } from "./Bowling";

export class Round implements BallThrowable {
    previousRound: Round = null;
    points: number = 0;
    pins: number = 10;
    
    throwBall(pinsThrown: number) {
        this.pins -= pinsThrown;
        this.points += pinsThrown;
    }

    standingPins() {
        return this.pins;
    }

    currentPoints() {
        return this.points;
    }

    previous(): Round {
        return this.previousRound;
    }

}
