{
//  spread operator

const bros1 : string[] = ["ahad","tamjid", "faruk"]
const bros2 : string[] = ["fahad","mehrab", "mahin"]

bros1.push(...bros2)

// rest operator
 const greetFriends = (...friends: string[]) =>{
     friends.forEach((friend: String)=>  console.log(`HI ${friend}`));
     
 }

 greetFriends("abul", "babul")

}