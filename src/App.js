import './App.css';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  { Members } from './pages/Members.js';


function Entrance(){
  return(
    <>
    <div id='main-background'>
      <div id='logo'></div>
      <Link type='button' id='enter' className='btn btn-dark' to='/home'> Expore </Link>
    </div>
    <img id='img' src={require('./img/main_background.png')} alt='background' />
    </>
  )
}


export function Member(){

  return (
    <>
      <Members />
    </>
  )
}
export function Header(){
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className='shadow'>
        <Container id='main-nav'>
          <Navbar.Brand href='/home'>
          <img id='nav-img' src={require('./img/navlogo.png')} alt='logo' width={60}/>
          </Navbar.Brand>
          <Nav className="ms-3">
            <Nav.Link href="/home" className='me-3'>HOME</Nav.Link>
            <NavDropdown title="PROJECTS" className='me-3'>
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                ALL
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MEMBERS" className='me-3'>
              <NavDropdown.Item href="/members/xinhaoxu">Dr. Xinhao Xu</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hao He</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Jhon Bueno Vesga</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Gayathri Sadanala</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Shangman Li</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Yuanyuan Gu</NavDropdown.Item>
              <NavDropdown.Item href="#action4">ChenYu (Alice) Hung</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Jason Snyder</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lanxin Xue</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              ALL
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SCHOLARLY PRODUCTS" className='me-3'>
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                ALL
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className='me-3'>NEWS</Nav.Link>
            <Nav.Link href="/" className='me-3'>REGISTER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    // <div className='container-fluid m-0 p-0  shadow-lg'>
    //   <nav className="navbar navbar-dark bg-dark" id='main-nav'>
    //     <Link to='/home' id='nav-img'><img src={require('./img/navlogo.png')} alt='logo' width={70} className='ms-4'/>
    //     </Link>
    //     <Link to='/members' className='nav-item m-3'>Members
    //     </Link>
    //   </nav>
    // </div>
  )
}


export function Home(){
  return (
    <>
    <Header />
    <div id='home-header' className='container-fluid shadow p-0'>
      <img className='home-decor' src={require('./img/home_decor.png')} alt='background'/>
    </div>
    </>
  )
}
export function App() {
  return (
    <Entrance />
  );
  }
