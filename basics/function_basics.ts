/* FUCTION */
const square = (side: number) => side * side
console.log(square(3))

let greet: Function
greet = () => console.log('hello')
greet()

const add = (a: number, b: number) => {
    console.log(a+b)
    console.log("first number:",a)
}
add(1,4)
