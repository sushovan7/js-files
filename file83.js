// getter and setters

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(fullName) {
    const [firstName,lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

const person1 = new Person("sushovan", "bhattarai", 23);
//  console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("ankit","niroula")
// person1.firstName = "ankit"; 
// person1.lastName = "niraula"; 
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "ankit bhattarai"
console.log(person1);

