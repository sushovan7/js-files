//  very very important

// const user = {
//   firstName: "sushovan",
//   lasrName: "bhattarai",
//   email: "sushovan@gmail.com",
//   age: 23,
//   about: function(){
//     return `${this.firstName} is ${this.age} years old`
//   },
//   is18: function(){
//     return this.age >= 18
//   }
// }
// const aboutUser = user.about();
// console.log(aboutUser);
// console.log(user.is18());

// yo tarika le lakh crore user one by one banauna garo hunxa so ramro approach folloe garnu parxa
//fot that hami euta function banauxun jasle as a input linxa and return object garxa


function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${age} years old`;
  }
  user.is18 = function () {
    return this.age >= 18;
  }
  return user;
}
const user1 = createUser("sushovan","bhattarai","sushovan@gmail.com",23,"bhaktapur")
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);




