// every method

// const numbers = [2,4,6,8,10];
// const ans = numbers.every((number)=>{
//   return number%2 ===0;
// })
// console.log(ans);

// callback function -> true/false (boolean)

//every method -> true/false (boolean)

// const numbers = [2,4,6,8,9,10];
// function isEven(number){
//   return number %2 === 0;
// }
// console.log(numbers.every(isEven));


//realistic example 

const userCart = [
  {productId : 1 ,productName : "mobile", price:12000  },
  {productId : 2 ,productName : "laptop", price:29000  },
  {productId : 3 ,productName : "tv", price:15000  },
]
// is price of every product is less than 30000

const ans = userCart.every((cartitem)=>{
  return cartitem.price < 30000
})
console.log(ans);


