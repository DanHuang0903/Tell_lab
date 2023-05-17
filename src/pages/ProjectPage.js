import React, { useState, useEffect } from 'react';
import { projectInfo } from '../JSON/projectInfo.js';
import { Header,Footer } from '../App.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';


export function ProjectPage(props){
  const [project, setProject] = useState(props.name);
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
        <div className='project-single'>
        <Row xs={1} md={1} className='container project-title'>
            <Col className='project-project mt-5'>
              <h1>
                {name}
              </h1>
              <hr/>
            </Col>
                    
          </Row>
        <Row xs={1} md={imgs == '' ? 1 : 2} className='container project-title mt-3'>
    
            <Col className='project-project'>
            <Carousel className='shadow-lg'>
          {imgs.map((value, index)=>(
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
          <Col className='project-project'>
          {
            link == '' ? '' :(
            <div id='video'>
                
                <Row>
                {
                   link['flatform'] == 'fb' ? 
                    <Row id='link'>
                   <h4 className='align-text-bottom'>
                    <a type='button' href='https://fb.watch/4fGHYSQZdH/' target='_blank' rel="noreferrer" className=' m-1 btn btn-lg btn-dark shadow'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='icons-f m-1'><path fill='#1778f2' d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg> Watch Full Video</a>
                    </h4>
                    </Row>
                    :
                   ''
                }  
                {
                    link['flatform'] == 'ytb' ? 
                    <Row  id='frame'>
                    <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='icons-f'><path fill='#c4302b' d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg> Project Video</h4>
                    <iframe src={link['url']} title={name + ' video'} className={imgs == ''? '  h-100':'h-100'} allow="autoplay"></iframe>
                    </Row> :
                    ''
                }
                 
             </Row>
            </div>
            )
          }
          </Col>
       
  
          </Row>
        <Row xs={1} md={1} className='container project-title'>
          <Col className='project-project mt-3'>
            {description.map((value,index)=>(
              <div>
              <Row>
                <h3>{value['title']}</h3>
              </Row>
              <Row>
              <p className='project-detail'>{value['detail']}</p>
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