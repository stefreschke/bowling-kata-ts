import { assert, expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import { BallThrowable, BowlingGame } from '../src/Bowling';
import { Round } from "../src/Round";

describe('Bowling Game', () => {
    describe('basic instantiation', () => {
        let game: BowlingGame = new BowlingGame();

        it('has one registered player', () => {
            expect(game.players).to.equal(1);
        });

        it('has 10 standing pins', () => {
            expect(game.pins).to.equal(10);
        });
    });

    describe('basic throwing API', () => {
        [BowlingGame, Round].forEach((myClass) => {
            [1, 4, 5, 6].forEach((pinNumber) => {
                describe('do a single throw', () => {
                    let game: BallThrowable = new myClass;
                    game.throwBall(pinNumber);

                    it('standing pins are changing', () => {
                        expect(game.standingPins()).to.equal(10 - pinNumber);
                    });

                    it('counts some points', () => {
                        expect(game.currentPoints()).to.equal(pinNumber);
                    });
                });
            });
        });
    });
});
