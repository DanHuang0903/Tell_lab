import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectInfo } from '../JSON/projectInfo.js';
import { Header,Footer } from '../App.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';

export function Projects(){


      return (
        <>
          <Header />

          <div className='container'>
        <Row id='news-header' className='shadow'>
          <Col className='mt-5'>
          <h1><img src={require('../img/logo.png')} alt='logo' className='me-3 ms-3'/>Projects</h1>
          </Col>
        </Row>
        <Tabs className='mt-5'>
           
            <TabList className='project-tab'>
            {
                projectInfo.map((p) => (
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
         
          <Row xs={1} md={2} className='container-fluid'>
            <Col>
            <Carousel className='shadow-lg'>
          {p.imgs.map((value, index)=>(
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
              {p.description.map((value,index)=>(
                <div>
                <Row>
                  <h3 className='project-title mt-3'>{value['title']}</h3>
                </Row>
                <Row>
                <div className='project-title project-detail'>{value['detail']}</div>
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