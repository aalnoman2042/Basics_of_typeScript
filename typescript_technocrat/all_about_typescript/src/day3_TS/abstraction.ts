{
   //abstraction

   interface Vehicle1 {
    // name: string;
    // model: number
    startEngine() : void
    stopEngine(): void
    move(): void
   }

  

   class Car implements Vehicle1 {
    startEngine(): void {
        console.log(`i am starting engine`);
        
    }
    stopEngine(): void {
        console.log('i am stoping engine');
        
    }
    move(): void {
        console.log('i am moving the car');
        
    }
    test(){
        console.log('i am just testing');
        
    }
   }

   const toyotaCar = new Car()
   toyotaCar.startEngine()

//    abstract class

 abstract class car2 {
   abstract startEngine(): void
  abstract  stopEngine(): void 
    abstract move(): void 
    test(){
        console.log('i am just testing');
        
    }
}


 class ToyotaCar extends car2 {
    startEngine(): void{
        console.log('i am starting engine');
        
    }
    stopEngine(): void {
        console.log('i am stoping the carc engine');
        
    }
    move(): void {
        console.log('i am moving the car');
        
    }
 }

//  const hondaCar = new car2()
//  hondaCar.startEngine


}