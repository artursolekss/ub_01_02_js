const Customer = require('../Model/Customer');

function getCustomers(db_manage, callback) {
    db_manage.getTableValues("customer", (err, results) => {
        if (err) {
            callback(err);
        }
        else {
            const customers_list = [];
            for (let i = 0; i < results.length; i++) {
                let customer = new Customer(
                    results[i].id,
                    results[i].firstname,
                    results[i].lastname,
                    results[i].email,
                    results[i].phone
                );
                customers_list.push(customer);
            }

            callback(null, customers_list);
        }
    })
}

module.exports = { getCustomers };