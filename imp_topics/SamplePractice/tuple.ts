

let profile2:{

    name:string,
    age:number,
    hobby: string[],
    gender: string,
    role:[number,string]


} = {

    name: 'Rimo',
    age: 33,
    hobby: ['Music','Films', 'Football'],
    gender: 'Male',
    role:[2,'author']

};

profile2.role.push('admin')
profile2.role[1]= 'Rimo'
profile2.role[0]= 5

console.log(profile2.role)