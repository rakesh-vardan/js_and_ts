
let oldArr: number[] = [2,4,6,8]

let newArr = oldArr.map((elem)=>{

    return elem*2
})

let newArr2 = oldArr.map((elem,i)=>{

 console.log('The '+i+' th element is: ',elem*3 )
})

console.log('The old array is ',oldArr);
console.log('The new array is ',newArr)
console.log('The new array is ',newArr2)