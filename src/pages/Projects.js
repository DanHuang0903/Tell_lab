import React from 'react';
import { projectInfo } from '../JSON/projectInfo.js';
import { Header,Footer } from '../App.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'react-tabs/style/react-tabs.css';

export function Projects(){


      return (
        <>
          <Header />

          <div className='container-fluid' id='projects-div'>
          <Row id='project-header' className='shadow'>
            <Col className='mt-5'>
            <h1><img src={require('../img/logo.png')} alt='logo' className=''/> Projects</h1>
            </Col>
          </Row>
          {
                projectInfo.map((p) => (
             
                <div className='shadow pb-3 projects-main'>
                  <Row xs={1} md={1} className='project-header container'>
                    <Col className='ms-3'>
                      <h3 className='mt-3'>
                        {p.name}
                        
                      </h3>
                      
                      <hr/>
                    </Col>
                            
                  </Row>
        
                <Row xs={1} md={p.imgs==''?1:2} className='project-title container ms-1'>
                  <Col>
                    <Carousel className='shadow-lg'>
                    {p.imgs.map((value, index)=>(
                      <Carousel.Item>
                      <img
                        className="d-block project-img w-100"
                        src={value}
                        alt={index}
                      />
                    </Carousel.Item>
                    ))}
                    </Carousel>
                  </Col>
                <Col className=''>
                  <Row className='ms-1 mt-3'>
                      {p.subtitle}
                  </Row>
                  
                  <Button variant="dark" href={'/'+p.project} className='ms-1 mt-3'>TELL Me More</Button>
                  
                  
                </Col>
      
              </Row>
          
 
          </div>

                ))
            }
          
          </div>
          <Footer />
        </>
      )
    }