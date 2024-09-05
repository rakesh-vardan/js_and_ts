/*
Syntax: 
every(callbackFn)
every(callbackFn, thisArg)

Important Notes
- every() does not mutate the array on which it is called.
- The function callbackFn is called for every element of the array until it finds one where callbackFn returns a falsy value.
  If such an element is found, every() immediately returns false.
- If every() receives an empty array, it returns true by default (since there are no elements to fail the test).
*/

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every((element)=>(element > 0));

console.log(allPositive); // Output: true


const evenNumbers = [2, 4, 6, 8, 10];

const allEven = evenNumbers.every((element) => element % 2 === 0);

console.log(allEven); // Output: true

const numbers2 = [10, 20, 30, 40, 50];
function isBigEnough(element, index, array) {
    return element >= 10;
  }

  console.log(numbers2.every(isBigEnough))

  array1 =  [1, 2, 3, 4, 5];
  array2 =  [1, 2, 3, 4, 5, 6, 7, 8 ,9];

  const isSubset = (arr1, arr2) =>{
    return arr2.every((element)=>arr1.includes(element))
  }

  console.log(isSubset(array2,array1))


  const adultCheckr= (arr)=>{
    return (arr.every((element)=>element>=18))
  }

  arrAge = [18,20,32,44,86]
  console.log(adultCheckr(arrAge))


const ages = [23, 18, 30, 40];

const ageRange = {
  minAge: 18,
  maxAge: 40
};

const allWithinRange = ages.every(function(age) {
  return age >= this.minAge && age <= this.maxAge;
}, ageRange);

console.log(allWithinRange); // Output: true
