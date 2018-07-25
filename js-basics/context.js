let jessy = {
  name: 'jessy',
  greet: () => console.log("I'm " + this.name) // undefined, object doesn't count as a kind of enclosing environment 
};

jessy.greet();

let paul = {
  name: 'paul',
  greet: function() {
    console.log("I'm " + this.name)
  },
  waitAndGreet: function() {
    console.log('waiting for 2 seconds')
    setTimeout(() => {
      this.greet(); // 
    }, 2000)
  }
};

// paul.greet();
paul.waitAndGreet();

const greet = paul.greet;
// greet() // lose context