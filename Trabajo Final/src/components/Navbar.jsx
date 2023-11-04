import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Images/De-Pelicula-Plus-Logo.png"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import Cookies from 'js-cookie';
import "../modules/Login.css"


const Logotipo = Logo;
function NavScroll() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const navigate = useNavigate();
  
 
  const handleLogOut = (e)=>{
    e.preventDefault()
   const user ={username: "",
    password: ""}
    Cookies.set('user',JSON.stringify(user));
    navigate("/SignInPage")
    
  }
  
    
 
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="navbar-expand-sm"  >
      <Container fluid>
        <Navbar.Brand ><img src={Logotipo} alt="Logo" width={'60px'}  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link className="nav-link" to={"/"} >Inicio</Link>
            <Link className="nav-link" to={"/movie"}>Peliculas</Link>
            
            <Form className="d-flex"  > 
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-3"
              aria-label="Search"
              onChange={(e) => {
                const value = e.target.value;
    
                setQuery({ search: value });
                
              }}
             
            />
            
            <Button className='sm' variant="outline-danger" >Search</Button>
          </Form>
            
          </Nav>
          
          
          
            <Button onClick={handleLogOut} variant="outline-danger" className='sm' >LogOut</Button>
          
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;