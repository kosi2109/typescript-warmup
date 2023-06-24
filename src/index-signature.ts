// Index Signature

// interface TransactionObj {
//     [index : string] : number
// }

interface TransactionObj {
    [index : string] : number,
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza';

console.log(todaysTransactions[prop]);

const todaysNet = (transactions : TransactionObj) : number => {
    let total = 0;
    for (const key in transactions) {
        total += transactions[key]
    }

    return total;
}

console.log(todaysNet(todaysTransactions));

////////////////////////////////////
// keyof assertions

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key as keyof Student];
        console.log(element); 
    }
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
    
})


const logStudentKey = (student: Student, key : keyof Student): void => {
    console.log(`Student ${key} : ${student[key]}`);
}

logStudentKey(student, 'name');

///////////////////////////////

// interface Incomes {
//     [key : string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const monthlyIncome: Incomes = {
    salary : 500,
    bonus : 100,
    sidehustle : 250
}

for (const key in monthlyIncome) {
    console.log(monthlyIncome[key as keyof Incomes]);
    
}