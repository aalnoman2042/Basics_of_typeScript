{
    // geneeric type

    type Generic<T> = Array<T>


    // const rollNumber : number[] = [3,6,9]
    const rollNumber : Generic<number> = [3,6,9]

    // const mentor : string[] = ['mr.x','mr.y','mr,z' ]
    const mentor : Generic<string> = ['mr.x','mr.y','mr,z' ]

    const boolArray: Generic<boolean> = [true, false, true]
  
    type User = {
        name: string;
        age: number
    }

    const user :Generic<User > = [
        {name: 'rohan',
        age: 23,},
        {
            name: 'tamjid',
        age: 65
        }

        ];

            // geneeric tuple

           

        type Generictuple<X,y> = [X , y]

         const    manush: Generictuple<string, string> = ['Mr.x', "Mr.Y"]


         const UserWithID :Generictuple<number, {name: string, email: string}>= [1234, {name:'rohan', email: 'a@gmail.com'}]





}