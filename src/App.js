import './App.css';
import { Link } from 'react-router-dom';
import { peopleImg } from './JSON/people.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { projectInfo } from './JSON/projectInfo.js';
import { news } from './JSON/news.js';
import Button from 'react-bootstrap/Button';



function Entrance(){
  return(
    <>
    <div id='main-background'>
      <div id='logo'><h2><img src={require('./img/logo.png')} alt='logo'/>Technology to Enhance Learning Lab</h2></div>
      <Link type='button' id='enter' className='btn btn-dark' to='/home'> Expore </Link>
    </div>
    <img id='img' src={require('./img/main_background.png')} alt='background' />
    </>
  )
}


export function Header()
{
  const handleClick= ()=>{
    let button = document.getElementById('sm-nav');
    let lgNav = document.getElementById('m-nav');
    if(button.classList.contains('active')){
      button.classList.remove('active');
      lgNav.classList.remove('active');
    }else{
      button.classList.add('active');
      lgNav.classList.add('active');
    }
  }

  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className='shadow'>
        <Container id='main-nav'>
          <Navbar.Brand href='/home'>
          <img id='nav-img' src={require('./img/navlogo.png')} alt='logo' width={60}/>
          </Navbar.Brand>

            <button id='sm-nav' className='navbar-btn hoverale' onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>

          </button>

          <Nav className="ms-3" id='lg-nav'>
            <Nav.Link href="/home" className='me-3'>HOME</Nav.Link>
            <NavDropdown title="PROJECTS" className='me-3'>
              <NavDropdown.Item href="/projects/VR02" className='nav-drop'>Virtual Reality Online Orientation (VRO2)</NavDropdown.Item>
              <NavDropdown.Item href="/projects/VR-Clinic" className='nav-drop'>
              Virtual Reality Clinic Room
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/iVRLab" className='nav-drop'>
              Immersive VRLab Training (iVRLab)
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/VR-Graduation" className='nav-drop'>
              Virtual Reality Graduation Celebration amidst the Pandemic
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/CAVE" className='nav-drop'>
              CAVE Virtual Reality
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/VR-Media" className='nav-drop'>
              VR Media Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MEMBERS" className='me-3'>
              <NavDropdown.Item href='/members/Xinhao' className='nav-drop'>Dr. Xinhao Xu</NavDropdown.Item>
              <NavDropdown.Item href='/members/Hao' className='nav-drop'>Hao He</NavDropdown.Item>
              <NavDropdown.Item href='/members/Jhon' className='nav-drop'>Jhon Bueno Vesga</NavDropdown.Item>
              <NavDropdown.Item href='/members/Gayathri' className='nav-drop'>Gayathri Sadanala</NavDropdown.Item>
              <NavDropdown.Item href='/members/Shangman' className='nav-drop'>Shangman Li</NavDropdown.Item>
              <NavDropdown.Item href='/members/Yuanyuan' className='nav-drop'>Yuanyuan Gu</NavDropdown.Item>
              <NavDropdown.Item href='/members/ChenYu' className='nav-drop'>ChenYu (Alice) Hung</NavDropdown.Item>
              <NavDropdown.Item href='/members/Jason' className='nav-drop'>Jason Snyder</NavDropdown.Item>
              <NavDropdown.Item href='/members/Lanxin' className='nav-drop'>Lanxin Xue</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/members' className='nav-drop'>
              ALL
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SCHOLARLY PRODUCTS" className='me-3'>
            <NavDropdown.Item href="/conference">Selected Conference Presentations</NavDropdown.Item>
              <NavDropdown.Item href="/publications">
              Selected Refereed Publications
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news" className='me-3'>NEWS</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScyRncCDfMSkvhmIeIly8HD5zYNB0v04CTQXVZBQ7iraVHLGg/viewform" target='_blank' className='me-3'>REGISTER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Nav className="ms-3" id='m-nav'>
            
            <NavDropdown title="PROJECTS" className='me-3'>
              <NavDropdown.Item href="/projects/VR02" className='nav-drop'>Virtual Reality Online Orientation (VRO2)</NavDropdown.Item>
              <NavDropdown.Item href="/projects/VR-Clinic" className='nav-drop'>
              Virtual Reality Clinic Room
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/iVRLab" className='nav-drop'>
              Immersive VRLab Training (iVRLab)
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/VR-Graduation" className='nav-drop'>
              Virtual Reality Graduation Celebration amidst the Pandemic
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/CAVE" className='nav-drop'>
              CAVE Virtual Reality
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/VR-Media" className='nav-drop'>
              VR Media Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MEMBERS" className='me-3'>
              <NavDropdown.Item href='/members/Xinhao' className='nav-drop'>Dr. Xinhao Xu</NavDropdown.Item>
              <NavDropdown.Item href='/members/Hao' className='nav-drop'>Hao He</NavDropdown.Item>
              <NavDropdown.Item href='/members/Jhon' className='nav-drop'>Jhon Bueno Vesga</NavDropdown.Item>
              <NavDropdown.Item href='/members/Gayathri' className='nav-drop'>Gayathri Sadanala</NavDropdown.Item>
              <NavDropdown.Item href='/members/Shangman' className='nav-drop'>Shangman Li</NavDropdown.Item>
              <NavDropdown.Item href='/members/Yuanyuan' className='nav-drop'>Yuanyuan Gu</NavDropdown.Item>
              <NavDropdown.Item href='/members/ChenYu' className='nav-drop'>ChenYu (Alice) Hung</NavDropdown.Item>
              <NavDropdown.Item href='/members/Jason' className='nav-drop'>Jason Snyder</NavDropdown.Item>
              <NavDropdown.Item href='/members/Lanxin' className='nav-drop'>Lanxin Xue</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/members' className='nav-drop'>
              ALL
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SCHOLARLY PRODUCTS" className='me-3'>
              <NavDropdown.Item href="/conference">Selected Conference Presentations</NavDropdown.Item>
              <NavDropdown.Item href="/publications">
              Selected Refereed Publications
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news" className='me-3'>NEWS</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScyRncCDfMSkvhmIeIly8HD5zYNB0v04CTQXVZBQ7iraVHLGg/viewform" target='_blank' className='me-3'>REGISTER</Nav.Link>
          </Nav>
    </>
  )
}

