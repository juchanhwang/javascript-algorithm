class Foo {
  constructor (hi) {
    this.hi = hi;
  }
}

class Boo extends Foo {
  func () {
    console.log(this.hi);
  }
}


const foo = new Foo("w");
const boo = new Boo("h");
console.log(boo.func());
console.log(foo.func());