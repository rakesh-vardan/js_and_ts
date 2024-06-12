
let profile = {

    name: 'Rimo',
    age: 33,
    hobby: ['Music','Films', 'Football'],
    gender: 'Male'

}

console.log(profile.name)

for (const x of profile.hobby){
    console.log(x.toUpperCase())
}