export function Footer(){
  return  ( 
    <>
      <Row xs={3} md={3} className="g-5 bg-dark ps-5 pe-5 pb-5 m-0 justify-content-md-center footer-icons">
        <Col>
          <a href="https://twitter.com/MizzouTell" target='_blank' rel="noreferrer" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icons'> <path fill='#00acee' d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
        </Col>
        <Col>
        <a href="https://www.youtube.com/channel/UCTkzZP-OAtgFcDDMxXOsG-A" target='_blank' rel="noreferrer" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='icons'><path fill='#c4302b' d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>
        </Col>
        <Col>
         <a href='mailto:tellmizzou@gmail.com'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icons'><path fill='#F1B82D' d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>
        </Col>
      </Row>
      <Row xs={1} md={1} className="g-3 bg-dark ps-5 pe-3 m-0 justify-content-md-center">
        <Col className='footer-text'>
          <p>&#169; {new Date().getFullYear()}: TELL Research Lab, All Rights Reserved</p>
        </Col>
      </Row>
      <Row xs={1} md={1} className="g-2 bg-dark ps-5 pe-3 m-0 justify-content-md-center">
        <Col className='footer-text'>
          <p><a href='mailto:tellmizzou@gmail.com'>tellmizzou@gmail.com</a></p>
        </Col>
      </Row>
      <Row xs={1} md={1} className="g-2 bg-dark ps-5 pe-3 m-0 justify-content-md-center">
        <Col className='footer-text'>
          <p>Developed by Dan Huang</p>
        </Col>
      </Row>

    </>
  )
}

