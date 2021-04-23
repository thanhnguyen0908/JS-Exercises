let array = [2,3,5,3,13,11,7];

function countDuplicates(obj, num){
  obj[num] = (++obj[num] || 1);
  return obj;
}
var answer = array.reduce(countDuplicates, {});

var uniqueNums = Object.keys(answer).map(key => +key);
console.log(uniqueNums)