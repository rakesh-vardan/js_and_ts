/*
Syntax:
filter(callbackFn)
filter(callbackFn, thisArg)
*/

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const filter = words.filter((word)=>word.length>=6);
console.log(filter)


const numbers = [12, 5, 8, 130, 44]

function desiredRange(arr){

    return result = arr.filter((num)=> num>10 && num<100)
}

const filetred = numbers.filter((number)=>number>40);
console.log(filetred)
console.log(desiredRange(numbers))


// Find prime numbers in an array

function primeNoFunc(num){
    if (num<2){
        return false
    }
    for (i = 2;i<=num/2;i++){ 
       if (num>1 && num%i ===0) {
        return false
      }
    return true
    }

}

const numbers1 = [12, 5, 8, 11, 44]

const primeNos = numbers1.filter(primeNoFunc); 
/*We don't need to manually pass parameters 
to primeNoFunc because filter() automatically passes each element of numbers1 to primeNoFunc as it iterates over the array.*/
console.log("The prime numbers are: "+primeNos)


//console.log(primeNoFunc)

// Search using filter

const products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 400 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Keyboard', price: 100 },
    { id: 6, name: 'Mouse', price: 50 },
  ];

  let expensiveProductNames2 = []
  
  const expensiveProducts = products.filter((elem)=>elem.price>500)
  const expensiveProductNames = expensiveProducts.map((elem)=>elem.name)
  

  console.log(expensiveProductNames)

  const expensiveProducts2 = products.filter((elem)=>{

        if (elem.price > 500){
            expensiveProductNames2.push(elem.name)
            return true
        }

        return false
  })

  console.log(expensiveProductNames2)


  // by name

  const searchKey = 'mo'
  const desiredProductNames = []
  const desiredProducts = products.filter((elem)=>{

    if (elem.name.toLowerCase().includes(searchKey.toLowerCase())){
        desiredProductNames.push(elem.name)
        //return true
    }
    //return false
  })

  console.log(desiredProductNames)