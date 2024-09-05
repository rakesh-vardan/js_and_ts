
let arr = [
    {
        name:'Bumba',
        id: 2,
        home: 'Keshtopur'
    },

    {   
        name:'Rimo',
        id: 2,
        home: 'Kolkata' 

    },

    {   
        name:'Asish',
        id: 5,
        home: 'Arkaprova' 

    }


]

let arr2 = arr.filter((obj)=>{
    return obj.id == 2
})

console.log(arr2)