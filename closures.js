// function outerFunction(){
//   function innerFunction(){
//       console.log("hello world")
//   }
//   return innerFunction; 
// }

// const ans = outerFunction();
// //console.log(ans);  
// ans()


// first example of closure
// function printFullName(firstName,lastName){
//   function printName(){
//       console.log(firstName,lastName)
//   }
//   return printName; 
// }

// const ans = printFullName("sushovan","bhattarai");
// //console.log(ans);  
// ans()

//2nd example

// function hello(x){
//   const a = "varA";
//   const b = "varB";
//   return function(){
//     console.log(a,b,x);
//   }
// }
// const ans = hello("arg");
// ans();

//example 3

// function myFunction(power){
//   return function(number){
//     return number ** power
//   }
// } 
//   const square = myFunction(2);
// const ans = square(3);
// console.log(ans)

// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2)



// const myFunction = (power) => (number)=> number ** power   

// const square = myFunction(2);
// const ans = square(3);
// console.log(ans)

// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2)


// example

function func(){
  let counter = 0;
  return function (){
    if (counter<1){
      console.log ("hi you called me");
      counter++;
    } else {
      console.log("you already called me")
    }
  }
}
const myFunc = func();
myFunc();
myFunc();
const myfunc2 = func();
myfunc2();
myfunc2();