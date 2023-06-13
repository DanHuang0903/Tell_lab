import { useState } from 'react';
import './GPT.css';
import '../App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Header,Footer } from '../App.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_KEY } from '../db.js';
import { TypingIndicator } from '@chatscope/chat-ui-kit-react'

export function PaperGPT(){
    const [request, setRequest] = useState([
        {
          message: 'Hello!',
          sender: 'ChatGPT',
        }
      ]);
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [journal, setJournal] = useState('');
    const [extract, setExtract] = useState(false);
    const [content, setContent] = useState('');
    const [submit, setSubmit] = useState(false);


   const handleSubmitPaper= async (event)=>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
             setValidated(true);
             return false;
          }
        if(parseInt(year)>new Date().getFullYear() || !Number.isInteger(parseInt(year)) || parseInt(year) < 1800){
            event.preventDefault();
            setYear('');
            setValidated(true);
             return false;
        }
        event.preventDefault();
        setSubmit(true);
        document.querySelector('#paper_content').classList.add('d-none');
        let message = 'Can you extract this paper for college students, including all the concepts and methods, algorithm used in the paper:' + name + '.(' + year + ').' + name + '.' + journal;

        const newMessage = {
            message: message,
            sender:'user',
            direction: 'outgoing'
          }
           const newRequests = [...request, newMessage];
          // update messages state (setMessages)
          setRequest(newRequests);

        setExtract(true);
        await extractPaper(newRequests);
        setSubmit(false);

    }

    async function extractPaper(userMessage){
        let sendMessage = userMessage.map((m,i)=>{
            let role = '';
            if(m.sender === 'ChatGPT'){
              role = 'assistant'
            }else{
              role = 'user'
            }
            return {
              role: role,
              content: m.message
            }
          })
          const systemRole = {
            role: 'system',
            content: 'Explain all concepts like I am a teacher.'
          }
          const apiRequest = {
            'model': 'gpt-3.5-turbo',
            'messages' : [systemRole, ...sendMessage]
          }
          await fetch('https://api.openai.com/v1/chat/completions',{
            method: 'POST',
            headers:{
              "Authorization":"Bearer " + API_KEY,
              "Content-Type": "application/json"
            },
            body:JSON.stringify(apiRequest)
          }).then((data)=>{
            return data.json();
          }).then((data)=>{
            setRequest(
              [...userMessage, {
                message:data.choices[0].message.content,
                sender:'ChatGPT'
              }]
            );
            setExtract(false);
            setContent(data.choices[0].message.content);
            document.querySelector('#paper_content').classList.remove('d-none');
            })
          
        }

        const subPaper = content.split(/\r\n|\r|\n/);
    return(
        <div className='paperGPT'>
        <Header/>
            <div className='container shadow mb-4 g-0' id='paper_gpt'>
              <div className='text-start p-4 bg-dark shadow text-light' >
                <h3 className='display-6'>PaperGPT</h3>
                <p><small>Get a comprehensive idea of a paper with straightaway language.</small></p>
                <hr/>
                <Form onSubmit={handleSubmitPaper} noValidate validated={validated} id='paper_form'>
            
                <Form.Group className="mb-3 col-xs-1 col-md-12" controlId="formPapername">
                    <Form.Label>Paper Name <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control 
                    type='text' 
                    placeholder="Enter paper name" 
                    value={name}
                    required
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please enter the valid paper name.
                </Form.Control.Feedback>
                </Form.Group>
                <div className='row'>
                <Form.Group className="mb-3 col-xs-1 col-md-3" controlId="formAuthor">
                    <Form.Label>Author Name <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control 
                    type='text' 
                    placeholder="Enter author name" 
                    value={author}
                    required
                    onChange={(e)=>{setAuthor(e.target.value)}}
                    />
                    <Form.Text className="text-light">
                    * Please include the first author.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid author's full name.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 col-xs-1 col-md-3" controlId="formYear">
                    <Form.Label>Year of Publication <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control 
                    type='text' 
                    placeholder="Enter the year of publication" 
                    value={year}
                    required
                    onChange={(e)=>{setYear(e.target.value)}}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid year.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 col-xs-1 col-md-3" controlId="formJournal">
                    <Form.Label>Journal/Conference </Form.Label>
                    <Form.Control 
                    type='text' 
                    placeholder="Enter the journal or conference" 
                    value={journal}
                    onChange={(e)=>{setJournal(e.target.value)}}
                    />
                    
                </Form.Group>
                </div>
                <Button variant="primary" type="submit" disabled={submit}>
                    Submit
                </Button>
            </Form>
            </div>
            <div className='container m-4'>
              {extract? <TypingIndicator content='I am extracting the paper'/>:null}
                <div  id='paper_content'>
                  {subPaper.map((s,i)=>{
                    return s.includes((''))? <p className='content' key={i}>{s}</p> : <p className='content'>{s}</p>
                  })}
                </div>
            </div>
            </div>
        <Footer/>
        </div>
    )
}