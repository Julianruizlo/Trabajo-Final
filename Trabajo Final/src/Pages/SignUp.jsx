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
  const navigate = useNavigate();

  const handleSubmit = (e)=> {
    e.preventDefauelt()
    axios.post('http://127.0.0.1:8000/register',{username,email,password})
    .then(result => {console.log(result)
      navigate("/SignInPage")
    })
    .catch(err => console.log(err))
  }
  /*const [count, setCount] = useState(0)


  

  const login = async () => {
    const user = {
      username: "user1",
      password: "user1"
    }
    const login = await axios.post("http://127.0.0.1:8000/login", user)
    console.log(login);
  }*/
  return (
    <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label onSubmit={handleSubmit}>Username</Form.Label>
  <Form.Control type="text" placeholder="Enter Username" />
  <Form.Text className="text-muted">
  This name is what all other users will see you with
  </Form.Text>

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label onSubmit={handleSubmit}>Password</Form.Label>
  <Form.Control  type="password" placeholder="Password" />
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
);
}
   

export default SignUp;

