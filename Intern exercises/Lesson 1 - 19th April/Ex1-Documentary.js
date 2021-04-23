let n = [2,3,5,3,13,11,7];
a = 3;
let counts = {};

function getAllIndexes(arr, val) {
  let indexes = [], i;
  for(i = 0; i < arr.length; i++)
    if (arr[i] === val)
    indexes.push(i);
    return indexes;
  
}
for (let i = 0; i < n.length; i++) {
  let num = n[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var indexes = getAllIndexes(n, a);
console.log("Number of occurrence: ", counts[a])
console.log("Index of occurence: ", indexes)
