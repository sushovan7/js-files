// clone using object.assign 

// const obj = {
//   key1: "value1",
//   key2: "value2",
// }
// // console.log(obj.key1);

// // const obj2 = {...obj};
// const obj2 = Object.assign({},obj);
// obj.key3 = "value3";

// console.log(obj);
// console.log(obj2);


const obj = {
  firstName : "sushovan",
  age : 23,
}

const obj2 = Object.assign({}, obj)
obj.gender = "male";
console.log(obj);
console.log(obj2);




