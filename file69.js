// arrow functions

// const user1 = {
//   firstName:"sushovan",
//   age: 23,
//   about:() => {
//     console.log(this.firstName,this.age)
//   }
// }
// user1.about();


//useful information
const user1 = {
  firstName:"sushovan",
  age: 23,
  about  (){
    console.log(this.firstName,this.age)
  }
}
user1.about();