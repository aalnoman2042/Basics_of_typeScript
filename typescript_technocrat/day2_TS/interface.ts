{
    type User = {
        name: string;
        age: number;
    } 

    interface IUser {
        name: string;
        age: number
    }


    const user1 : User ={
        name: "rohan",
        age: 20
    }

    // js --> object , array --> object, funtion --> object

    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number
    }

   
    const rollNumber1: Roll1 = [1,2,3]

    type Add1 = (num1 : number, num2: number)=> number
     interface Add2 {
        (num1: number, num2: number): number
     }
    const add : Add2 = (num1 , num2)=> num1+ num2



}