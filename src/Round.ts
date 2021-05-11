import { exception } from 'console';
import { BallThrowable } from './Bowling';

export interface RoundInterface extends BallThrowable {
    previous(): RoundInterface;
    setPrevious(prev: RoundInterface): void;
}

export class Round implements RoundInterface {
    remainingThrows: number;

    previousRound: RoundInterface;
    points: number = 0;
    pins: number = 10;

    constructor(isLastRound: boolean = false) {
        this.remainingThrows = isLastRound ? 3 : 2;
    }

    throwBall(pinsThrown: number) {
        if (this.remainingThrows > 0) {
            this.pins -= pinsThrown;
            this.points += pinsThrown;
            this.remainingThrows--;
        }
        else throw exception("cannot throw on finished round");
    }

    standingPins() {
        return this.pins;
    }

    currentPoints() {
        return this.points;
    }

    numberOfRemainingThrows(): number {
        return this.remainingThrows;
    }

    previous(): RoundInterface {
        return this.previousRound;
    }

    setPrevious(prev: RoundInterface) {
        this.previousRound = prev;
    }
}
