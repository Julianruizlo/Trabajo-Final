import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';





export function SignInPage() {
  const [username,setName] = useState ()
 
  const [password,setPassword]=useState()
  const navigate = useNavigate();

 const handleChangeUsername = (event)=>  {
    setName(event.target.value);
  };
  const handleChangePassword = (event)=>  {
    setPassword(event.target.value);
  };

  
  const handleSubmit = (e)=> {
    e.preventDefault()
    const user = {
      username: username,
      password: password,
      }
   console.log("usuarios:",user)
    axios.post('http://127.0.0.1:8000/login',user)
    .then(result => {Cookies.set('user', JSON.stringify(result));
    navigate("/");
      console.log(user);

    })
    .catch(err => console.log(err))
  }
 
  return (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <Form className=""onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={handleChangeUsername} type="text" placeholder="Enter User" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChangePassword}  type="password" placeholder="Password" />
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
    </div>
    
  );
}

export default SignInPage;
