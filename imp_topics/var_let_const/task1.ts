
/*

var: Function Scoped
let & const: Block scoped

*/

const func = ():void=>{

    //let userName:string = 'Rimo'
   // const userName:string = 'Rimo'
    if (true){
       // let userName:string = 'Rimo'
      // const userName:string = 'Rimo'
       var userName:string = 'Rimo'
    }
    userName = "Bumba"
    console.log(userName)

}

func()
