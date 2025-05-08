{
    const arrOfNumbers: number [] = [1,4,5]

    const arrOfString : string[] = arrOfNumbers.map(number =>number.toString())


    console.log(arrOfString);


    type AreaNumber = {
        height: Number,
        width: Number
    }
    
    type height = AreaNumber["height"] //look up type


    type AreaString<T> ={
        [key in keyof T]: T[key]
    }

    const area1 : AreaString<{height:string, width: Number}>={
        height: '100',
        width: 50
    }

}