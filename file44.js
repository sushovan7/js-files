//lexical scope

const myVar = "value1";

function myApp() {
  //const myVar = "value1";


  function myfunc() {
    //const myVar = "value69";
    const myFunc2 = () => {
      console.log("hello from myFunc",myVar);
    }
   myFunc2();
  }


  //const myFunc2 = function () { }
  //const myfunc3 = () => { }
  console.log(myVar);
  myfunc();
}
myApp();