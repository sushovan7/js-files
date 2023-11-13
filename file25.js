// how to clone array 

// how to concatenate arrays\s

//method1

// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// console.log(array1===array2);
// array1.push("item3");
// console.log(array1);
// console.log(array2);

//method2

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// console.log(array1===array2);
// array1.push("item3");
// console.log(array1);
//  console.log(array2);

//method3 / new method ... is spread operator

// let array1 = ["item1", "item2"];
// let array2 = [...array1];
// console.log(array1 === array2);
// array1.push("item3");
//  console.log(array1);
//  console.log(array2);


// let array1 = ["item1", "item2"];
// //let array2 = array1.slice(0).concat(["item3","item4"]);
// //let array2 = [].concat(array1, ["item3","item4"]);
// let array2 = [...array1, "item3","item4"];
// console.log(array1===array2);
// array1.push("item3");
// console.log(array1); 
// console.log(array2);

let array1 = ["item1", "item2"];
let oneMorearray = ["item3", "item4"];
let array2 = [...array1,...oneMorearray ];
console.log(array1===array2);
array1.push("item3");
console.log(array1); 
console.log(array2);

























