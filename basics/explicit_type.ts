/* EXPLICIT TYPES */

let myName: string = 'duy'
let age: number = 22
let isLecture: boolean

isLecture = true

// arrays
let students: string[] = ['nam', 'hung']

students.push('lan')

// union
let mixed: (string|number|boolean)[]

mixed = ['Duy', 5, false]
mixed.push(19)
mixed.push('Linh')
mixed.push(true)

let id: string|number

id = '123'
id = 123

let hobby: 'book'|'music'

hobby = 'book'

// objects
let person1: object
person1 = {name: 'duy', age: 30}
person1 = []

let student: {
    name: string
    age: number
    isGood: boolean
}

student = {
    name: 'Linh',
    age: 19,
    isGood: true
}

//  ANY TYPE
let age1: any =25
age1 = 'duy'
age1 = {a: 'b'}
age1 = [1, 3]

let mixed1: any[] = []
mixed1.push(5)
mixed1.push(false)

// TYPE ALIAS
type StringOrNumber = string | number
type Student = {name: string; id: StringOrNumber}

const studentDetails = (id: StringOrNumber, studentName: string):void => {
    console.log('Student ${studentName} has is: ${id}')
}
studentDetails('113','Duy')
