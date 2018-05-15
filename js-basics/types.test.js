const types = require('./types')

it('test', () => {
    expect(1).toBe(1)
})

it('isNumber_integer', () => {
    expect(types.isNumber(1)).toBe(true)
})

it('isNumber_float', () => {
    expect(types.isNumber(1.988)).toBe(true)
})

it('isNumber_positive_inf', () => {
    expect(types.isNumber(Number.POSITIVE_INFINITY)).toBe(true)
})

it('isNumber_string', () => {
    expect(types.isNumber()).toBe(false)
})

it('isNumber_empty_object', () => {
    expect(types.isNumber({})).toBe(false)
})