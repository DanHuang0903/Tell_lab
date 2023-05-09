import React from 'react';
import { projectInfo } from '../JSON/projectInfo.js';
import { Header,Footer } from '../App.js';
import { FacebookEmbed, TwitterEmbed } from 'react-social-media-embed';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import 'react-tabs/style/react-tabs.css';

export function Projects(){


      return (
        <>
          <Header />

          <div className='container'>
        <Row id='project-header' className='shadow'>
          <Col className='mt-5'>
          <h1><img src={require('../img/logo.png')} alt='logo' className='me-3 ms-3'/>Projects</h1>
          </Col>
        </Row>
        <Tabs className='mt-5'>
            <TabList className='project-tab p-0 h-100'>
            {
                projectInfo.map((p, i) => (
                    <Tab>{p.tab}</Tab>
                ))
            }
            </TabList>

            {
                projectInfo.map((p) => (
                    <TabPanel>
                    <div className='container'>
          <Row xs={1} md={1} className='container-fluid mt-5 mb-5'>
            <Col>
              <h1 className='project-title'>
                {p.name}
              </h1>
              <hr/>
            </Col>
                    
          </Row>
        
          <Row xs={1} md={p.imgs == '' ? 1 : 2} className='container-fluid'>
            <Col className='mt-2'>
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
          <Col className='mt-2'>
          {
            p.link == '' ? '' :(
            <div id='video'>
                
                <Row>
                {
                   p.link['flatform'] == 'fb' ? 
                    <Row id='link'>
                   <h4 className='align-text-bottom'>
                    <button href='https://fb.watch/4fGHYSQZdH/' target='_blank' rel="noreferrer" className=' m-1 btn btn-lg btn-dark shadow'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='icons-f m-1'><path fill='#1778f2' d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg> Watch Full Video</button>
                    </h4>
                    </Row>
                    :
                   ''
                }  
                {
                    p.link['flatform'] == 'ytb' ? 
                    <Row  id='frame'>
                    <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='icons-f'><path fill='#c4302b' d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg> Project Video</h4>
                    <iframe src={p.link['url']} title={p.name + ' video'} className={p.imgs == ''? '  h-100':'h-100'} allow="autoplay"  style={{with:'50%'}}></iframe>
                    </Row> :
                    ''
                }
                 
                </Row>
            </div>
            )
          }
          </Col>
  
          </Row>
          
          <Row xs={1} md={1} className='container mt-3 mb-5 project-content'>
            <Col>
              {p.description.map((value,index)=>(
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
          </TabPanel>
                ))
            }
                
        </Tabs>
          
          </div>
          <Footer />
        </>
      )
    }