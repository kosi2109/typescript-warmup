// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Guiterist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

// litural type
let test: "asd";

let names: "D" | "A" | "Z";

//functions

const add = (a: number, b: number) => {
  return a + b;
};

const logMes = (message: any) => {
  console.log(message);
};

logMes("asd");

let subtract = function (c: number, d: number): number {
  return c + d;
};

type mathFunction = (a : number, b : number) => number;

let multiplyFunc : mathFunction = (c, d) => {
    return c * d;
}

// optional parameter
const addAll = (a : number, b : number, c? : number) => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    
    return a + b
}

const sumAll = (a : number, b : number = 3, c : number = 2) => {
    return a + b + c
}

// rest parameter
const total = function (a : number, ...nums : number[]) : number {
    return a + nums.reduce((pre, current) => pre + current)
}

// never type
const createError = function () : never {
    throw new Error('Error');
}