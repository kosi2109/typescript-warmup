//string
let myName : string = "Si Thu Htet";

//number 
let myAge : number = 23;

//boolean
let isSingle : boolean = false;

//any
//using any in ts is none sense
let isAny : any;

isAny = 1;
isAny = null;
isAny = "Name";
isAny = false;

//union type
let num : number | string = 1;
num = 'one';

//regex type
let reg : RegExp = /\w+/g;