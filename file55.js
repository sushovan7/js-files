// find  method 


// const myArray = ["dog", "cat", "lion", "tiger"]; 
// function isLength3 (string){
//   return string.length=== 3;
// }
// const ans = isLength3("dog");
// console.log(ans);


//use of find method

// const myArray = ["dog", "cat", "lion", "tiger"]; 
// function isLength3 (string){
//   return string.length=== 3;
// }

// const ans = myArray.find(isLength3)
// console.log(ans);

//realistic example

const users = [
  {userId:1,userName:"sushovan"},
  {userId:2,userName:"mukesh"},
  {userId:3,userName:"dipesh"},
  {userId:4,userName:"sushant"},
  {userId:5,userName:"ankit"},
]

const finduserId = users.find((user)=> {
  return user .userId ===3;
})
console.log(finduserId);