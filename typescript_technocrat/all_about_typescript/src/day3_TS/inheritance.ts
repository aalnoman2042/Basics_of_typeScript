{
    // 
    class parent {
        name:string ;
         age: number;
         address: string;


         constructor (name: string, age: number, address: string){
            this.name= name;
            this.age= age;
            this.address =address;
         }
         getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
            
         }
    }

     class student extends parent{
        


         constructor (name: string, age: number, address: string){
            super(name, age, address)
         }
       
     }

     class Teacher extends parent{
       
        designation: string

        constructor (name: string, age: number, address: string, designation: string){
           super(name, age, address)
           this.designation = designation
        }
        takeClass(numberOfClass: number){
            console.log(`${this.name} will sleep for ${numberOfClass}`)
        }
    }



     const student1 = new student('rohan', 23, 'uganda')

     const teacher = new Teacher('teacher', 40, 'uganda', 'professor')


    // 
}