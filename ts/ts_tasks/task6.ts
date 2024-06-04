/*
## Task 6: Objects (Hard)
Create a TypeScript file and do the following:

1. Declare an object named `person` and give it properties `name`, `age`, and `job` with appropriate values and types.
2. Log the person's name and job to the console.
3. Add a property `hobby` to the person object and log the object to the console.
4. Delete the `job` property from the person object and log the object to the console.
*/



interface Profile{

    name: string,
    age: number,
    job: string,
    hobby?: string[],
    email?:string

}



const profile :Profile = {

    name : "Subha",
    age: 32,
    job: "QA"
}

profile.hobby = ['Music','Movies','Travelling','Food']
profile.email = 'mail@mail.com'

console.log("Email is present in the person's data? : " ,"email" in profile)

console.log(profile)

delete profile.email
console.log("Email is present in the person's data? : ","email" in profile)

console.log(profile)