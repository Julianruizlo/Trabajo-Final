import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const { body, validationResult } = require('express-validator');
import { loginSchema } from "../schemas/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: validationResult(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/movie");
    }
  }, [isAuthenticated]);
  
  {loginErrors.map((error, i) => (
    <Message message={error} key={i} />
    ))}

      

function BasicExample() {
  return (
   
    <Form  onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control {...register("password", { required: true })}type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p >
          Don't have an account? <Link to="/register" >Sign up</Link>
        </p>
    </Form>
  );
}
}
export default BasicExample;