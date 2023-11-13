const user1 = {
  firstName:"sushovan",
  age: 23,
  about:function(){
    console.log(this.firstName,this.age)
  }
}


// don't do this mistake

const myFunc = user1.about.bind(user1);
myFunc();