// filter method

// const numbers = [1,2,3,5,6,7,8,9]

// const isEven = function(number){
//   return number%2 ===0;
// }

// let evenNumbers = numbers.filter(isEven);   

// console.log(evenNumbers);


// filter function ko callback function jaile pani booleans value return dinxa i.e true or false

const numbers = [1,2,3,5,6,7,8,9]

// const isOdd = function(number){
//   return number%2 !== 0;
// }

// let oddNumbers = numbers.filter(isOdd);   

// console.log(oddNumbers);

const isOdd = numbers.filter((number)=>{
  return number%2 !== 0;
});



console.log(isOdd);