{
    class Counter {
       static count: number = 0;
        increment(){
             return(Counter.count = Counter.count + 1)
        }
        decrement(){
            return (Counter.count = Counter.count -1)
        }
    }



    const instance1 = new Counter() 
    console.log(instance1.increment()); // different memory

    const instance2 = new Counter
    console.log(instance2.increment()); // different memory 
    
    
}