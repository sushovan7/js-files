//how to iterate object

const person = {
  name:"sushovan",//objects ko data by default string ma hunxa like name ra "name lekhnu eutai ho"
  age:23,
  job:"unemployed",
  "person hobbies": ["playing football", "sleeping", "watching movies"]//array ni milxa banauna object vitra
};


//for in loop

// for(let key in person){
//   //console.log(person[key]);
//   console.log(key ,":" ,person[key]);
// }

//object.keys

// for(let key of Object.keys(person)){
//   console.log(person[key]);
// }

// console.log(/*typeof*/(Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);