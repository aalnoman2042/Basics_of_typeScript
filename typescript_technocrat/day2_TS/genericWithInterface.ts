{
    // generic interface

    interface developer<T,X = null> {
        name: string;
        computer :{
            brand: string
            model: string
            releaseyear: number
        }
        smartWatch : T,
        bike?: X
    }

    const poorDeveloper : developer< {
        brand: string,
        model: string,
        display: string
    }
     > ={
        name: 'rohan',
        computer :{
            brand: 'asus',
            model: 'xyz',
            releaseyear: 2019
        },
        smartWatch:{
            brand: 'emilab',
            model: 'kw66',
            display: 'oled'
        }
    }

    const richDeveloper : developer<
    {
        brand: string,
        model: string,
        heartTrack : boolean,
        sleepTrack: boolean 
    },
    {
        brand: string
        engine : number
    }
    > ={
        name: 'noman',
        computer :{
            brand: 'Hp',
            model: 'xyz',
            releaseyear: 2019
        },
        smartWatch:{
            brand: 'apple',
            model: 'kw66',
            heartTrack: true,
            sleepTrack:true
        },
        bike: {
            brand: 'yamaha',
        engine : 5
        }
    }















}