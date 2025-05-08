{
    // nullable types / unknown type
    const searchName = (value: string | null) => {
        if (value){
            console.log("searching");

    
        }
        else{
            console.log("there is nothing to search");
            
        }
    }

    searchName("rohan")

    // never
    const throwError = (msg: string): never=>{
        throw new Error (msg)
    }

    throwError("dilam miara eeror")
}