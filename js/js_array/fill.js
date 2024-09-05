/*
Syntax:
fill(value)
fill(value, start)
fill(value, start, end)
*/

let array1 = [1, 2, 3, 4, 5];

array1.fill(0);

console.log(array1); // Output: [0, 0, 0, 0, 0]


let array2 = [1, 2, 3, 4, 5];

array2.fill(7, 2);

console.log(array2); // Output: [1, 2, 7, 7, 7]


let array3 = [1, 2, 3, 4, 5];

array3.fill(9, 1, 3);

console.log(array3); // Output: [1, 9, 9, 4, 5]


let array4 = [1, 2, 3, 4, 5, 6];

array4.fill(5, -4, -1);

console.log(array4); // Output: [1, 2, 5, 5, 5, 6]


let emptyArray = new Array(5);

emptyArray.fill(1);

console.log(emptyArray); // Output: [1, 1, 1, 1, 1]


let array5 = new Array(3);

array5.fill({name: "John"});

console.log(array5); // Output: [{name: "John"}, {name: "John"}, {name: "John"}]

// Modifying one element will affect all, as they reference the same object
array5[0].name = "Jane";

console.log(array5); // Output: [{name: "Jane"}, {name: "Jane"}, {name: "Jane"}]



console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]