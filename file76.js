 // new keyword

 function createUser (firstName,age){
  this.firstName = firstName;
  this.age = age;
 };
 createUser.prototype.about = function(){
  console.log(this.firstName, this.age);
 };

 const user1 = new createUser("sushovan",23);
 user1.about();

 // this = empty object {}
 // return this i.e return empty object

