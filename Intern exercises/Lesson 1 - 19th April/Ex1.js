const array = [2,3,5,3,13,11,7];

function getNum(n, a) 
{
    let result = [0]
    for (let i = 0; i < n.length; i ++) 
    {
        if (n[i] === a) {
            result[0]++
            result.push(i)
        }
    }
    return result;
}

console.log(getNum(array, 3)); // should alert 2