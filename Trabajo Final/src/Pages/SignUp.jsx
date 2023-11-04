import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"




function SignUp() {
  const [username,setName] = useState ()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate();

 const handleChangeUsername = (event)=>  {
    setName(event.target.value);
  };
  const handleChangePassword = (event)=>  {
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event)=>  {
    setEmail(event.target.value);
  };
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    const user = {
      username: username,
      email: email,
      password: password,
      }
      console.log("usuario",user)
    axios.post('http://127.0.0.1:8000/register',user)
    .then(result => {console.log(result)
      console.log(user);
      navigate("/SignInPage")
    })
    .catch(err => console.log(err))
  }
 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicUsername">
  <Form.Label >Username</Form.Label>
  <Form.Control onChange={handleChangeUsername}type="text" placeholder="Enter Username" />
  <Form.Text className="text-muted">
  This name is what all other users will see you with
  </Form.Text>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label >Email</Form.Label>
  <Form.Control onChange={handleChangeEmail} type="email" placeholder="Enter Email" />
  <Form.Text className="text-muted">
  This name is what all other users will see you with
  </Form.Text>

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label >Password</Form.Label>
  <Form.Control  onChange={handleChangePassword}type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
<p >
Already Have an Account? <Link to="/SignInPage" >Sign In</Link>
  </p>
</Form>
</div>
);
}
   

export default SignUp;

