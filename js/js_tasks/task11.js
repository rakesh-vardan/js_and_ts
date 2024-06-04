/*
## Task 11: Working with JSON (Hard)
Create a TypeScript file and do the following:

1. Declare a JavaScript object with properties `name`, `age`, and `job` with appropriate types.
2. Convert the object to a JSON string using `JSON.stringify()` and log it to the console.
3. Convert the JSON string back to a JavaScript object using `JSON.parse()` and log it to the console.
*/




const person = {

    name:"Rimo",
    age: 33,
    job: 'QA'

}

const jsonString = JSON.stringify(person);
console.log("JSon string",jsonString)

const parsedObject = JSON.parse(jsonString);
console.log("Parsed object ",parsedObject)