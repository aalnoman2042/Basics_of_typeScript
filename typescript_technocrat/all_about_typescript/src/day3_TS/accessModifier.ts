{
     class bankAccount{
       readonly id:number;
       public name: string;
       protected balance: number

        constructor (id: number, name: string, balance: number){
            this.name = name,
            this.id=id,
            this.balance = balance
        }
         addDeposit(ammount: number){
            this.balance = this.balance + ammount
         }

         getBalance(){
            return this.balance
         }
     }

     class StudentAccount extends bankAccount{
        test(){
          
        }
     }

     const goribManusherAccount = new bankAccount(11,  "gorib manuhs", 20)

     goribManusherAccount.addDeposit(20)
     const myBalance = goribManusherAccount.getBalance()
     console.log(myBalance);
     



    //  
}