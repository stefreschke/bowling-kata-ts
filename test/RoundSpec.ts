import { assert, expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import { BallThrowable } from '../src/Bowling';
import { Round, RoundInterface } from '../src/Round';

describe('Bowling Game', () => {
    describe('instantiated', () => {
        let round: RoundInterface = new Round();

        it('previous round is null', () => {
            expect(round.previous()).to.undefined;
        });

        it('previous round can be set', () => {
            let prev: RoundInterface = new Round();
            round.setPrevious(prev);
            expect(round.previous()).to.equal(prev);
        })
    });

    describe('throw twice on first round', () => {
        let firstRound: BallThrowable = new Round();
        firstRound.throwBall(5);
        firstRound.throwBall(4);

        it('counts points of both throws', () => {
            expect(firstRound.currentPoints()).to.be.equal(9);
        });

        it('has a single pin remaining', () => {
            expect(firstRound.standingPins()).is.equal(1);
        });
    });

    describe('throw spare on first round', () => {
        let firstRound: BallThrowable = new Round();
        firstRound.throwBall(5);
        firstRound.throwBall(5);

        it('counts points of both throws', () => {
            expect(firstRound.currentPoints()).to.equal(10);
        });

        it('has no pin remaining', () => {
            expect(firstRound.standingPins()).is.equal(0);
        });

        it("cannot throw on", () => {
            let throws: number = firstRound.numberOfRemainingThrows();
            expect(throws).to.equal(0);
            expect(() => { firstRound.throwBall(1) }).to.throw();
        });
    });
});
