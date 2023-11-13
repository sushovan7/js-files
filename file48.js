//parameters destructuring

// used with objects
//mostly used in react

const person = {
  firstName: "sushovan",
  gender: "male",
  age: 25
}
//  function printDetails(obj){
//   console.log(obj.firstName);
//   console.log(obj.gender);
//   console.log(obj.age);
//  }

 function printDetails({firstName , gender , age}){
  console.log(firstName);
  console.log(gender);
  console.log(age);
 }

 printDetails(person);