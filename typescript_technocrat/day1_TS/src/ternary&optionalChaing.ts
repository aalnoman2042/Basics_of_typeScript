{

    const age: number =16
    if(age>=18){
        console.log("adult");
        
    }
    else{
        console.log("not adult");
        
    }

    const isAdult = age >= 18 ? "adult": "not adult"
    console.log({isAdult});
    

    // nullish
    // only depends on null & undefined

    const isAuthenticate = null

    const result = isAuthenticate ?? "guest"

    console.log({result});


    //optional chaining
    type User = {
        name: string,
        address:{
            city: string,
            road: string,
            permanentAdress?: string
        }
    }
    
    const user : User = {
        name: 'rohan',
        address:{
            city:'ctg',
            road: 'theng vhanga'
        }
    }
    

    const permanentAdress = user?.address?.permanentAdress ?? "no permanent adress"
    console.log({permanentAdress});
    
}