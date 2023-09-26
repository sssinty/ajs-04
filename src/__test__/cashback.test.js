import calculateCashback from '../cashback.js'
test('cashback at sum: 500', () => {
    const result = calculateCashback(500);
    expect(result).toBe(0);
}) 
const dataList = [
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 1000, 10],
    ['no', 500, 0],
];

const heandler = test.each(dataList);

heandler('testing cashback function with %s status and i amount', (status, amount, expected) => {
    const result = calculateCashback(amount)
    expect(result).toBe(expected)
})