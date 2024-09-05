
/*
The find() method in JavaScript is used to search for the first element in an array that satisfies a provided testing function.
 If an element is found, it returns the value of that element; otherwise, it returns undefined.
 */
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];
  let desireUser2Name=[]
  const desireUser = users.find((elem)=>elem.name==='Jane')
  
  const desireUser2 = users.find((elem)=>{
    if (elem.name==='Doe'){
        desireUser2Name.push(elem.name)
        return true
    }
  })

  console.log(desireUser)
  console.log(desireUser2Name)


  // Find the 1st even no

  const numbers = [1, 3, 5, 8, 10, 12];

  const firstEvenNo = numbers.find((elem)=>elem%2===0)
  console.log(firstEvenNo)

  //Finding with Index and Array Parameters --> find which 1st no is bigger than 9

  const firstBiggrNo = numbers.find((number, index)=>{
    if (number > 9) {
        console.log(`The index and number are ${index}:${number}`);
        return true; // Return true to indicate that this is the desired element
      }
      return false;
  })

  //console.log(firstBiggrNo)


  // Handling no matches

  const fruits = ['apple', 'banana', 'mango'];

const result = fruits.find(fruit => fruit === 'grape');
console.log(result); // Output: undefined
