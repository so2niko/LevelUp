mocha.setup('bdd');
const assert = chai.assert;

const pow = (x) => {
    return x*x
}


describe('Pow', () => {
    it('2^2 = 4', () => { assert.equal(pow(2), 4); });
    it('14^2 = 196', () => { assert.equal(pow(14), 196); });
    it('0^2 = 0', () => { assert.equal(pow(0), 0); });
    it('3.75^2 = 14.0625', () => { assert.equal(pow(3.75), 14.0625); });
    it('text^2 = 14.0625', () => { assert.equal(isNaN(pow('text')), true); });
});


const convert = (y) => {
    return y*2.20462
}

describe('Convertion kg to pounds', () => {
    it('5 kg = 11,0231 pounds', () => { assert.equal(convert(5), 11.0231); });

});


const isFibonachiNumber = (t) => {
    const Fibonachi = [0, 1]
    
    for (let i = 0, n = 0, m = 1; i < 10000; i++, n++, m++) {
        Fibonachi.push(Fibonachi[n] + Fibonachi[m])
    }
    return Fibonachi.includes(t)

}


describe('Fibonachi', () => {
    it('32951280099 is Fibonachi Number', () => { assert.equal(isFibonachiNumber(32951280099), true); });
    it('2458696 is not Fibonachi Number', () => { assert.equal(isFibonachiNumber(2458696), false); });

});

mocha.run();