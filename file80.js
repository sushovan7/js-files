// class keyword 
// es6 ma aako theo

class CreateUser{
  constructor(firstName, lastName, email, age, address){
    console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about(){
    return `${this.firstName} is ${this.age} years`
  }
  is18(){
    return this.age >= 18;
  }
  sing(){
    return 'toom na nan na la laa la'
  }
  func(a){
    console.log(a);
  }
}

const user1 = new CreateUser("sushovan", "bhattarai", "sushovan@gmail.com", 23, "bhaktapur")
const user2 = new CreateUser("sushant", "bhattarai", "sushovan@gmail.com", 2, "bhaktapur")
const user3 = new CreateUser("susmukesh", "bhattarai", "sushovan@gmail.com", 23, "bhaktapur")

console.log(user1.firstName);
console.log(user2.is18());
console.log(user1.sing());
console.log(Object.getPrototypeOf(user1));
user1.func("love u all");

