import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';
import "../modules/Login.css"




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
  <main className="main">
  <div>
  <div className="back">
      <form action="#" onSubmit={handleSubmit}>
          <h1>Iniciar Sesion</h1>
          <div className="contenedor">
              <input  onChange={handleChangeUsername}  type="text" placeholder="Usuario" required/>
          </div>
          <div className="contenedor">
              <input onChange={handleChangePassword} type="password" placeholder="Contraseña" required/>
          </div>
        <Link to={"/SignUp"}> ¿No tienes una cuenta? </Link>
          <button type="submit" className="button">Ingresar</button>
      </form>
      
   </div>
  </div>
</main>
);
}

export default SignInPage;
