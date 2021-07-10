// CLASS

export class Employee {
    public name: string
    private age: number
    readonly male: boolean

    constructor(n:string, a:number, m:boolean){
        this.name = n
        this.age = a
        this.male = m
    }

    print() {
        return `name: ${this.name}` 
    }
}

const duy = new Employee('duy', 22, true)
console.log(duy.name)
console.log(duy.male)

duy.name = 'Duy'
