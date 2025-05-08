{
    // oop -class

    class Animal {
 

        constructor(public name: string,public species: string,public sound: string){
        }

        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`);
            
        }
    }


     const dog = new Animal('german shepard vai',"dog", "ghew ghew")
     const cat = new Animal('persian vai',"cat", "meaw meaw")

   cat.makeSound()
}