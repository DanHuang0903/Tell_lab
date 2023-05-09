import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectInfo } from '../JSON/projectInfo.js';
import { Header,Footer } from '../App.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';


export function ProjectPage(){
  const [project, setProject] = useState(useParams().project);
    const [name, setName] = useState('');
    const [imgs, setImgs] = useState([]);
    const [description, setDescription] = useState([]);
    const [link, setLink] = useState('');

    useEffect(() => {
      const current = projectInfo.find(p => p.project == project);
      if(current){
          setName(current.name);
          setImgs(current.imgs);
          setLink(current.link);
          setDescription(current.description);
          
      }
  });
    return (
      <>
        <Header />
        <div className='container'>
        <Row xs={1} md={1} className='container-fluid mt-5 mb-5'>
          <Col>
            <h1 className='project-title'>
              {name}
            </h1>
            <hr/>
          </Col>
         
        </Row>
       
        <Row xs={1} md={2} className='container-fluid'>
          <Col>
          <Carousel className='shadow-lg'>
        {imgs.map((value, index)=>(
          <Carousel.Item>
          <img
            className="d-block project-img w-100 h-50"
            src={value}
            alt={index}
          />
        </Carousel.Item>
        ))}
        </Carousel>
        </Col>
        </Row>
        <Row xs={1} md={1} className='container mt-3 mb-5 project-content'>
          <Col>
            {description.map((value,index)=>(
              <div>
              <Row>
                <h3 className='project-title mt-3'>{value['title']}</h3>
              </Row>
              <Row>
              <p className='project-title project-detail'>{value['detail']}</p>
            </Row>
            </div>
            ))}
          </Col>
        </Row>
        </div>
        <Footer />
      </>
    )
  }