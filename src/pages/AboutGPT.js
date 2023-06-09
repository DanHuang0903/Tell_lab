import './GPT.css';
import '../App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Header,Footer } from '../App.js';
import Button from 'react-bootstrap/Button';

export function AboutGPT(){
    return(
        <div className='about'>
            <Header/>
            <div className='containter m-4 ps-3 pe-3 shadow' id='about_content'>
            <div>
            <h3> 
            <img src={require('../img/ChatGPT_logo.png')} alt='logo' width='35' className='pb-1'/> AI Playground 
            </h3>
                This web application is designed to showcase the potential applications of embedded chatGPT in the field of education. Within this application, two distinct use cases are demonstrated. <br/><br/>
                Firstly, the purpose of IdeaGPT is to provide a valuable tool for college students aiming to evaluate the originality of their research paper ideas. By utilizing IdeaGPT, students can determine whether their proposed research topic has been previously explored or if similar work has been conducted. IdeaGPT will furnish relevant papers and studies that align with the student's research focus.  <br/><br/>

                Secondly, the PaperGPT feature has been developed with the primary objective of assisting high school students and college students in gaining a comprehensive understanding of state-of-the-art research papers fast. It could extract papers essential content in straightaway language with essential details such as the paper's title, author, publication year, and journal.  <br/><br/>

                Then, the CourseGPT feature aims to assist K-12 teachers in generating comprehensive course content, particularly when they encounter knowledge gaps in certain subjects.
            </div>
            <hr/>
            <div>
            <Button href="/ideagpt" className='about_btn btn-dark m-3'> IdeaGPT </Button>
            <Button href="/papergpt" className='about_btn btn-dark m-3'> PaperGPT </Button>
            <Button href="/coursegpt" className='about_btn m-3'> CourseGPT </Button>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

