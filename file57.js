//some method

// const numbers = [2,45,8,9];

// // k kunai ek number even xa-> true

// const ans = numbers.some((numbers)=>numbers%2===0) ;
// console.log(ans);
 


const userCart = [
  {productId : 1 ,productName : "mobile", price:12000  },
  {productId : 2 ,productName : "laptop", price:29000  },
  {productId : 3 ,productName : "tv", price:15000  },
  {productId : 4 ,productName : "bike", price:150000  },
]

const ans = userCart.some((cartitem=> cartitem.price>100000));
console.log(ans);