// sets (it is iterable)
// store data
// sets also have its  own methods
// no index-based access
// order is not guranteed
// unique items only(no duplicated allowed)


// Set ko S capital hunxa
// const numbers = new Set([1,2,3,]);//duplicate allowed xaina set le duplication lai ignore garxa
// numbers.add(4)
// numbers.add('items') 
// console.log(numbers)

// // console.log(numbers[2]);//index based approach xaina

// //set ma kunai element xa ki xaina vanera check garne tarika

// if(numbers.has(2)){
//   console.log("2 is present")
// }else{
//   console.log("number is not present")
// }


// example

// const items = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(1); 
// numbers.add(2); 
// numbers.add(3); 
// numbers.add(4); 
// numbers.add(5); 
// numbers.add(6); 
// numbers.add(items);

// // console.log(numbers);

// for ( let number of numbers){
//   console.log(number);
// }


// set lai teti bela use garne jati bela hami sanga unique id haru hunxan ra teo id ek choti vanda badi aaudaina


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElement = new Set(myArray);//esari kunai pani array bata unique element extract garna sakinxa Set ko help le
// console.log(uniqueElement);
// console.log(myArray);

let length = 0;
for (let element of uniqueElement){
  length++
}
console.log(length);


