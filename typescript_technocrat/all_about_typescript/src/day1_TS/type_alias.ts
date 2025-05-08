{
    type Student ={
        name: string,
        address: string,
        contactNo?: string,
        gender: string,
        age: number
    }


    const student1 : Student ={
        name: "rohan",
        age:22,
        gender: 'male',
        address: 'ctg'
    }

    type Add = (num1: number , num2: number) => number;

    const add: Add = (num1 , num2) => num1 + num2

} 