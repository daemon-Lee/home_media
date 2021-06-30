/* FUCTION */
const square = (side: number) => side * side
console.log(square(3))

let greet: Function
greet = () => console.log('hello')
greet()

const add = (a: number, b: number, c?: number|string) => {
    console.log(a+b)
    console.log("message:",c)
}
add(1,4,"Done!")

const addDefault = (a: number, b: number, c:number|string = 10) => {
    console.log("sum:",a+b)
    console.log("message:",c)
}
addDefault(19,29)

const minus = (a: number, b: number): number => a-b
console.log(minus(29,19))
