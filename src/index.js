import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Home } from './App';
import { Projects } from './pages/Projects.js'
import { Members } from './pages/Members.js';
import { MemberPage }  from './pages/MemberPage.js';
import { Conference } from './pages/Conference.js';
import { Publications } from './pages/Publications.js';
import { News } from './pages/News.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/members' element={<Members />} />
      <Route path='/news' element={<News />} />
      <Route path='/conference' element={<Conference />} />
      <Route path='/publications' element={<Publications />} />
      <Route path='/:url' element={<MemberPage />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </BrowserRouter>
);



