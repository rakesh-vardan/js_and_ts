/*
## Task 11: Working with JSON (Hard)
Create a TypeScript file and do the following:

1. Declare a JavaScript object with properties `name`, `age`, and `job` with appropriate types.
2. Convert the object to a JSON string using `JSON.stringify()` and log it to the console.
3. Convert the JSON string back to a JavaScript object using `JSON.parse()` and log it to the console.
*/


interface Person{

    name: string;
    age: number;
    job:string

}

const person: Person= {

    name:"Rimo",
    age: 33,
    job: 'QA'

}

const jsonString: string = JSON.stringify(person);
console.log("JSon string",jsonString)

const parsedObject:Person = JSON.parse(jsonString);
console.log("Parsed object ",parsedObject)