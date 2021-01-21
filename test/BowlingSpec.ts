
import { assert, expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import { BowlingGame } from '../src/Bowling';

describe('Bowling Game', () => {
    
    describe('basic instantiation', () => {
        it('has one registered player', () => {
            let game: BowlingGame = new BowlingGame();
            expect(game.players).to.equal(1);
        });
    });

});
