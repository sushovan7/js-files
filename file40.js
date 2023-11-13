// functions declarations and functions expressions
///vvI in javascript

// function singHappyBirthday() {
//   console.log("Happy birthday to you.....");
// }

// singHappyBirthday()
// singHappyBirthday()

// function twoPlusFour(){
//   console.log(2+4);
// }

// twoPlusFour();

// function twoPlusFour() {
//   return (2 + 4)
// };
// console.log(twoPlusFour());
// const newValue = twoPlusFour();//naya variable ma haleko
// console.log(newValue);

// imp concept- making reusable function which is used in real world problems

// function sumTwoNumbers (number1 , number2)// eslai parameters vanxa
// {
//   return number1 + number2;
// }
// const returnedValue = sumTwoNumbers(6, 3);//eslai argument vanxa 6 ra 3 lai
// console.log(returnedValue);


// 3 ota number sum garne function
// function sumThreeNumbers (number1 , number2, number3)
// {
//   return number1 + number2 + number3;
// }
// const returnedValue = sumThreeNumbers(6, 3, 3);
// console.log(returnedValue);

//NaN means not a number



// function banaune odd or even
//input:1 number
//Output: true or false

// function isEven(onenumber){
//   if (onenumber % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(4))

//eslai aajai choto vanauna milxa i.e
// function isEven(onenumber) {
//   if (onenumber % 2 === 0) {
//     return true;
//   }
//   {
//     return false;
//   }
// }

// console.log(isEven(7));


// eslai ahai choto garna milxa i.e

// function isEven(onenumber) {
//   return onenumber % 2 === 0;

// }
// console.log(isEven(6));


// function banaune
// input ma linxa string 
// output ma first character dinxa

// function firstCharacter (anystring){
//   return anystring[0];
// }
// console.log(firstCharacter("sushovan"));

//function banaune
// input linxa array and target linxa number
//output ma dinxa index of target if target present in array


/*function findTarget(array , target){
  for(let i = 0 ;  i < array.length; i++){
    if(array[i] === target){
      return i;
    }
  }
  return -1;
}

const myArray = [1, 2, 3, 4, 5];
const ans = findTarget(myArray , 4);
console.log(ans);*/

// function expressions




// function lai kunai variable ma assign garovane teslai function expressions


// function area (length , bredth){
//   return length * bredth
// }
// console.log(area(2 , 3));

// console.log(undefined * undefined);


// function perimeter(radius)
// {
//   return 3.14*radius*radius;
// }
// // perimeter(4);
// // console.log(perimeter());

//  const ans = perimeter(8);
//  console.log(ans);
// function volume(length,breadth,height)
// {
//   return length*breadth*height;
// }
// const first=volume(3,4,5);
// console.log(first);

// let age=28;
// if (age>=18) {
//   console.log("You can vote")
  
// } else {
//   console.log("you cannot vote")
 
// }


let x=10;
if (x===10) {
  console.log("you guessed it right");
  
} else {
  if (x>10) {
    console.log("guess lower");
    
  } else {
    console.log("guess higher");
    
  };
  
};