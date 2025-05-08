{// object destructuring

const mySelf = {
    id: 324,
    name:{
        firstName: "abdullah",
        middleName: "al",
        lastName: "noman"
    },
    address: "uganda",
    contactNo: "0170000000"
}

const {contactNo:no}  = mySelf //destructure adn name alias


// array destructuring 

const friends = ['rohan', 'faruk', 'ahad','tamjid', 'mahin']


const [a, , c, ...rest] = friends




}