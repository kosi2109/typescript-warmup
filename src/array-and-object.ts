// array

let stringArray: string[] = ["one", "two", "three"];
let numArray: number[] = [1, 2, 3];
let mixArray: any[] = ["Test", 123, true];
let unionArray: (string | number)[] = ["one", 2];

// _____ Tuple _____

let myTule: [number, string, boolean] = [12, "test", false];

// ____ Object _____

let myObj: object;
// Note : everythin in JS is object so we can asign any type to object variable
myObj = [];
myObj = {};
myObj = myTule;

const exmpObj = {
  prop1: "Si",
  prop2: true,
};

exmpObj.prop1 = "Jone";

type Programmers = {
  name: string;
  age: number;
  married: boolean | string;
};

let securelinkPro: Programmers = {
  name: "Si Thu Htet",
  age: 23,
  married: false,
};

let securelinkPro2: Programmers = {
  name: "Hero",
  age: 24,
  married: true,
};

securelinkPro = securelinkPro2;

type optionalType = {
  name: string;
  salary?: number; //opional property
};

interface InterFaceType {
  name: string;
  age: number;
  married: boolean | string;
}

// ___ Difference Between Type and Interface ___
// 1 . Decleration Merging
// When two interfaces with the same name are declared, it can merge these two interfaces.
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const john: Person = {
  name: "John",
  age: 26,
};

type PersonType = {
  name: string;
};

// This gives Duplicate identifier 'Person' error
type PersonType = {
  age: number;
};

// 2.Extends and Intersection
// The interfaces can be extended with type or by type alias.

interface PersonNameInterface {
  name: string;
}
interface Person1 extends PersonNameInterface {
  age: number;
}

type PersonNameType = { name: string };
interface Person2 extends PersonNameType {
  age: number;
}

class PersonClass {
  name = "Jhon";
}
interface Person3 extends PersonClass {
  age: number;
}

// 3.Implements and Union
interface PersonInterface {
  name: string;
  age: number;
}

class John implements PersonInterface {
  name = "John";
  age = 26;
}

type PersonType2 = {
  name: string;
  age: number;
};

class Ann implements PersonType2 {
  name = "Ann";
  age = 26;
}

type UnionType = { name: string } | { age: number };

// Gives an error
class Joel implements UnionType {
  name = "Joel";
  age = 2;
}

// 4.Other Types
// The type alias can be used for additional types like primitives, unions, and tuples, unlike an interface.
// primitive
type Name = string;

// object
type PersonName = { name: string; };
type PersonAge = { y: number; };

// union
type PartialPoint = PersonName | PersonAge;

// tuple
type Data = [number, string];

interface Person3 {
    name: string
    obj: {}
    union: string | number
    tuple: [string, number]
}