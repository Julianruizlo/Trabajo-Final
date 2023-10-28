import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"



function SignUp() {
  const [name,setName] = useState ()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const handleSubmit = (e)=> {
    e.preventDefauelt()
    axios.post('http://127.0.0.1:8000/users',{username,email,password})
    .then(result => consolge.log(result))
    .catch(err => console.log(err))
  }
 
  return (
    <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Username</Form.Label>
  <Form.Control onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter Username" />
  <Form.Text className="text-muted">
  This name is what all other users will see you with
  </Form.Text>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control onChange={(e) => { setEmail(e.target.value) }}  type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
<p >
Already Have an Account? <Link to="/SignInPage" >Sign up</Link>
  </p>
</Form>
);
}
   

export default SignUp;

