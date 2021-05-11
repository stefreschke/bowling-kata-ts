
import { assert, expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import { Round } from "../src/Round";

describe('Bowling Game', () => {
    let round: Round = new Round();

    it ("previous round is null", () => {
        expect(round.previous()).to.be.null;
    });

});
