import adder from '../js/adder'
describe('Adder', () => {
  test('adds two numbers', () => {
    expect(adder(5, 3)).toEqual(8)
  })
})
