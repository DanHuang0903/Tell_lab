import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header,Footer } from '../App.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function ProductPage(){
    

    return (
      <>
        <Header />
        
        <Footer />
      </>
    )
  }