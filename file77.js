// new keyword

function CreateUser(firstName, lastName, email, age, address) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.email = email;
 this.age = age;
 this.address = address; 
}
CreateUser.prototype.about = function(){
      return `${this.firstName} is ${this.age} years old`;
  };

  CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};

CreateUser.prototype.sing= function(){
  return 'toom na nan na la laa la'
};

const user1 = new  CreateUser("sushovan","bhattarai","sushovan@gmail.com",23,"bhaktapur")
const user2 = new CreateUser("sushant","bhattarai","sushovan@gmail.com",23,"bhaktapur")
const user3 = new CreateUser("susmukesh","bhattarai","sushovan@gmail.com",23,"bhaktapur")

console.log(user1);
console.log(user1.is18());
