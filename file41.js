// arrow function 
// important useful in react



//eslai function declaration vanxa

//  function singHappyBirthday() {
//   console.log("Happy birthday to you.....");
//  }

// // eslai function expression vanxa

// const singHappyBirthday = function () {
//    console.log("Happy birthday to you.....");
// }


//eslai arrow function vanxa

const singHappyBirthday = () => {
  console.log("Happy birthday to you.....");
}

singHappyBirthday();



const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2, 2, 2);
console.log(ans);


// const isEven = (onenumber) => {
//   return onenumber % 2 === 0 
//   }
// const answer = isEven(5);
// console.log(answer);

// mathi kolai esari lekhna milxa if euta matra parameter pass gareko xa vane
const isEven = onenumber => onenumber % 2 === 0
console.log(isEven(4));
