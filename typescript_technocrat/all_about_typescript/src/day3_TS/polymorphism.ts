{
    class Person {
        getSleep(){
            console.log(`I am sleeping 8 hours per day`);
            
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(`I am sleeping 7 hours per day`);
            
        }
    }

    class developer extends Person{
        getSleep(){
            console.log(`I am sleeping 6 hours per day`);
            
        }
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new developer()


    const getSleepingHours = (param : Person)=>{
        param.getSleep()
    }

    getSleepingHours(person1);
// 

    class Shape {
        getArea(): number {
            return 0
        }
    } 

     class circle extends Shape {
         radius : number;
          constructor (radius: number)
          {
              super()
            this.radius = radius
          }
        getArea(): number {
            return  Math.PI * this.radius * this.radius
        }
     }

     const getShapeArea = (param : Shape) => {
        console.log(param.getArea());
        
     }
      const shape1 = new Shape()
      const shape2 = new circle(20)


      getShapeArea(shape2)

}