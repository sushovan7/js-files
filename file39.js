//nested destructuring

const users = [
  {userId:1, firstName:"sushovan", gender:"male"},
  {userId:2, firstName:"sushant", gender:"male"},
  {userId:3, firstName:"reshma", gender:"female"},
];


const [{firstName:userFirstName, userId}, ,{gender:user3Gender}] = users;
console.log(userFirstName);
console.log(userId);
console.log(user3Gender);