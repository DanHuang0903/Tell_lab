import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Home } from './App';
import { Projects } from './pages/Projects.js';
import { ProjectPage }  from './pages/ProjectPage.js';
import { Members } from './pages/Members.js';
import { MemberPage }  from './pages/MemberPage.js';
import { Products } from './pages/Products.js';
import { ProductPage } from './pages/ProductPage.js';
import { News } from './pages/News.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/projects/:project' element={<ProjectPage />} />
      <Route path='/members' element={<Members />} />
      <Route path='/members/:url' element={<MemberPage />} />
      <Route path='/products' element={<Products />} />
      <Route path='/members/:product' element={<ProductPage />} />
      <Route path='/news' element={<News />} />
    </Routes>
  </BrowserRouter>
);



