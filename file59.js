// splice method
// start , delete , insert

const myArray = ["item1","item2","item3"];

//delete

// myArray.splice(1,1);
// console.log(myArray);

//insert

// myArray.splice(1,0,"inserted item")
// console.log(myArray);

// insert and delete

const deletedItem = myArray.splice(1,2,"item4","item5")
console.log(deletedItem);
console.log(myArray);