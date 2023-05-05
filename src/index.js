import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Home, Member} from './App';
import {MemberPage} from './pages/MemberPage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/members' element={<Member />} />
    <Route path='/members/:name' element={<MemberPage />} />

  </Routes>
  </BrowserRouter>
);


