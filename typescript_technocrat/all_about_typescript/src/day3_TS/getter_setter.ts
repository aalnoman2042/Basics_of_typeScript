{

    // getter and setter
    class bankAccount{
      readonly id:number;
      public name: string;
      protected balance: number

       constructor (id: number, name: string, balance: number){
           this.name = name,
           this.id=id,
           this.balance = balance
       }
        // addDeposit(ammount: number){
        //    this.balance = this.balance + ammount
        // }
 set Deposit(amount : number){
    this.balance = this.balance + amount
 }
        // getBalance(){
        //    return this.balance
        // }
        
 get  Balance()  {
            return this.balance
        }
        
    }

    class StudentAccount extends bankAccount{
       test(){
         
       }
    }

    const goribManusherAccount = new bankAccount(11,  "gorib manuhs", 30)

    // goribManusherAccount.addDeposit(20)
    // const myBalance = goribManusherAccount.getBalance()
    goribManusherAccount.Deposit = 50
    const myBalance = goribManusherAccount.Balance
    console.log(myBalance);
    



   //  
}