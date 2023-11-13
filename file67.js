// important concept

// function hello (){
//   console.log("hello world");
// }
// hello.call();


// const user1 = {
//   firstName:"sushovan",
//   age: 23,
//   about:function(){
//     console.log(this.firstName,this.age`)
//   }
// }
// // user1.about();

// const user2 = {
//   firstName:"mukesh",
//   age: 22,
//    }

//    user1.about.call(user2);

//  const user1 = {
//   firstName:"sushovan",
//   age: 23,
//   about:function(hobby,favmusician){
//     console.log(this.firstName, this.age,hobby,favmusician)
//   }
// }
// // user1.about();

// const user2 = {
//   firstName:"mukesh",
//   age: 22,
//    }

//    user1.about.call(user2,"guitar","john lehnon");


//  function about(hobby,favmusician){
//   console.log(this.firstName, this.age,hobby,favmusician)
// }

//    const user1 = {
//     firstName:"sushovan",
//     age: 23,

//   }

//   const user2 = {
//     firstName:"mukesh",
//     age: 22,
//      }

//      about.call(user2,"guitar","john lehnon");


//apply


function about(hobby, favmusician) {
  console.log(this.firstName, this.age, hobby, favmusician)
}

const user1 = {
  firstName: "sushovan",
  age: 23,

}

const user2 = {
  firstName: "mukesh",
  age: 22,
}

//about.apply(user2, ["guitar", "john lehnon"]);

//apply use gardakheri chai array vitra item halnu parxa like line 78 ma jasto


// bind

const func = about.bind(user2, "guitar", "john lehnon");
func();

//bind function return garxa
