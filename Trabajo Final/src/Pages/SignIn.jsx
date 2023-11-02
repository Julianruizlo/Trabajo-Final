import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function SignInPage() {
  const [error, setError] = useState("");
   const [count, setCount] = useState(0)
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username: "user1",
        password: "user1"
      }
      const login = await axios.post("http://127.0.0.1:8000/login", user);
      console.log(login);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
   
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control  type="text" placeholder="Enter User" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      <p >
          Don't have an account? <Link to="/SignUp" >Sign up</Link>
        </p>
    </Form>
  );
}

export default SignInPage;
