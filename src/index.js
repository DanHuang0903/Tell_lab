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
import { AboutGPT } from './pages/AboutGPT.js';
import { CourseGPT } from './pages/CourseGPT.js';
import { PaperGPT } from './pages/PaperGPT.js';
import { IdeaGPT } from './pages/IdeaGPT.js';
import { News } from './pages/News.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { projectInfo } from './JSON/projectInfo.js';
import { ProjectPage } from './pages/ProjectPage.js';
import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes key='routes'>
      <Route path='/' element={<App />} key='entr'/>
      <Route path='/home' element={<Home />} key='home-p'/>
      <Route path='/members' element={<Members />} key='members-p'/>
      <Route path='/news' element={<News />} key='news-p'/>
      <Route path='/conference' element={<Conference />} key='conf-p'/>
      <Route path='/publications' element={<Publications />} key='pub-p'/>
      <Route path='/:url' element={<MemberPage />} />
      <Route path='/projects' element={<Projects />} key='project-p'/>
      <Route path='/aboutgpt' element={<AboutGPT />} key='ai-p'/>
      <Route path='/coursegpt' element={<CourseGPT />} key='ai1-p'/>
      <Route path='/papergpt' element={<PaperGPT />} key='ai2-p'/>
      <Route path='/ideagpt' element={<IdeaGPT />} key='ai3-p'/>
      {projectInfo.map((p,i)=>(
                  <Route path={'/'+p.project} element={<ProjectPage name={p.project} key={'p'+i}/>}></Route>
                ))
      }
    </Routes>
  </BrowserRouter>
);



