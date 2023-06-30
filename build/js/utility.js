"use strict";
// Utilit Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const std1 = {
    studentId: "aa111",
    title: 'SI THu Htet',
    grade: 10
};
// updateAssignment(std1, {asd : true})
// Require and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, std1), { verified: true });
// assignVerified.verified = false;
// recordAssignment(std1);
// Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
