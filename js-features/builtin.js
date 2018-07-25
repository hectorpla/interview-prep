const obj = {
    a: 1,
    b: 2
}

const add = (a, b) => a + b

console.log(`type of add is ${typeof add}`)
console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]))
