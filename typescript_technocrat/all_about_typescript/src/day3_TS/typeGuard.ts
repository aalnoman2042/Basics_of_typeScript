{
    //
    // typeof

    type Alphaneumeric = string  | number

    const add = (param1: string | number , param2: string| number): string | number =>{
        
        if(typeof param1 === 'number' && typeof param2 === 'number')
      {
        return param1+ param2
      }
     
     else{
        return param1.toString() + param2.toString()
     }
    }


    const result=  add("2","3")

    console.log(result);
    // in guard
     type NormalUSer = {
        name: string;

     }
     type AdminUser ={
        name: string,
        role: 'admin'
     }
     const getUser = (user : NormalUSer | AdminUser)=> {
      if('role' in user){
        user.role
        console.log(`my name is ${user.name} and my role is ${user.role}  `);
        
      }
      else {
        console.log(`my name is ${user.name} and my role is user  `);
      }
     }

    const normalUser : NormalUSer = {
        name: "Mr, normal user"
    }

    const adminUser : AdminUser = {
        name: "Mr, normal user",
        role: "admin"
    }

    getUser(normalUser)
    //
}