/*
An array can store elements of any type.
*/

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

/*
An array, just like an object, may end with a comma:
*/

let fruits = [
    "Apple",
    "Orange",
    "Plum",
  ];

  console.log(fruits)