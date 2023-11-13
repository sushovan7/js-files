//difference between dot and bracket notation
const key = "email";
const person = {
  name:"sushovan",//objects ko data by default string ma hunxa like name ra "name lekhnu eutai ho"
  age:23,
  job:"unemployed",
  "person hobbies": ["playing football", "sleeping", "watching movies"]//array ni milxa banauna object vitra
};
//console.log(person["person hobbies"]);
person[key] = "bhattaraisushovan999@gmail.com";
console.log(person);