// important array methods

// for each 


// const numbers = [4, 5, 6, 7]

// function myFunc(number,index){
//   console.log(`index is ${index} number is ${number}`);
//   //console.log(`${number}*2 = ${number*2}`);
// }

// //  for(let i = 0; i < numbers.length; i++){
// //    myFunc(numbers[1],i);
// //  }

// numbers.forEach(function (number, index) {
//   console.log(`index is ${index} number is ${number}`);
// })


// real example in coding world 

// const users = [
//   {firstName : "sushovan" , age : 23},
//   {firstName : "mukesh ", age : 23},
//   {firstName : "dipesh" , age : 22},
//   {firstName : "sushant" , age : 19},
// ]

// //foreach
// // users.forEach(function(user, index){
// //   console.log(user.firstName, index);
// // });
 

// //for of
// // for(user of users){
// //   console.log(users.firstName)
// // }

// //by arrow function

// users.forEach((user, index)=>{
//   console.log(user.firstName , index);
// }
// )






// map method 
// very important


// const numbers = [1,4,7,5,9];

// function square (number){
//   return number * number;
// }
// let squaredNumbers = numbers.map(square);
// console.log(squaredNumbers);


// let squaredNumbers = numbers.map(function(number){
//   return number * number;
// });
// console.log(squaredNumbers);

// let squaredNumbers = numbers.map((number, index)=>{
//   return `${number * number},index: ${index}`;
// });
// console.log(squaredNumbers);

 


const users = [
  {firstName : "sushovan" , age : 23},
  {firstName : "mukesh ", age : 23},
  {firstName : "dipesh" , age : 22},
  {firstName : "sushant" , age : 19},
]

const userNames = users.map((user)=>{
  return user.firstName
})

console.log(userNames);