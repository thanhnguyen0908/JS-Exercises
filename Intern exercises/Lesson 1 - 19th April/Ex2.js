let num = [2,3,5,3,13,11,7];
num.sort(function(a, b){return a-b});
let num1 = num.filter((c,index) => {
  return num.indexOf(c) === index;
});
console.log(num1)
