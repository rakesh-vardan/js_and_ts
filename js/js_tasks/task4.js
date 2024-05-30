/*
## Task 4: Functions (Medium)
Create a JavaScript file and do the following:

1. Write a function named `greet` that takes a name as a parameter of type `string` and logs a greeting message to the console.
2. Write a function named `add` that takes two numbers as parameters of type `number` and returns their sum.
3. Write a function named `isEven` that takes a number as a parameter of type `number` and returns true
 if the number is even and false if the number is odd.
*/


function greet(name){

    console.log('Welcome ',name);
    console.log(`Welcome ${name}!`);
}

function add(no1,no2){
    return no1+no2
}

function isEven(num){

    let flag = false;

    if (num%2===0){
    
     flag=true

    }

    return flag;
}


greet("Rimo");
console.log('2 + 5 = '+add(2, 5));
console.log('Is 4 even ? Ans: '+ isEven(4));
console.log('Is 9 even ? Ans: '+ isEven(9));

