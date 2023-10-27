import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
export function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRep, setPasswordRep] = useState("");

    const onUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onPasswordRepChange = (event) => {
        setPasswordRep(event.target.value);
    }

    const onSubmit = () => {
        if (password !== passwordRep) {
            window.alert("Passwords do not match");
            return;
        }

        if (password === "") {
            window.alert("Password can't be empty");
            return;
        }
        
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://127.0.0.1:3800/create-user", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ uname: username, pass: password })

        }).then((response) => {
            response.json().then((body) => {
                if (body.error === null) {
                    alert("User created");
                    sessionStorage.setItem("user", username);
                    window.location.reload();
                }
                else {
                    alert(body.error);
                }
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
                <Form.Group className="mb-3" controlId="passwordRep">
                    <Form.Label>Passowrd Repeat</Form.Label>
                    <Form.Control
                        value={passwordRep}
                        onChange={onPasswordRepChange}
                        type="password" />
                </Form.Group>
                <button className="btn btn-primary"
                    type="button" onClick={onSubmit}>
                    Register
                </button>
            </Form>
        </Container>
    )
}