let a = 10;//Here is the declaration of the variable a
let b = 5;
a = 11;
a = "Text"

const const_var = "HERE IS THE CONSTANT";//here is the comment after the line of code

console.log("Text");
console.log(a);

let variable_empty;///undefined value
console.log("Hello"); console.log("Hello again")


/*
Block
of
comments
*/

// const_var = 19 - not possible

// let variable_test = "Declared with let outside"

// if(true){
//     let variable_test = "Declared with let inside"
//     console.log(variable_test)
// }

// console.log(variable_test)

// var variable_test = "Declared with let outside"

// if(true){
//     var variable_test = "Declared with let inside"//var REDEFINES the variable
//     console.log(variable_test);
// }

// console.log(variable_test)

// let variable_test = "Declared with let outside" - you can't re-declare with let
// let variable_test = "Declared with let inside"

// var variable_test = "Declared with let outside";
// var variable_test = "Declared with let inside";


// console.log(variable_test);

x = 3.14;
let variable = "Variable defined";

{
    // let variable = "Variable defined"
    alert(variable)//variable defined outside of the scope can be used inside the scope
}

// alert(variable) - variabe inside the scope will not be available outside of the scope

let myText = "First line\n\
second"
console.log(myText)

const part1 = "Hello";
const part2 = "world";

console.log(part1 + " " + part2)

console.log(`${part1} ${part2}`)