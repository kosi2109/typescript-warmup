"use strict";
// Index Signature
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const key in transactions) {
        total += transactions[key];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const key in monthlyIncome) {
    console.log(monthlyIncome[key]);
}
