/* let str = "công tY yêu qUý CỦA chúng tôi"

console.log(

str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')

) */

function capitalize(words) {
   let w = words.toLowerCase().split(' ');
   for (let i = 0; i < w.length; i++) {
      w[i] = w[i].charAt(0).toUpperCase() + w[i].substring(1);
   }
   return w.join(' ');
}
console.log(capitalize("công tY yêu qUý CỦA chúng tôi"));
