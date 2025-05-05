{
    // pick utility
     type Person = {
        name: string,
        age: number,
        email?: string,
        contactNo: string

     }
      type NameAge = Pick<Person,'name'| 'age'>

    //  omit utility
    type contactInfo = Omit<Person, 'name'| 'age'>

    // required
    type PersonRequired = Required<Person>
    
    
    //partial
    type PersonPArtial = Partial<Person>

    // read only

     type PersonReadonly = Readonly<Person>


    const person1 : PersonReadonly = {
        name: "Mr.x",
        age: 225,
        contactNo: '016'
    }
    // person1.name ="rohan"

    // record 

    type MyObj = Record<string,string>
    

    const myObj1 : MyObj ={
        a:'aa',

        b:'bb',
        c:'cc'
    }

    const emptyObj : Record<string, unknown> = {}

  

}