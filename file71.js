// file 70 ma gareko kura ma dherai kami kamjori thiyo 


const userMethods = {
  about : function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18 : function () {
    return this.age >= 18;
  }
}
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18; 
  return user;
}
const user1 = createUser("sushovan","bhattarai","sushovan@gmail.com",23,"bhaktapur")
const user2 = createUser("sushant","bhattarai","sushovan@gmail.com",23,"bhaktapur")
const user3 = createUser("susmukesh","bhattarai","sushovan@gmail.com",23,"bhaktapur")

console.log(user1.about());
console.log(user2.about());