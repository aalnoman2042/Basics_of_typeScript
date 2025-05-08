// basic data type of ts 

// string 
let firstName: string = 'rohan' 

// number 
let mobile : number = 1829347675


// boolean

let isAdmin : boolean = true 
//   undefrined
 let x : undefined = undefined

//   null 
 let y: null = null

// any
 let d:number;

 d = 123


//   array


let friends: string[] = ['tamjid', 'joy bangla']

let rolls: number[] = [1,2]

//  tuple

let ageNameBehavior :[number, string, boolean] = [50,'rohan', true]

// reference type --> object

const user :{
    position: "developer" //type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
   readonly isMarried: boolean;
}={
    position:"developer",
    firstName: "abdullah",
    middleName : "al",
    lastName: "rohan",
    isMarried: false
}


