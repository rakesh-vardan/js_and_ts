
enum Role{
    ADMIN, AUTHOR, READER

};


let profile3 = {

    name: 'Rimo',
    age: 33,
    hobby: ['Music','Films', 'Football'],
    gender: 'Male',
    role: Role.ADMIN

}

console.log(profile3.name)

for (const x of profile.hobby){
    console.log(x.toUpperCase())
}