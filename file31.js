//array destructuring

const myArray = ["value1", "value2", "value3", "value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myvar1 is", myVar1);
// console.log("value of myvar1 is", myVar2);
 

let [myVar1, myVar2, ...myNewArray]= myArray;
//let myNewArray = myArray.slice(2);
console.log("value of myvar1 is", myVar1);
console.log("value of myvar1 is", myVar2);
console.log(myNewArray); 