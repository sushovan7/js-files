// object destructuring

const band = {
  bandName : "led zeppelin",
  famousSong : "stairway to heaven",
  year : 1968,
  anotherFamousSong : "kashmir",
}
//const{bandName, famousSong} = band;
//console.log(bandName));
//console.log(famousSong);
const{bandName:var1, famousSong:var2, ...restProps} = band;
console.log(var1);
console.log(var2);
console.log(restProps);