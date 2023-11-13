// Maps
// map is an iterable
// store data is ordered function
//store key value pair (like object)
//duplicate keys are not allowed like objects


// difference between Maps and objects
//objects can only have string or symbol as a key

//in maps u can use anything as key like array , number , string

//objects leterals vanxa eslai
// const person = {
//   firstName: "sushovan",
//   age: 23,
//   1 : "one"  
// }
// //console.log(person.firstName);
// //arko tarika
// // console.log(person["firstName"]);
// for(let key in person){
//   console.log(typeof key);
// }

// using map

// const person = new Map(); 
// person.set("firstName","sushovan");
// person.set("age",23);
// person.set(1,"one");
// console.log(person);
// person.set([1,2,3],"one");

// // how to access key value pair in Map

// // console.log(person.get("age"));
// // console.log(person.get(1));
// // console.log(person.keys());

// for(let key of person.keys()){
//   console.log(key, typeof key);
// }

// for(let [key,value] of person){
//   console.log(key,value);
// }

const person1 = {
  id:1,
  firstName:"sushovan"
}

const person2 = {
  id:2,
  firstName:"dipesh"
}

const extraInfo = new Map(); 
extraInfo.set(person1,{age:23,gender:"male"});
extraInfo.set(person2,{age:24,gender:"male"});
// console.log(extraInfo);
console.log(person1.id)
console.log(extraInfo.get(person1).gender)
console.log(extraInfo.get(person2).age)

 


// const person = new Map([["firstName","sushovan"],["age",23]]) ;
// console.log(person);