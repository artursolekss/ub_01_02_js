class Customer {
    constructor(id, firstname, lastname, email, phone) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }
    getFullname() {
        return this.firstname + " " + this.lastname;
    }
}

module.exports = Customer;