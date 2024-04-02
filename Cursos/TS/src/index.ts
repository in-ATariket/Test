type Employee = {
    readonly id: number,
    name: string,    
    age: number,
    surname?: string
    retire: (date: Date) => void

}

let employee: Employee = { id: 1 , name: 'John' , age: 30 , retire: (date: Date) => {console.log(date);}};

console.log("ID:\t" + employee.id + "\nNAME:\t" + employee.name + "\nAGE:\t" + employee.age );