import { Nav, NavDropdown, Navbar, Container, NavLink } from "react-bootstrap";
import logo from "./assert/aDosToques.png";
import premier from "./assert/premier.png";
import laLiga from "./assert/laliga.jpg";
import futbolArgentino from "./assert/ligaArgentina.png";
import seriaA from "./assert/Serie A Tim.png";
import mundo from "./assert/mundo.png";
import "./css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <Navbar className="navbar p-0 m-0">
        <Link to="/">
          <Navbar.Brand className="logo">
            <img src={logo} className="logo" alt="a dos toques" />
          </Navbar.Brand>
        </Link>
        <Container>
          <Nav>
            <NavDropdown title="Categorias" className="categorias">
              <Link
                className="item-categoria dropdown-item"
                role="button"
                to="/category/1"
              >
                <img
                  src={futbolArgentino}
                  alt="logo futbol argentino"
                  className="logo-liga"
                />
                <p className="font-weight-bold">Futbol Argentino</p>
              </Link>
              <Link
                className="item-categoria dropdown-item"
                role="button"
                to="/category/2"
              >
                <img src={premier} alt="logo premier" className="logo-liga" />
                <p className="font-weight-bold">Premier League</p>
              </Link>
              <Link
                className="item-categoria dropdown-item"
                role="button"
                to="/category/3"
              >
                <img src={laLiga} alt="logo la liga" className="logo-liga" />
                <p>La Liga</p>
              </Link>
              <Link
                className="item-categoria dropdown-item"
                role="button"
                to="/category/4"
              >
                <img src={seriaA} alt="logo serie a" className="logo-liga" />
                <p>Serie A</p>
              </Link>
              <Link
                className="item-categoria dropdown-item"
                role="button"
                to="/"
              >
                <img
                  src={mundo}
                  alt="logo futbol argentino"
                  className="logo-liga"
                />
                <p className="font-weight-bold">Todas</p>
              </Link>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="carrito">
            <CartWidget />
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

