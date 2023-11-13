// default parameters

// normal aproach

// function addTwoNumbers (a , b){
// return a + b;
// }
// const ans = addTwoNumbers(2,2);
// console.log(ans);

//eti b ko value user le diyena vane by default b ko value kati ra kasari set garne tarika(old approach)

// function addTwoNumbers (a , b){
//   if(typeof b === "undefined"){
//     b = 1;
//   }
//   return a + b;
//   }
//   const ans = addTwoNumbers(2);
//   console.log(ans);


//new and easy approach 

function addTwoNumbers (a , b=4){
  return a + b;
  }
  const ans = addTwoNumbers(2,9);
  console.log(ans);