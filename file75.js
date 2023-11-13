// const userMethods = {
//   about : function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18 : function () {
//     return this.age >= 18;
//   },
//   sing : function(){
//     return 'toom na nan na la laa la'
//   }
// }
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function(){
      return `${this.firstName} is ${this.age} years old`;
  };

  createUser.prototype.is18 = function(){
    return this.age >= 18;
};

createUser.prototype.sing= function(){
  return 'toom na nan na la laa la'
};

const user1 = createUser("sushovan","bhattarai","sushovan@gmail.com",23,"bhaktapur")
const user2 = createUser("sushant","bhattarai","sushovan@gmail.com",23,"bhaktapur")
const user3 = createUser("susmukesh","bhattarai","sushovan@gmail.com",23,"bhaktapur")


 
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
 