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



const Logotipo = Logo;
function NavScroll() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="navbar-expand-sm"  >
      <Container fluid>
        <Navbar.Brand ><img src={Logotipo} alt="Logo" width={'100px'}  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link className="nav-link" to={""} >Inicio</Link>
            <Link className="nav-link" to={"/movie"}>Peliculas</Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item Link to ={"#action3"}>Accion</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Terror
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex"  onSubmit={handleSubmit}> 
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                const value = e.target.value;
    
                setQuery({ search: value });
                
              }}
             
            />
            
            <Button  variant="outline-danger" >Search</Button>
          </Form>
            
          </Nav>
          
          
          <Nav.Link href="/SignInPage" >
            <Button  onClick={Cookies.remove('user')}variant="outline-danger" >LogOut</Button>
          
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;