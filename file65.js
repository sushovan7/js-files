// methods
// functions inside object

// const person = {
//   firstName : "sushovan",
//   age : 23,
//   about : function(){
//     console.log(`the person name is ${this.firstName} and age is ${this.age}`)
//   }
// }
// person.about();


function personInfo(){
  console.log(`the person name is ${this.firstName} and age is ${this.age}`)
}

const person1 = {
  firstName : "sushovan",
  age : 23,
  about : personInfo
} 
const person2 = {
  firstName : "mukesh",
  age : 22,
  about : personInfo
} 
const person3 = {
  firstName : "sushant",
  age : 20,
  about : personInfo
} 
const person4 = {
  firstName : "dipesh",
  age : 24,
  about : personInfo
} 
person1.about();
person2.about();
person3.about();
person4.about();


   