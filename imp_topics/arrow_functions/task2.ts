
let my_func =()=>{
    console.log('My function')
}

my_func()


let my_func2 = (n:number)=>{

    let x = n*n
    return x

}

let y = my_func2(5)
console.log(y)

let my_func3 =(n:number)=>(n*n)
let a = my_func3(4)
console.log(a)

/*
let my_func3 =()=>() ----- the 2nd '()' means return
*/
