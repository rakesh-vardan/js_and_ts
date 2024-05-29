/*
## Task 3: Control Structures (Medium)
Create a TypeScript file and do the following:

1. Write a for loop that logs numbers from 1 to 10 to the console.
2. Write a while loop that logs numbers from 10 to 1 to the console.
3. Write an if-else statement that logs 'even' if a number is even and 'odd' if a number is odd.
*/


function forAndWhileLoop(num1:number,num2:number){

for (let i:number =num1; i<=num2; i++){
    if(i%2===0){
        console.log('The number '+i+ ' is an even no')
    }
    else{
        console.log('The number '+i+ ' is an odd no')  
    }
}

console.log('****************************************************************')  

while (num2>=num1){
    console.log(num2)
    num2--
}

}

forAndWhileLoop(1,10);