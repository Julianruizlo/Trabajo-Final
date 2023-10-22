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
import { useQuery } from "../hooks/useQuery";


const Logotipo = Logo;
function NavScroll() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
    
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
            <Nav.Link to ="#action2">Sobre nosotros</Nav.Link>
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
            <Nav.Link href="#" disabled>
              Planes de pago
          
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}> 
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
             
            />
            
            <Button  variant="outline-danger" >Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;