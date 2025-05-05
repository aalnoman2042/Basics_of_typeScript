{function add (num1 : number , num2: number):number{
    return num1 + num2
}


//  arrow function
 const addArrow = (num1: number , num2:number = 10): number => num1 + num2


//   object --> function --> method

const poorUser ={
    name : "rohan",
    balance: 0,
 addBalance(balance:number): number{
        return this.balance + balance;
    }
}

const arr : number[] = [1,4,7]


const newArr:number[] = arr.map((elem: number): number=> elem*elem)}