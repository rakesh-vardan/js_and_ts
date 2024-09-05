/*
Strings can’t be changed in JavaScript. It is impossible to change a character.

Let’s try it to show that it doesn’t work:
*/

let str = 'Hi';

str[0] = 'h'; // error
console.log( str[0] ); // doesn't work --> It shows H

/*
The usual workaround is to create a whole new string and assign it to str instead of the old one.

*/
let str2 = 'Hi';

str2 = 'h' + str[1]; // replace the string

console.log( str2 ); // hi