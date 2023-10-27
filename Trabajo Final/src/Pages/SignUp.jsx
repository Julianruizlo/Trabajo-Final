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
    axios.post('http://127.0.0.1:8000/users',{name,email,password})
    .then(result => consolge.log(result))
    .catch(err => console.log(err))
  }
 
  return (
    <>
    <Form.Floating  className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
      placeholder="UserName"
      onChange={(e) => setName(e.target.value)}
    />
    <label  htmlFor="floatingInputCustom">UserName</label>
    
  </Form.Floating>
  <Form.Floating>
  <Form.Control
  id="floatingInputCustom"
  type="email"
  placeholder="name@example.com"
  onChange={(e) => setEmail(e.target.value)}
/>
<label  htmlFor="floatingInputCustom">Email Adress</label>

</Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
   
  </Form.Floating>
  <p>
      Already Have an Account?
      <Link  to="/SignInPage">
        Login
      </Link>
    </p>
</>
);
}
export default SignUp;
