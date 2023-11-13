// for in loop in loop

const fruits = ["fruit1","fruit2","fruit3","fruit4"]; 
const fruitsarray = [];
for(let index in fruits){
  fruitsarray.push(fruits[index].toUpperCase());
}
console.log(fruitsarray);




// important note
// array sanga hami for in ra while loop dherai kaam use garinxa. for of loop ra traditional loop dherai use hunxa array sanga

// traditional loop -----
//for (let i = 0 , i < arrayName.length, i++) type ko