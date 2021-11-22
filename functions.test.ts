const {shuffleArray} = require('./utils')
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

describe('shuffleArray should', () => {
    test ('length of array should return the same length as one provided', () => {
        expect(shuffleArray(testArr).length).toBe(testArr.length);
    })

    test('the returned array contains all elements of original array', () => {
        expect(shuffleArray(testArr).reduce((a,c) => !testArr.includes(c)?false: a, true)).toBe(true);
    })
})