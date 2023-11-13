//callback function

//  function myFunc(a){
//   console.log(a);
//   //console.log("hello world");
//  }
// //  //myFunc(["abc"]);
// //  //myFunc("sushovan");
// //  myFunc({firstName: "sushovan", gender:"male"});


function myFunc2(name) {
  console.log("inside myfunc2")
  console.log(`my name is ${name}`);
}


function myFunc(callback) {
  console.log("hello there")
  callback("sushovan");
}

myFunc(myFunc2)