{
    const createArray = (param: string) : string[]=>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T) : T[]=>{
        return [param]
    }


    const res1 = createArray('bangladesh')
    const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGenericString = createArrayWithGeneric<string>("rohan")

    type User = {id: number;name: string }
    const resGenericObj = createArrayWithGeneric<User>({id:225 ,name: "bosss"})

// tuple generic function

const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q]=>{
    return [param1, param2]
}

const resT1 = createArrayWithTuple<string, number>('bangladesh',555)


const addCourseToStudent =<T extends {name: string, id: number, email: string}> (student:T)=>{
    const course = 'next level development'

    return {
        ...student,
        course
    }


}
const student1 = addCourseToStudent({id: 222, name:'rohan', email:'rohan@gmail.com', devType:'web' })
const student2 = addCourseToStudent({id:333,
    name:'noman', email:'noman@gmail.com', devType:'nlwd' ,watch: 'apple'})




}