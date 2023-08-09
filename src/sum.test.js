import { sum } from './sum.js'

describe('Sum of numbers', () => {
  it('calls sum with result', () => {
    const cb = jest.fn()
    sum(1, 2, cb)
    expect(cb).toHaveBeenCalledWith(3)
  })
})
