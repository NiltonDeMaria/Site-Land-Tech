import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import ImgLogo from "./img/logo.png";

function Menu() {
  return (
    <>
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-navbar"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={ImgLogo}
            width="30"
            height="30"
            alt="Logo da Land Tech"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-flex">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aplicativo">
              <Nav.Link>Aplicativo</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/funcionalidades">
              <Nav.Link>Cursos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
            

          </Nav>
        </Navbar.Collapse>
        </Container>
        <LinkContainer to="/login">
        <div className="bg-button-sistema">
              <input type={"button"} value={"ADMIN"} />
          </div>
          </LinkContainer>
        

    </Navbar>
   
      </>
  );
}

export default Menu;
