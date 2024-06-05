/*
Create a TypeScript file and do the following:

1. Write a function that takes two numbers as parameters and returns the larger number.
2. Write a function that takes an array of numbers as a parameter and returns the largest number in the array.
3. Write a function that takes a number as a parameter and checks if the number is within a certain range (for example, between 10 and 20).
*/

function returnLargerNo(num1:number,num2:number){


    if (num1>num2){
        return num1
    }

    else{
        return num2
    }

}


function largestNo(arr:number[]){

    let largestNo:number = arr[0]
    for(let i:number = 0; i<arr.length; i++){
        if (arr[i]>largestNo){
            largestNo = arr[i]
        }

    }

    return largestNo;

}


function existsInRange(num:number, startNo:number, endNo:number){

    if (num>= startNo && num<=endNo){
        return true
    }
    else{
        return false
    }
}

console.log(returnLargerNo(6,9))
console.log(largestNo([2,5,9,7,23,8,6]))
console.log(existsInRange(7,7,10))