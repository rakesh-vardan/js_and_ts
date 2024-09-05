let fruits = ["Apple", "Orange", "Plum","Mango","Banana"];

// same as fruits[fruits.length-1]
console.log( fruits.at(-1) ); // Plum
console.log(fruits.at(-2));
console.log(fruits.at(0));

const colours = ["orange","sky","red","blue","green"]
colours[8]= 'Black'

colours.forEach((item,index) => {
    console.log(`${index}:${item}`)
    
});

console.log(colours.reverse())

colours.reverse()
const iterator = colours.keys();
for (const key of iterator) {
    console.log(`${key}: ${colours[key]}`);
  }

  console.log(colours.reverse())
