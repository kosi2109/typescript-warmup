type One = string;
type Two = string | number;
type Three = 'hello';


//conver to more or less specific
let a : One = 'hello';
let b = a as Two; // less specific type
let c = a as Three //more specific type

let d = <One>'hello';
let e = <string>'lololo';

const addOrConcat = (a : number, b : number, c : 'add' | 'concat') : number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal : string = addOrConcat(2, 2, 'concat') as string;

// IS sees no problem - but return string
let nextVal : number = addOrConcat(2, 2, 'concat') as number;

// The Dom
const img = document.querySelector('img')as HTMLImageElement;
const myImg = document.getElementById('img')! as HTMLImageElement;
// Note : ! is not null assertion 


