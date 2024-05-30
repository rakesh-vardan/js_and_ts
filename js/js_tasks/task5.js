/*
## Task 5: Arrays (Hard)
Create a JavaScript file and do the following:

1. Declare an array named `fruits` of type `string[]` and assign it some array of fruit names.
2. Log the first and last fruit in the array to the console.
3. Add a fruit to the beginning and end of the array and log the array to the console.
4. Remove a fruit from the beginning and end of the array and log the array to the console.
*/




function printEachElement(array){

    let result = array.join(', ')
    console.log(result)

    console.log('**********************************')
}



function playWithArray(fruits){

    console.log(fruits)

    console.log("The 1st and last elements are: "+fruits[0]+" and "+fruits[fruits.length-1])
    console.log('**********************************')

    console.log('Adding 1 element at the last')
    fruits.push('Water Melon')
    printEachElement(fruits);

    console.log('Adding 1 element at the begining')
    fruits.unshift('Orange')
    printEachElement(fruits);

    console.log('Removing 1 element from the last')
    fruits.pop()
    printEachElement(fruits);

    console.log('Removing 1 element from the begining')
    fruits.shift()

    printEachElement(fruits);

}

let fruits = ['Mango','Litchi','Apple','Banana','Grapes']

playWithArray(fruits)