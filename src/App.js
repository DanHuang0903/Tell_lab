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
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { memberInfo } from './JSON/memberInfo.js';



function Entrance(){
  return(
    <>
    <div id='main-background'>
      <div id='logo'><h2><img src={require('./img/logo.png')} alt='logo'/>Technology to Enhance Learning Lab</h2></div>
      <Link type='button' id='enter' className='btn btn-dark' to='/home'> TELL Me More </Link>
    </div>
    <img id='img' src={require('./img/main_background.png')} alt='background' />
    <div id='m-background' className='h-100 m-0'>
    
    <Row id='img-m1'>
      <Row id='m-logo-1'></Row>
      <img id='m-logo-2' src={require('./img/navlogo.png')} alt='logo'/>
   
    </Row>
    <Row  id='img-m2'>
      <Row id='btn-row'></Row>
      <Row>
        <Col className='container m-5'>
        
            <Link type='button' className='btn btn-dark btn-sm shadow' id='enter-m-btn' to='/home'> TELL Me More </Link>
        
        </Col>
       
      </Row>
    </Row>
    <Row className='container m-txt ms-2' id='enter-m-txt'>
        <p id='p1-m'>Mixed-Reality-Based Learning Environments</p>
        <br/>
        <br/>
        <p id='p2-m'>Embodied Interactions and Learning</p>
        <br/>
        <br/>
        <p id='p3-m'>Learning Games for STEM Subjects and Computational Thinking</p>
        <br/>
        <br/>
        <p id='p4-m'>Novel Technologies for Instructions and Learning</p>
        </Row>
    </div>

    
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
    <div id='main_nav'>

      <Navbar expand="lg" bg="dark" variant="dark" className='shadow' >
        <div className='ms-3 container-fluid'>
        
          <Navbar.Brand href='/home'>
          <img id='nav-img' src={require('./img/logo-reverse.png')} alt='logo' width={60}/>
          </Navbar.Brand>

          <button id='sm-nav' className='navbar-btn hoverale' onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>

          </button>

          <Nav id='lg-nav'>
            <Nav.Link href="/home" className='me-3' key='home-l'>HOME</Nav.Link>
            
            <NavDropdown title="PROJECTS" className='me-3' key='project-l'>
            <NavDropdown.Item href='/projects' className='nav-drop' key='project-all-l'>
                ALL
               </NavDropdown.Item>
               <NavDropdown.Divider />
              {
                projectInfo.map((p,i)=>(
                  <NavDropdown.Item href={'/'+p.project} className='nav-drop' key={'project-l'+i}>{p.project}</NavDropdown.Item>
                ))
              }
       
            </NavDropdown>
            <NavDropdown title="MEMBERS" className='me-3' key='members-l'>
            <NavDropdown.Item href='/members' className='nav-drop' key='members-all-l'>
              ALL
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {
                memberInfo.map((m,i) => (
                  <NavDropdown.Item href={'/'+m.url} className='nav-drop' key={'mpage-l'+i}>{m.name}</NavDropdown.Item>
                ))
              }  
            </NavDropdown>
            <NavDropdown title="SCHOLARLY PRODUCTS" className='me-3' key='scholar'>
            <NavDropdown.Item href="/conference" className='nav-drop' key='conf-l'>Selected Conference Presentations</NavDropdown.Item>
              <NavDropdown.Item href="/publications" className='nav-drop' key='pub-l'>
              Selected Refereed Publications
              </NavDropdown.Item>
            </NavDropdown>
           
            <Nav.Link href="/news" className='me-3' key='news-l'>NEWS</Nav.Link>
            <NavDropdown title="AI PLAYGROUND" className='me-3' key='ai-l'>
            <NavDropdown.Item href="/aboutgpt" className='nav-drop' key='ai-about-l'>About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ideagpt" className='nav-drop' key='ai1-l'>
              IdeaGPT
              </NavDropdown.Item>
              <NavDropdown.Item href="/papergpt" className='nav-drop' key='ai2-l'>
              PaperGPT
              </NavDropdown.Item>
              <NavDropdown.Item href="/coursegpt" className='nav-drop' key='ai3-l'>
              CourseGPT
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScyRncCDfMSkvhmIeIly8HD5zYNB0v04CTQXVZBQ7iraVHLGg/viewform" target='_blank' className='me-0' key='reg-l'>REGISTER</Nav.Link>
          </Nav>
          </div>
      </Navbar>

    
      <div id='m-nav-div'>
      <Nav className="border-bottom" id='m-nav'>
      
            <NavDropdown title="PROJECTS" className='me-3' key='project'>
               <NavDropdown.Item href='/projects' className='nav-drop' key='p-all'>
                ALL
               </NavDropdown.Item>
               <NavDropdown.Divider />
              {
                projectInfo.map((p,i)=>(
                  <NavDropdown.Item href={'/'+p.project} className='nav-drop' key={'project' + i}>{p.project}</NavDropdown.Item>
                ))
              }
       
            </NavDropdown>
            <NavDropdown title="MEMBERS" className='me-3' key='member'>
            <NavDropdown.Item href='/members' className='nav-drop' key='m-all'>
              ALL
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {
                memberInfo.map((m,i) => (
                  <NavDropdown.Item href={'/'+m.url} className='nav-drop' key={'member' + i}>{m.name}</NavDropdown.Item>
                ))
              }
              
            </NavDropdown>
            <NavDropdown title="SCHOLARLY PRODUCTS" className='me-3' key='scholarly'>
              <NavDropdown.Item href="/conference" className='nav-drop' key='conference'>Selected Conference Presentations</NavDropdown.Item>
              <NavDropdown.Item href="/publications" className='nav-drop' key='publication'>
              Selected Refereed Publications
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news" className='me-3' key='news'>NEWS</Nav.Link>
            <NavDropdown title="AI PLAYGROUND" className='me-3' key='ai'>
            <NavDropdown.Item href="/aboutgpt" className='nav-drop' key='ai-about'>About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ideagpt" className='nav-drop' key='ai1'>
              IdeaGPT
              </NavDropdown.Item>
              <NavDropdown.Item href="/papergpt" className='nav-drop' key='ai2'>
              PaperGPT
              </NavDropdown.Item>
              <NavDropdown.Item href="/coursegpt" className='nav-drop' key='ai3'>
              CourseGPT
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScyRncCDfMSkvhmIeIly8HD5zYNB0v04CTQXVZBQ7iraVHLGg/viewform" target='_blank' className='me-3' key='register'>REGISTER</Nav.Link>
            
          </Nav>
          </div>
    </div>
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


// Home page
export function Home(){
  const currents = [];
  news.map((n)=>{
    if(n.year == '2023'){
      currents.push(n);
    }
})
  
window.addEventListener('scroll',()=>{
  let top = document.querySelector('#desc-img').offsetTop;
  let bottom = document.querySelector('#about').offsetTop;
  let twitterPanel = document.querySelector('#twitter-panel');

  twitterPanel.addEventListener('mouseover', ()=>{
    document.querySelector('#twitter-panel-logo').style.display='none';
    document.querySelector('#twitter-logo-col').className='';
  });

  twitterPanel.addEventListener('mouseout', ()=>{
      document.querySelector('#twitter-panel-logo').style.display = 'block';
      document.querySelector('#twitter-logo-col').className='col-md-1';
    })

  if ((window.scrollY >= top) && (window.scrollY < bottom - 100)) {    
    document.querySelector('#twitter-panel-logo').style.animation = 'wobble 1s 3';
  }else{
    document.querySelector('#twitter-panel-logo').style.animation = '';
  }
})

console.log(window.innerWidth);
if(window.innerWidth < 581){
  window.addEventListener('scroll', ()=>{
    let about = document.querySelector('#about-m');
    let twitter = document.querySelector('#twitter-m');
    let project = document.querySelector('#home-row-m2');
    let ai = document.querySelector('#ai-m');
    let news = document.querySelector('#home-row-m3');
    if(window.scrollY >= about.offsetTop-300 && window.scrollY <= about.offsetTop+50){
      about.classList.add('shadow-lg');
      about.classList.remove('shadow-sm');
      twitter.classList.add('shadow-lg');
      twitter.classList.remove('shadow-sm');
    }else{
      about.classList.remove('shadow-lg');
      about.classList.add('shadow-sm');
      twitter.classList.remove('shadow-lg');
      twitter.classList.add('shadow-sm');
    }

    if(window.scrollY >= twitter.offsetTop-300 && window.scrollY <= twitter.offsetTop+50){
      twitter.classList.add('shadow-lg');
      twitter.classList.remove('shadow-sm');
    }else{
      twitter.classList.remove('shadow-lg');
      twitter.classList.add('shadow-sm');
    }

    if(window.scrollY >= project.offsetTop-300 && window.scrollY <= project.offsetTop+150){
      project.classList.add('shadow-lg');
      project.classList.remove('shadow-sm');
    }else{
      project.classList.remove('shadow-lg');
      project.classList.add('shadow-sm');
    }

    if(window.scrollY >= ai.offsetTop-300 && window.scrollY <= ai.offsetTop+150){
      ai.classList.add('shadow-lg');
      ai.classList.remove('shadow-sm');
    }else{
      ai.classList.remove('shadow-lg');
      ai.classList.add('shadow-sm');
    }

    if(window.scrollY >= news.offsetTop-300 && window.scrollY <= news.offsetTop+150){
      news.classList.add('shadow-lg');
      news.classList.remove('shadow-sm');
    }else{
      news.classList.remove('shadow-lg');
      news.classList.add('shadow-sm');
    }
  })
}
  
  return (
    <>

      <Header />

     <div id='home-page-m'>
    <Row xs={1} md={1} id='home-car-m'>
          <Col>
          <Carousel className='shadow-lg'>
        {peopleImg.map((value, index)=>(
          <Carousel.Item key={index}>
          <img
            className="d-block w-100 car-m"
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
    <Row xs={1} md={1}>
      <Col>
          <div className='container'>
            <img src={require('./img/home-header-m.png')} alt='header' className='mt-5 w-100'/>
          </div>
      </Col>
    </Row>

    <Row xs={1} md={1}>
      <Col className='shadow-sm mt-5 p-4 pt-5' id='about-m'>
        <div className='container'>
          <h2>About Us</h2>
          <hr/>
          <br/>
          <h6><b>TELL</b> - Technology to Enhance Learning Lab</h6>
          <br/>
          <p>We are a research lab afiliated to the <a href='https://education.missouri.edu/information-science-learning-technologies/' target='_blank' rel="noreferrer" >School of Information Science and Learning Technologies</a> of the <a href='https://missouri.edu/' target='_blank' rel="noreferrer">University of Missouri – Columbia</a> focusing on</p>
          <br/>
          <ul>
            <li>Mixed-Reality-Based Learning Environments</li>
            <li>Embodied Interactions and Learning</li>
            <li>Learning Games for STEM Subjects and Computational Thinking</li>
            <li>Novel Technologies for Instructions and Learning</li>
          </ul>
      </div>
      </Col>
    </Row>
    <Row xs={1} md={1}>
      <Col className='shadow-sm mt-5 p-4 pt-5' id='twitter-m'>
        <div className='container'>
          <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icons'> <path fill='#00acee' d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg> TELL Recent Tweets</h2>
          <hr/>
          <Row id='twitter-list-m' className='shadow rounded'>
            <TwitterTimelineEmbed className='twitter-body-m'
              sourceType="profile" 
              userId={"1219141583292989441"} 
            />
        </Row>
        </div>
      </Col>
    </Row>
    <Row xs={1} md={1}>
    <Col className='shadow-sm mt-5 p-4 pt-5' id='home-row-m2'>
      <div className='container'>
        <h2>Reserch Projects</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
      {projectInfo.map((value,index)=>(
        <Carousel.Item key={index}>
          <Row xs={1} md={2}>
            <Col>
                <img src={value.imgs!=''?value.imgs[0]:require('./img/project-default.png')} alt={value.name} className='w-100 home-projects'/>
            </Col>
            <Col className='mt-4'>
              <div id='home-row-m2-col-2'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.subtitle}</p>
              <Button variant="dark" href={'/'+value.project}>TELL Me More</Button>
              </div>
      
            </Col>
          </Row>

        </Carousel.Item>

      ))}
      </Carousel>
      </div>
      </Col>
      </Row>

      <Row xs={1} md={1}>
      <Col className='shadow-sm mt-5 p-4 pt-5' id='ai-m'>
        <div className='container'>
        <h2><img id='ai_logo' src={require('./img/ChatGPT_logo.png')} alt='logo' width='35' className='pb-1'/> AI Playground </h2>
          <hr/>
          <div className='me-5'>
           <h5>We built some tools using ChatGPT API to test how AI can help in educational activities</h5>
            <br/>
            <Button href="/coursegpt" className='btn btn-sm pt-0 pb-0 shadow'>CourseGPT</Button> feature aims to assist K-12 teachers in generating comprehensive course content, particularly when they encounter knowledge gaps in certain subjects.<br/><br/>

            <Button href="/papergpt" className='btn btn-sm pt-0 pb-0 shadow'>PaperGPT</Button> helps high school and college students swiftly understand state-of-the-art research papers by extracting content in straightaway language.<br/><br/>

            <Button href="/ideagpt" className='btn btn-sm pt-0 pb-0 shadow'>IdeaGPT</Button> is a valuable tool for college students to assess the originality of their research paper ideas. By utilizing IdeaGPT, students can determine if their proposed topic has been explored before and access relevant papers aligning with their research focus.<br/><br/>
            <hr/>

            <Button href="/aboutgpt" className='about_btn btn-dark m-3'>AI Playground</Button>

          </div>
      </div>
      </Col>
    </Row>

      <Row xs={1} md={1}>
      <Col className='shadow-sm mt-5 mb-5 p-4 pt-5'  id='home-row-m3'>
      <div className='container'>
        <h2>{new Date().getFullYear()} News</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
          
      {currents.map((value,index)=>(
        
        <Carousel.Item key={index}>
          <Row xs={1} md={2}>
            <Col>
           
                <img src={(value.imgs!='')?value.imgs[0]:require('./img/logo.png')} alt={value.name} className='w-100 home-projects'/>
            </Col>
            <Col className='mt-5'>
            <div id='home-row-m3-col-2'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.txt}</p>
              <Button variant="dark" href={'/news'}>All TELL News</Button>
              </div>
            </Col>
          </Row>

        </Carousel.Item>
        
      ))}
      </Carousel>
      </div>
      </Col>
      </Row>
    </div>

  <div id='home-main'>
    <div id='home-header' className='container-fluid shadow p-0'>
      <Row xs={1} md={1} className="home-show">
   
      <Col id='home-car'>
      <Carousel id='car-body'>
      <Carousel.Item>
        <img
          className="d-block home-car-img w-100 h-100"
          src={require('./img/car-1.png')}
          alt="project 1"
        />
        <Carousel.Caption>
          <p className='car-txt'>TELL Team at VR Clinic Project</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block home-car-img w-100"
          src={require('./img/car-2.png')}
          alt="project 2"
        />

        <Carousel.Caption>
        <p className='car-txt'>TELL Team at CAVE Virtual Reality Project</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block home-car-img  w-100"
          src={require('./img/car-3.png')}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p className='car-txt'>TELL Team at CAVE Virtual Reality Project</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block home-car-img w-100"
          src={require('./img/car-4.png')}
          alt="4th slide"
        />

        <Carousel.Caption>
        <p className='car-txt'>TELL Team at VR Clinic Project</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </div>
    
    <div className='container-fluid' id='home-content'>
    
    <Row xs={1} md={1}  id='desc-img' className='justify-content-md-center'>
      <Col className='mt-5 ps-3'>
       <h4 > <img src={require('./img/logo.png')} alt='name' /> Technology to Enhance Learning Lab</h4>
       <br/>
      </Col>
   
    </Row>
    
    <Row xs={1} md={1} id='how-row1'>
      <Col className='m-5 p-5' id='desc'>
      <h2>About Us</h2>
      <hr/>
      <Row xs={1} md={2}>
        <Col className='hadow pe-5'>
      <h5><b>TELL - Technology to Enhance Learning Lab</b></h5>
      <br/>
      <p>We are a research lab afiliated to the <a href='https://education.missouri.edu/information-science-learning-technologies/' target='_blank' rel="noreferrer" >School of Information Science and Learning Technologies</a> of the <a href='https://missouri.edu/' target='_blank' rel="noreferrer">University of Missouri – Columbia</a> focusing on</p>
      <br/>
      <p><img src={require('./img/logo.png')} alt='logo'/>Mixed-Reality-Based Learning Environments</p>
      <p><img src={require('./img/logo.png')} alt='logo'/>Embodied Interactions and Learning</p>
      <p><img src={require('./img/logo.png')} alt='logo'/>Learning Games for STEM Subjects and Computational Thinking</p>
      <p><img src={require('./img/logo.png')} alt='logo'/>Novel Technologies for Instructions and Learning</p>
      </Col>
      <Col>
      <div className='container row mt-3 pt-4 pd-4 shadow rounded' id='twitter-panel'>
        <div className='col-md-1' id='twitter-logo-col'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icons' id='twitter-panel-logo'> <path fill='#00acee' d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
        </div>
        <div className='col-md-10 ms-3 ps-3 pe-3' id='twitter-scroll'>
          <Row id='twitter-list' className='shadow rounded'>
            <div className='col-md-9'>
            <TwitterTimelineEmbed className='twitter-body-m'
              sourceType="profile" 
              userId={"1219141583292989441"} 
            />
            </div>
            <div className='col-md-2'>
              <img src={require('./img/logo-reverse.png')} alt='logo' style={{position:'absolute', bottom:'5%', right:'10%'}} />
            </div>
        </Row>
        </div>
          
        </div>
      </Col>
      </Row>
      </Col>

    </Row>
    <Row xs={1} md={1} id='how-row2'>
      <Col className='m-5 p-5' id='about'>
        <h2>Reserch Projects</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
      {projectInfo.map((value,index)=>(
        <Carousel.Item key={index}>
          <Row xs={1} md={2}>
            <Col>
                <img src={value.imgs!=''?value.imgs[0]:require('./img/project-default.png')} alt={value.name} className='home-projects'/>
            </Col>
            <Col className='mt-4'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.subtitle}</p>
              <Button variant="dark" href={'/'+value.project}>TELL Me More</Button>
            </Col>
          </Row>

        </Carousel.Item>

      ))}
      </Carousel>
      </Col>
    </Row>

    <Row xs={1} md={1} id='how-row22'>
      <Col className='m-5 p-5' id='ai'>
        <h2><img id='ai_logo' src={require('./img/ChatGPT_logo.png')} alt='logo' width='35' className='pb-1'/> AI Playground </h2>
        <hr/>

          <div className='me-5'>
           <h5>We built some tools using ChatGPT API to test how AI can help in educational activities</h5>
            <br/>
            <Button href="/coursegpt" className='btn btn-sm pt-0 pb-0 shadow'>CourseGPT</Button> feature aims to assist K-12 teachers in generating comprehensive course content, particularly when they encounter knowledge gaps in certain subjects.<br/><br/>

            <Button href="/papergpt" className='btn btn-sm pt-0 pb-0 shadow'>PaperGPT</Button> helps high school and college students swiftly understand state-of-the-art research papers by extracting content in straightaway language.<br/><br/>

            <Button href="/ideagpt" className='btn btn-sm pt-0 pb-0 shadow'>IdeaGPT</Button> is a valuable tool for college students to assess the originality of their research paper ideas. By utilizing IdeaGPT, students can determine if their proposed topic has been explored before and access relevant papers aligning with their research focus.<br/><br/>
            <hr/>

            <Button href="/aboutgpt" className='about_btn m-3 btn-dark'>AI Playground</Button>

          </div>
      </Col>
    </Row>

    <Row xs={1} md={1} id='how-row3'>
      <Col className='m-5 p-5' id='news'>
        <h2>{new Date().getFullYear()} News</h2>
        <hr/>
        <Carousel slide={false} variant="dark">
          
      {currents.map((value,index)=>(
        
        <Carousel.Item key={index}>
          <Row xs={1} md={2}>
            <Col>
                <img src={(value.imgs!='')?value.imgs[0]:require('./img/logo.png')} alt={value.name} className='home-projects'/>
            </Col>
            <Col className='mt-4'>
              <h4 className='project-title'>{value.name}</h4>
              <p>{value.txt}</p>
              <Button variant="dark" href={'/news'}>All TELL News</Button>
            </Col>
          </Row>

        </Carousel.Item>
        
      ))}
      </Carousel>
      </Col>
    </Row>

    </div>
    </div>
    <Footer />
    </>
  )
}

export function App(){
  return(
    <Entrance />
  )
}

