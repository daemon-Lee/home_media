// OPTIONAL AND NON NULL 

const add2 = (a: number, b?: number) => (b ? a+b:a)

const addNonNull = (a: number, b?: number) => a+b!
