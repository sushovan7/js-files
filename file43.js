// function inside function 

const app = ( ) => {
  const myFunction = () => {
    console.log("this is my function")
  }

  const addTwoNumbers = (num1 , num2)=>{
    return num1 + num2;
  }
  const mul = (num1 , num2)=>
   num1 * num2;
  
  console.log("inside app");
  console.log(mul(2,4));
  myFunction();
}

app();