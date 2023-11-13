// same method is subclass
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}


class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age)
    this.speed = speed;
  }
     eat(){
      return `modified eat :  return ${this.name} is eating`;
    }

  run() {
    return `${this.name} is running at ${this.speed} kmph`
  }
}

// const dog1 = new Dog("tommy", 3, 45);
// console.log(dog1.isCute());
// console.log(dog1.run())
// console.log(dog1.eat())
