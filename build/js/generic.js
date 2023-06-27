"use strict";
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => typeof arg === "object" && !Array.isArray(arg) && arg !== null;
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
processUser({ id: 1, name: "Si" });
// processUser({name : 'Si'});
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('Jhon');
console.log(store.state);
store.state = 'Hello';
// store.state = 2;
const myState = new StateObject([1]);