export function Home(){
  const currents = [];
  news.map((n)=>{
    if(n.year == '2023'){
      currents.push(n);
    }
})
    
  
  return (
    <>
    <Header />
  <div id='home-page-m'>
    <Row xs={1} md={2}  id='home-header-m'>
          <Col>
          <Carousel className='shadow-lg'>
        {peopleImg.map((value, index)=>(
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={value.img}
            alt={index}
          />
          <Carousel.Caption>
          <p>{value.text}</p>
          
        </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>
      </Col>
    </Row>
    <Row xs={1} md={1} id='home-header-m'>
      <Col>
          <img src={require('./img/home-header-m.png')} alt='header' className='mt-5'/>
      </Col>
    </Row>

    <Row xs={1} md={1} id='about-m'>
      <Col className='shadow mt-5 p-4 pt-5'>
        <div className='container'>
      <h2>About Us</h2>
      <hr/>
      <p><b>We are a research lab afiliated to the <a href='https://education.missouri.edu/information-science-learning-technologies/' target='_blank' rel="noreferrer" >School of Information Science and Learning Technologies</a> of the <a href='https://missouri.edu/' target='_blank' rel="noreferrer">University of Missouri – Columbia</a> focusing on</b></p>
      <br/>
      <ul>
        <li><b>Mixed-Reality-Based Learning Environments</b></li>
        <li><b>Embodied Interactions and Learning</b></li>
        <li><b>Learning Games for STEM Subjects and Computational Thinking</b></li>
        <li><b>Novel Technologies for Instructions and Learning</b></li>
      </ul>
      </div>
      </Col>
    </Row>
    <Row xs={1} md={1} id='home-row-m2'>
    <Col className='shadow mt-5 p-4 pt-5'>
        <h2>Reserch Projects</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
      {projectInfo.map((value,index)=>(
        <Carousel.Item>
          <Row xs={1} md={2}>
            <Col>
                <img src={value.imgs!=''?value.imgs[0]:require('./img/logo.png')} alt={value.name} className='home-projects'/>
            </Col>
            <Col className='mt-4'>
              <div id='home-row-m2-col-2'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.subtitle}</p>
              <Button variant="dark" href={'/projects/'+value.project}>Learn More</Button>
              </div>
            </Col>
          </Row>

        </Carousel.Item>

      ))}
      </Carousel>
      </Col>
      </Row>
      <Row xs={1} md={1} id='home-row-m3'>
      <Col className='shadow mt-5 mb-5 p-4 pt-5'>
        <h2>{new Date().getFullYear()} News</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
          
      {currents.map((value,index)=>(
        
        <Carousel.Item>
          <Row xs={1} md={2}>
            <Col>
                <img src={(value.imgs!='')?value.imgs[0]:require('./img/logo.png')} alt={value.name} className='home-projects'/>
            </Col>
            <Col className='mt-5'>
            <div id='home-row-m3-col-2'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.txt}</p>
              <Button variant="dark" href={'/news'}>Learn More</Button>
              </div>
            </Col>
          </Row>

        </Carousel.Item>
        
      ))}
      </Carousel>
      </Col>
      </Row>
      </div>
    <div id='home-header' className='container-fluid shadow p-0'>
      <Row xs={1} md={1} className="home-show">
   
      <Col id='home-car'>
      <Carousel id='car-body'>
      <Carousel.Item>
        <img
          className="d-block project-img w-100"
          src={require('./img/car-1.png')}
          alt="project 1"
        />
        <Carousel.Caption>
          <p>TELL Team at VR Clinic Project</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block project-img w-100"
          src={require('./img/car-2.png')}
          alt="project 2"
        />

        <Carousel.Caption>
        <p>TELL Team at CAVE Virtual Reality Project</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block project-img w-100"
          src={require('./img/car-3.png')}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p>TELL Team at CAVE Virtual Reality Project</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block project-img w-100"
          src={require('./img/car-4.png')}
          alt="4th slide"
        />

        <Carousel.Caption>
        <p>TELL Team at VR Clinic Project</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </div>
    
    <div className='container-fluid' id='home-content'>
    
    <Row xs={1} md={1}  id='desc-img' className='justify-content-md-center'>
      <Col className='m-5'>
       <h2> <img src={require('./img/logo.png')} alt='name'/>Technology to Enhance Learning Lab</h2>
      </Col>
    </Row>
    
    <Row xs={1} md={1} id='how-row1'>
      <Col className='m-5 shadow p-5' id='desc'>
      <h2>About Us</h2>
      <hr/>
      <p><b>We are a research lab afiliated to the <a href='https://education.missouri.edu/information-science-learning-technologies/' target='_blank' rel="noreferrer" >School of Information Science and Learning Technologies</a> of the <a href='https://missouri.edu/' target='_blank' rel="noreferrer">University of Missouri – Columbia</a> focusing on</b></p>
      <br/>
      <p><img src={require('./img/logo.png')} alt='logo'/><b>Mixed-Reality-Based Learning Environments</b></p>
      <p><img src={require('./img/logo.png')} alt='logo'/><b>Embodied Interactions and Learning</b></p>
      <p><img src={require('./img/logo.png')} alt='logo'/><b>Learning Games for STEM Subjects and Computational Thinking</b></p>
      <p><img src={require('./img/logo.png')} alt='logo'/><b>Novel Technologies for Instructions and Learning</b></p>
      </Col>
    </Row>
    <Row xs={1} md={1} id='how-row2'>
      <Col className='m-5 shadow p-5' id='about'>
        <h2>Reserch Projects</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
      {projectInfo.map((value,index)=>(
        <Carousel.Item>
          <Row xs={1} md={2}>
            <Col>
                <img src={value.imgs!=''?value.imgs[0]:require('./img/logo.png')} alt={value.name} className='home-projects'/>
            </Col>
            <Col className='mt-4'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.subtitle}</p>
              <Button variant="dark" href={'/projects/'+value.project}>Learn More</Button>
            </Col>
          </Row>

        </Carousel.Item>

      ))}
      </Carousel>
      </Col>
    </Row>

    <Row xs={1} md={1} id='how-row3'>
      <Col className='m-5 shadow p-5' id='news'>
        <h2>{new Date().getFullYear()} News</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
          
      {currents.map((value,index)=>(
        
        <Carousel.Item>
          <Row xs={1} md={2}>
            <Col>
                <img src={(value.imgs!='')?value.imgs[0]:require('./img/logo.png')} alt={value.name} className='home-projects'/>
            </Col>
            <Col className='mt-4'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.txt}</p>
              <Button variant="dark" href={'/news'}>Learn More</Button>
            </Col>
          </Row>

        </Carousel.Item>
        
      ))}
      </Carousel>
      </Col>
    </Row>

    </div>
    <Footer />
    </>
  )
}
export function App() {
  return (
    <Entrance />
  );
  }
