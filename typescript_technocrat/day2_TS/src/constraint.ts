{

    // generic constraints with keyof operator

    type Vechicle = {
        bike: string,
        car: string,
        ship: string
    }

    type owner = 'bike' | 'car' | "ship" // manually



    type owner2 = keyof Vechicle


    const person1 : owner2 = 'car'


    const user = {
        name: 'rohan',
        age:  23,
        address: 'ctg'
    }

    const car = {
        model: 'RR',
        year: 2019
    }


    const  getPropertyValue=<X , Y extends keyof X>(obj :X, key:Y)=>{
        return obj[key]
    }

     const resilt1 =  getPropertyValue(user, 'name')
}