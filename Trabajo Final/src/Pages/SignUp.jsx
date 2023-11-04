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
    
<main className="main">
  <div>
  <div className="back">
      <form action="#" onSubmit={handleSubmit}>
          <h1>Registrate</h1>
          <div className="contenedor">
              <input  onChange={handleChangeUsername}  type="text" placeholder="Usuario" required/>
          </div>
          <div className="contenedor">
              <input  onChange={handleChangeEmail} type="emaiñ" placeholder="Email" required/>
          </div>
          <div className="contenedor">
              <input onChange={handleChangePassword} type="password" placeholder="Contraseña" required/>
          </div>
        <Link to={"/SignInPage"}> ¿No tienes una cuenta? </Link>
          <button type="submit" className="button">Ingresar</button>
      </form>
      
   </div>
  </div>
</main>
);
}
   

export default SignUp;

