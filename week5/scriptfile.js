// // ////Fizz Buzz
// // let number;
// // do {
// //     number = Number(prompt("Enter TO number"));
// // } while (isNaN(number))

// // for (let i = 1; i <= number; i++) {
// //     // if (i % 3 == 0 && i % 5 == 0)
// //     //     console.log("FizzBuzz");
// //     // else if (i % 3 == 0)
// //     //     console.log("Fizz");
// //     // else if (i % 5 == 0)
// //     //     console.log("Buzz")
// //     // else
// //     //     console.log(i)
// //     if (i % 3 == 0) {
// //         if (i % 5 == 0) {
// //             console.log("FizzBuzz");
// //         }
// //         else {
// //             console.log("Fizz");
// //         }
// //     }
// //     else if (i % 5 == 0) {
// //         console.log("Buzz");
// //     }
// //     else {
// //         console.log(i)
// //     }
// // }

// ///Print all the primes until

// let number;
// do {
//     number = Number(prompt("Enter TO number"));
// } while (isNaN(number))

// ///25 = 5 * 5, 81 = 3 * 3 * 3 * 3
// // for (let i = 2; i < number; i++) {
// //     // for(let j=i-1;j>1;j--){
// //     let prime = true;
// //     for (let j = 2; j <= (i / 2); j++) {
// //         if (i % j == 0) {
// //             prime = false;
// //             break;
// //         }
// //     }
// //     if (prime)
// //         console.log(i);
// // }


// //Functions

// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// // console.log(sum(10, 8))

// // function hello() {
// //     alert("Hello world")
// // }

// // const hello = function () {
// //     alert("Hello world");
// // }

// // const calculate_product = function () {
// //     let prod = 1;
// //     for (let i = 0; i < arguments.length; i++) {
// //         prod *= arguments[i];
// //     }
// //     return prod;
// // }


// ///This will fail
// // const calculate_product = () => {
// //     let prod = 1;
// //     for (let i = 0; i < arguments.length; i++) {
// //         prod *= arguments[i];
// //     }
// //     return prod;
// // }

// // //Lambda function
// // const multiply = (a, b) => {
// //     let prod = a * b;
// //     return prod;
// // }

// // function makeCounter() {
// //     let currentCount = 1; 
// //     return function () {
// //         return currentCount++;
// //     };
// // }
// // // creating a new counter
// // let counter = makeCounter();
// // alert( counter() ); // 1
// // alert( counter() ); // 2
// // alert( counter() ); // 3
// // // another independent counter
// // let counter2 = makeCounter();
// // alert(counter2()); // 1


// //For the lambda functions, the counter works the same way
// const makeCounter = () => {
//     let currentCount = 1;
//     return function () {
//         return currentCount++;
//     };
// }
// // creating a new counter
// let counter = makeCounter();
// alert(counter()); // 1
// alert(counter()); // 2
// alert(counter()); // 3
// // another independent counter
// let counter2 = makeCounter();
// alert(counter2()); // 1


// const arr1 = [1, 2, 3, 4];
// const arr3 = [8, 0, 0, 0];
// const arr2 = [4, 5, 6, 7];

// const cons_arr = [arr2, arr1, arr3]

// function compare_num_arr(a1, a2) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < a1.length; i++)
//         sum1 += a1[i];
//     for (let i = 0; i < a2.length; i++)
//         sum2 += a2[i];

//     return sum1 < sum2;
// }

// const compare_result = compare_num_arr([19,32,10],arr2);

// const sorted_array = cons_arr.sort(compare_num_arr);

///[e1,e2,e3,..,en]

//[1,2,3,4,19,-1,-6]

// [1,2,43,54] compare to [5,7,2,10]. To be able to compare, I need to have the function defined
/// which has the logic to compare these two element


// function change(a){
//     a = 10
//     console.log(a);
// }

// let variable = 100;

// change(variable);//I pass the value stored under the variable - it is called Pass by value


// alert(variable);

// function largerst_element(arr1, isSmaller) {
//     if (arr1.length == 0)
//         return;//use return command to go out of the function

//     let largest = arr1[0];
//     for (let i = 1; i < arr1.length; i++) {
//         if (isSmaller(largest, arr1[i]))
//             largest = arr1[i]
//     }
//     return largest;
// }


///Tested for Numerical
// let number_arr1 = [1, 0, -1, -29, 20];

// function smaller_numb_absol(a1, a2) {
//     return Math.abs(a1) < Math.abs(a2)
// }

// alert(largerst_element(number_arr1, smaller_numb_absol))

// let array_of_array = [[10, 19, 17], [10, 17], [7, 4, 0, 10]]

// function smaller_element_arr(arr1, arr2) {
//     let avg1 = 0;
//     let avg2 = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         avg1 += arr1[i];
//     }
//     avg1 /= arr1.length;

//     for (let i = 0; i < arr2.length; i++) {
//         avg2 += arr2[i];
//     }
//     avg2 /= arr2.length;

//     return avg1 < avg2
// }

// alert(largerst_element(array_of_array, smaller_element_arr).join())


//Recursion

// const number_input = +prompt("Enter the number");

// ///n! = n * n-1 * n-2* ... 3 * 2 * 1 = n * (n-1)! = n * (n-1) * (n-2)! = n * (n-1) * ... * 1

// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }

// const factorial_result = factorial(number_input);

// alert("The factorial of " + number_input + " is " + factorial_result);

///Objects

// let person = {
//     name: "Arturs",
//     last_name: "Olekss",
//     getFullName: function () {
//         return this.name + " " + this.last_name;//using keyword this we can access the current object
//         ///from inside
//     }
// }


// function addTimestamp(element) {
//     const date = new Date();
//     element.timestamp = date.getSeconds().toString() + date.getMinutes().toString()
//         + date.getHours().toString();
// }

// const countryUS = {
//     name: "US",
//     full_name: "The United States of America",
//     population: 350000000
// }

// const company = {
//     name: "Apple",
//     year: 1970,
//     country: countryUS
// }

// addTimestamp(company);
// addTimestamp(countryUS);

// const my_person = {};
// my_person.name = "Jack";
// my_person.last_name = "Sparrow";
// my_person.full_name = function () {
//     return this.name + " " + this.last_name;
// }


// function makeCar(make, model, year) {
//     const car = {
//         // make:make,
//         // model:model,
//         // year:year
//         make, model, year
//     }

//     /*
// {
//     make: (make_value),
//     model:(model_value),
//     year: (year_value)
// }
//     */
//     return car;
// }

// //Constructor
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// const make = prompt("Enter car's make:");
// const model = prompt("Enter car's model:");
// const year = +prompt("Enter car's year:")

// // const myCar = makeCar(make, model, year);

// const myCar = new Car(make, model, year);///new keyword call the constructor of the Object

function onDone() {
    const name_element = this.document.getElementById("name");
    const input_value = name_element.value;
    alert("Hello " + input_value);
}


