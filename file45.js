// block scope vs function scope


// let and const are block scope
//var is function scope

// {
//   let firstName = "sushovan";
//   console.log(firstName);
// }
//console.log(firstName);
// esto garna mildaina let ra const ko case ma jun block ma let ra const define gareko hunxa tei block bitra matra hami teslai access garna sakxau

// {
//   let firstName = "sushant";
//   console.log(firstName);
// }

// {
//   const firstName = "sushant";
//   console.log(firstName);
// }

// const firstName = "dipesh";
// console.log(firstName);


// {
//   var firstName = "mukesh";
// }
// console.log(firstName);

// if(true){
//   let firstName = " sushovan";
//   console.log(firstName);
// }
// console.log(firstName);


// function myApp (){
//   if(true){
//       let firstName = " sushovan";
//       console.log(firstName);
//      }
//      console.log(firstName);
// }
// myApp();


function myApp (){
  if(true){
      var firstName = " sushovan";
      console.log(firstName);
     }
     console.log(firstName);
}
myApp();

