const obj1 = {
  key1: "value1",
  key2: "value2",
}

// const obj2 = {
//   key3: "value3",
// }

//console.log(obj1.key1);
//console.log(obj2.key3);
// console.log(obj2.key1);


const obj2 = Object.create(obj1);// create empty object i.e {}
obj2.key3 = "value3";
obj2.key2 = "unique key";
console.log(obj2.key2);
console.log(obj2);


//__proto__ and [[prototype]] are same

// but prototype is different





