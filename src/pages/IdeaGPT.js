import { useState } from 'react';
import './GPT.css';
import '../App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Header,Footer } from '../App.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import { API_KEY } from '../db.js';
import { TypingIndicator } from '@chatscope/chat-ui-kit-react'

export function IdeaGPT(){
    const [request, setRequest] = useState([
        {
          message: 'Hello!',
          sender: 'ChatGPT',
        }
      ]);
    const [validated, setValidated] = useState(false);
    const [idea, setIdea] = useState('');
    const [year, setYear] = useState('5');
    const [extract, setExtract] = useState(false);
    const [content, setContent] = useState('');
    const [submit, setSubmit] = useState(false);
    const [length, setLength] = useState(0);
    const [amount, setAmount] = useState(3);


   const handleSubmitIdea= async (event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
         setValidated(true);
         return false;
      }
    
      event.preventDefault();
      document.querySelector('#idea_content').classList.add('d-none');
      let message = 'The idea is ' + idea + ', please list ' + amount + ' paper(s) with a simple summary, which discuss same idea and is(are) published within ' + year + ' years.'

      const newMessage = {
        message: message,
        sender:'user',
        direction: 'outgoing'
      }
       const newRequests = [...request, newMessage];
      // update messages state (setMessages)
      setRequest(newRequests);
      setSubmit(true);
      setExtract(true);
      await findPaper(newRequests);
      setSubmit(false);
    }


    // Validate the idea length
    function checkLength(event){
        if(length < 30){
            document.querySelector('#error_msg').innerHTML = 'The description is too short.';
            setValidated(true);
        }
    }

    async function findPaper(userMessage){
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
            document.querySelector('#idea_content').classList.remove('d-none');
            })
          
        }

        const subPaper = content.split(/\r\n|\r|\n/);
    return(
        <div className='ideaGPT'>
        <Header/>
            <div className='container mb-4 g-0 shadow' id='idea_gpt'>
            <div className='container text-start bg-dark shadow text-light p-4'>

                <h3 className='display-6'>IdeaGPT</h3>
                <p><small>Check if your idea is original.<br/>See who has been working on your idea.</small></p>
                <hr/>
                <Form onSubmit={handleSubmitIdea} noValidate validated={validated} id='idea_form'>
            
                <Form.Group className="mb-3 col-xs-1 col-md-12" id='my_idea' noValidate validated={validated}>
                    <Form.Label>Your Idea <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control 
                    as="textarea"
                    rows={5}
                    maxLength = '500'
                    minLength='10'
                    placeholder="Enter your idea" 
                    value={idea}
                    required
                    onChange={(e)=>{
                        setIdea(e.target.value); 
                        setLength(e.target.value.length);
                        checkLength(e);
                    }}
                    />
                    <Form.Control.Feedback type="invalid" id='error_msg'>
                    
                </Form.Control.Feedback>
                </Form.Group>
                <div className='row'>
                <Form.Group className="m-3 col-xs-6 col-md-4" controlId="formYear">
                    <Form.Label>Year of Publication</Form.Label>
                    <RangeSlider
                        className='slider'
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        tooltip='on'
                        min={1}
                        max={15}
                        variant="primary"
                    />
                </Form.Group>
                <Form.Group className="m-3 col-xs-6 col-md-4" controlId="formYear">
                    <Form.Label>How many papers to display</Form.Label>
                    <RangeSlider
                        className='slider'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        tooltip='on'
                        min={1}
                        max={10}
                        variant="primary"
                    />
                </Form.Group>
                </div>
                <Button variant="primary" type="submit" disabled={submit}>
                    Check
                </Button>
            </Form>
         
            </div>
            <div className='container m-4'>
            {extract? <TypingIndicator content='I am looking for the related paper'/>:null}
                <div id='idea_content'>
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