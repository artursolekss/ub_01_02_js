// //Matrixes

// const dim1 = +prompt("Enter dimesion 1 of the matrix :")
// const dim2 = +prompt("Enter dimesion 2 of the matrix :")

// const matrx1 = []
// for (let i = 0; i < dim1; i++) {
//     let row = []
//     matrx1.push(row);
//     for (let j = 0; j < dim2; j++) {
//         row.push(+prompt("Enter row " + (i + 1) + ", col " + (j + 1) + " of matrix 1"));
//     }
// }

// const matrx2 = []
// for (let i = 0; i < dim1; i++) {
//     let row = [];
//     matrx2.push(row);
//     for (let j = 0; j < dim2; j++) {
//         row.push(+prompt("Enter row " + (i + 1) + ", col " + (j + 1) + " of matrix 2"));
//     }
// }

// // function sumMatrixes(mtrx1, mtrx2){
// //     const result_matr = [];
// //     for(let i=0;)
// // }
// const result_matr = [];

// for (let i = 0; i < dim1; i++) {
//     let row = [];
//     result_matr.push(row);
//     for (let j = 0; j < dim2; j++) {
//         element_sum = matrx1[i][j] + matrx2[i][j];
//         row.push(element_sum);
//     }
// }

// let matrix_string = "";

// for (let i = 0; i < dim1; i++) {
//     for (let j = 0; j < dim2; j++) {
//         if (j != 0) {
//             matrix_string += " ";
//         }
//         matrix_string += matrx1[i][j];
//     }
//     if (i != (dim1 - 1)) {
//         matrix_string += "\n";
//     }
// }
// alert(matrix_string);
// alert("+")
// matrix_string = "";

// for (let i = 0; i < dim1; i++) {
//     for (let j = 0; j < dim2; j++) {
//         if (j != 0) {
//             matrix_string += " ";
//         }
//         matrix_string += matrx2[i][j];
//     }
//     if (i != (dim1 - 1)) {
//         matrix_string += "\n";
//     }
// }
// alert(matrix_string);
// alert("=")
// matrix_string = "";

// for (let i = 0; i < dim1; i++) {
//     for (let j = 0; j < dim2; j++) {
//         if (j != 0) {
//             matrix_string += " ";
//         }
//         matrix_string += result_matr[i][j];
//     }
//     if (i != (dim1 - 1)) {
//         matrix_string += "\n";
//     }
// }
// alert(matrix_string);

///Objects

const bank1 = {
    name: "Latvian bank",
    caountry: "Latvia",
    clients: 100000
}

const bank2 = {
    name: "Lithuanian bank",
    caountry: "Lithuania",
    clients: 120000
}

const person = {
    name: "Arturs",
    last_name: "Olekss",
    date_of_birth: "01.01.1990",
    bank_accounts: [
        {
            bank: bank1,
            balance: 20000
        },
        {
            bank: bank2,
            balance: 23000
        }
    ],
    deposit: function (amount, bank_name) {
        const bank_account = this.bank_accounts.find((bank_account) => {
            return bank_account.bank.name == bank_name;
        })
        if(bank_account != undefined){
            bank_account.balance += amount;
        }
    },
    withdraw: function (amount, bank_name) {
        const bank_account = this.bank_accounts.find((bank_account) => {
            return bank_account.bank.name == bank_name;
        })
        if(bank_account != undefined){
            bank_account.balance -= amount;
        }
    }
}