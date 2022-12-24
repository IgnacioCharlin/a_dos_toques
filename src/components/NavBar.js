import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import logo from './assert/aDosToques.png';
import premier from './assert/premier.png';
import laLiga from './assert/laliga.jpg';
import futbolArgentino from './assert/ligaArgentina.png';
import seriaA from './assert/Serie A Tim.png';
import './css/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>

      <Navbar className='navbar'>

        <Navbar.Brand href="#home" className='logo'>
          <img
            src={logo}
            className='logo'
            alt="a dos toques"
          />
        </Navbar.Brand>
        <Container>
        <Nav>
          <NavDropdown title="Categorias" className='categorias'>
            <NavDropdown.Item href="#" className='item-categoria '>
              <img src={futbolArgentino} alt="logo futbol argentino" className='logo-liga' />
              <p className="font-weight-bold">Futbol Argentino</p>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className='item-categoria'>
              <img src={premier} alt="logo premier" className='logo-liga' />
              <p className="font-weight-bold">Premier League</p>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className='item-categoria'>
              <img src={laLiga} alt="logo la liga" className='logo-liga' />
              <p>La Liga</p>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className='item-categoria'>
              <img src={seriaA} alt="logo serie a" className='logo-liga' />
              <p>Serie A</p>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="carrito">
          <CartWidget />
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar