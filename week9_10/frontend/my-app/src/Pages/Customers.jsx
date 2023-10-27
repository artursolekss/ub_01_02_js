import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Customers() {

    const [customers, setCustomers] = useState([]);
    const [customerLoaded, setCustomersLoaded] = useState(false);

    useEffect(() => {
        if (!customerLoaded) {
            loadCustomers();
        }
    })

    const columns_list = ["ID", "First Name", "Last Name", "E-Mail", "Phone"];

    const loadCustomers = () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://127.0.0.1:3800/all-customers", {
            method: "GET",
            headers: headers,

        }).then((response) => {
            response.json().then((body) => {
                if (body.error === null) {
                    setCustomers(body.response);
                }
                else {
                    alert(body.error);
                }
            });
        })
        setCustomersLoaded(true);
    }

    return (
        <Container>
            <Row>
                {columns_list.map((column) => {
                    return (
                        <Col key={column.replace(" ", "")}>
                            {column}
                        </Col>)
                })}
            </Row>
            {customers.map((customer) => {
                return (
                    <Row>
                        <Col>
                            {customer.id}
                        </Col>
                        <Col>
                            {customer.firstname}
                        </Col>
                        <Col>
                            {customer.lastname}
                        </Col>
                        <Col>
                            {customer.email}
                        </Col>
                        <Col>
                            {customer.phone}
                        </Col>
                    </Row>)
            })}
        </Container>
    )
}