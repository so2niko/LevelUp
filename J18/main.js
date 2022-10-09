mocha.setup('bdd');
const assert = chai.assert;

const expon = (...nums) => {
    return ;
}

//TESTS
describe('Exponentiation', () => {
    it('2 + 2 = 4', () => { assert.equal(sum(2, 2), 4); });
    it('0 + 0 = 0', () => { assert.equal(sum(0, 0), 0); });
    it('0 + 1 = 1', () => { assert.equal(sum(0, 1), 1); });
    it('-1 + 0 = -1', () => { assert.equal(sum(-1, 0), -1); });
    it('2 + 2 + 3 = 7', () => { assert.equal(sum(2, 2, 3), 7); });
    it('2 = 2', () => { assert.equal(sum(2), 2); });
    it('0 + 3 + (-2) + 11 = 12', () => { assert.equal(sum(0, 3, -2, 11), 12); });
    it('no arg = 0', () => { ass.equal(sum(), 0); });
    it('"2" + "2" = 4', () => { ass.equal(sum("2", "2"), 4); });
    it('1 + 1 + 1 + 1 + 1 = 5', () => { ass.equal(sum(1, 1, 1, 1, 1), 5); });
});

mocha.run();