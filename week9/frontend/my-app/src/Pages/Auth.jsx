import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
export function AuthPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = () => {
        // window.location.reload();
        const headers = new Headers();
        headers.append("Content-type", "application/json")
        fetch("http://127.0.0.1:3800/validate-user", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ user: username, password: password })

        }).then((response) => {
            response.json().then((body) => {
                console.log(body);
            });
        })
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="user">
                    <Form.Label>User</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={onUserNameChange}
                        type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Passowrd</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={onPasswordChange}
                        type="password" />
                </Form.Group>
                <button className="btn btn-primary"
                    type="button" onClick={onSubmit}>
                    Login
                </button>
            </Form>
        </Container>
    )
}