// reduce method


const numbers = [1, 2, 3, 4, 5,10];
// aim sub number lai sum garne 
const sum = numbers.reduce((accumulator , currentValue) => {
  return accumulator + currentValue;
 },100);
 console.log(sum);

// accumulator, currentValue, return
//  1               2            3
//  3               3            6
//  6               4            10
//  10              5            15
//  15              10           25


const userCart = [
  {productId : 1 ,productName : "mobile", price:12000  },
  {productId : 2 ,productName : "laptop", price:32000  },
  {productId : 3 ,productName : "tv", price:15000  },
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
  return totalPrice + currentProduct.price 
},0) ;

console.log(totalAmount);