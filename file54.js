// sort method


// const numbers = [1, 47, 68, 899, 34, 5, 678];
// numbers.sort();
// console.log(numbers);

// javascript le number lai string manxa and ASCII code anusar sort garxa so expected result aayena

// const userNames = ["sushovan", "ankit", "sushant", "abc", "Mukesh", "Dipesh", "mohit"];
// userNames.sort();
// console.log(userNames);

// // string to case ma alphabetically sort hunxa and capital lai priority hunxa so first ma capital vako string sort hunxa and tespaxi  small letter

// //sahi tarika to sort numbers
// // const numbers = [1, 47, 68, 899, 34, 5, 678];
// // numbers.sort((a,b)=>a-b);//sort in ascending order
// // console.log(numbers);

// const numbers = [1, 47, 68, 899, 34, 5, 678];
// numbers.sort((a,b)=>b-a);//sort in descending order
// console.log(numbers);


const products = [
  {productId : 1, productName: "p1", price:200},
  {productId : 2, productName: "p2", price:300},
  {productId : 3, productName: "p3", price:1000},
  {productId : 4, productName: "p4", price:700},
  {productId : 5, productName: "p5", price:20},
]

// low to high 

// const lowToHigh = products.slice(0).sort((a,b) => {
//   return a.price - b.price
// });
// console.log(lowToHigh);


//high to low
const highToLow = products.slice(0).sort((a,b) => {
  return b.price - a.price
});
console.log(highToLow);