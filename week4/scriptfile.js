///#Ternary if-else
// let value1 = prompt("Enter value 1");
// let value2 = prompt("Enter value 2");

// // let result = value1.toLowerCase() ==
// //     value2.toLowerCase() ? "Both inputs are the same" : "Inputs are different";

// let result;

// // if ((value1.toLowerCase() == value2.toLowerCase()) == true)///A == true -->A
// if (value1.toLowerCase() == value2.toLowerCase()) 
// // { --not mandatory to use braces if there one line of code only
//     ///line1
//     ///line2
//     ///line3
//     result = "Both inputs are the same";
// // }
// else {
//     result = "Inputs are different";
// }

// if (value1.toLowerCase() == value2.toLowerCase()) 
// // { --not mandatory to use braces if there one line of code only
//     ///line1
//     ///line2
//     ///line3
//     result = "Both inputs are the same";
// // }
// else {
//     result = "Inputs are different";
// }

// if (value1.toLowerCase() == value2.toLowerCase()) 
// // { --not mandatory to use braces if there one line of code only
//     ///line1
//     ///line2
//     ///line3
//     result = "Both inputs are the same";
// // }
// // else {
// //     result = "Inputs are different";
// // }
// alert(result)

// let result = express ? result_true : result_false ---> let result; if(express) {result = result_true}else{result = result_false}


///###Number comperison####
// let value1 = prompt("Enter number 1");
// alert(typeof (value1)) --- the value will be typed as string
// let value1 = +prompt("Enter number 1");
// if (isNaN(value1)) {
//     alert("The value provided is wrong");
// }
// else {
//     // let value2 = prompt("Enter value 2");
//     let value2 = +prompt("Enter value 2");
//     if (isNaN(value2)) {
//         alert("The value provided is wrong");
//     } else {
//         // let value1_num = Number(value1);
//         // let value2_num = Number(value2);
//         // if (value1_num > value2_num)
//         if (value1 > value2)
//             console.log("Value 1 is greater than Value 2");
//         // else if (value2_num > value1_num)
//         else if (value2 > value1)
//             console.log("Value 2 is greater than Value 1");
//         else
//             console.log("Both values are the same")
//     }
// }

///###Logical combinations when building the branches

///expr1 && expr2 ---> true && true return true, the rest combination return false

// let value1 = Number(prompt("Enter value 1"));
// let value2 = Number(prompt("Enter value 2"));

// if (
//     (!isNaN(value1) && !isNaN(value2))
//     && value1 > value2)
//     console.log("value1 is greater than value2");
// else if (!isNaN(value1) && !isNaN(value2)
//     && value1 < value2)
//     console.log("value2 is greater than value1");
// else if (!isNaN(value1) && !isNaN(value2)
//     && value1 == value2)
//     console.log("value2 is the same as value1");
// // else if (isNaN(value1) && !isNaN(value2))
// //     console.log("Value 1 is not a number")
// // else if (!isNaN(value1) && isNaN(value2))
// //     console.log("Value 2 is not a number")
// // else if (isNaN(value1) && isNaN(value2))
// //     console.log("Both inputs are not a numbers")
// else if (isNaN(value1) || isNaN(value2))
//     console.log("One of the values is not a number");

////###De Morgan's laws
/// expr1 is true/false and expr2 is true/false then

//// !(expr1 || expr2) always results in the same as
///// !expr1 && !expr2

////expr1,2,3,4... are true/false then
//// !(expr1 || expr2 || expr3...||expr_n) same as
///  !expr1 && !expr2 && !expr3.... && !expr_n


////expr1,2,3,4... are true/false then
/// !(expr1 && expr2 && expr3...&& expr_n)
/// !expr1 || !expr2 || !expr3... || !expr_n


///if(something && somenthing_else && something_else2){...}

let age = Number(prompt("Enter the age:"));
let salary = Number(prompt("Enter the salary"));
let debt = Number(prompt("Enter your debt"));

let loan_amount = Number(prompt("Enter the amount of loan you need"));

let max_loan_avail = salary * 20;

// if (!(age > 17 && debt == 0 && loan_amount < max_loan_avail)) {
if (!(age > 17) || !(debt == 0) || !(
    loan_amount < max_loan_avail)) {
    alert("You can't take the loan");
}
else {
    console.log("Loan registered!")
}

///Example

// if (
//     (!isNaN(value1) && !isNaN(value2))
//     && value1 > value2) same would be
// if (
//     (!isNaN(value1) && !isNaN(value2))
//     && !(value1 <= value2)) -->
//     (!(isNaN(value1) || isNaN(value2))
//     || value1 <= value2)) 

