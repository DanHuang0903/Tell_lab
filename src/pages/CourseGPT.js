import { useState } from 'react';
import './GPT.css';
import '../App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { Header,Footer } from '../App.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { API_KEY } from '../db.js';


export function CourseGPT() {

  const [messages, setMessages] = useState([
    {
      message: 'Hello!',
      sender: 'ChatGPT',
    }
  ]);


  const [typing, setTyping] = useState(false);
  const [topic, setTopic] = useState('');
  const [audiences, setAudiences] = useState('');
  const [homework, setHomework] = useState(false);
  const [weeks, setWeeks] = useState('8');
  const [syllabus, setSyllabus] = useState('');
  const [tabId, setTabId] = useState([{
    current:0,
    content:'',
    disabled:false
  }]);

  // Hooks for controlling tabs
  const [tabDisable, setTabDisable] = useState(true);
  const [syllabusDisable, setSyllabusDisable] = useState(false);

  // Hooks for tune options
  const [tuneEasy, setTuneEasy] = useState('');
  const [tuneDiff, setTuneDiff] = useState('');
  const [tuneDetailed, setTuneDetailed] = useState('');
  const [tuneHomeworkMore, setTuneHomeworkMore] = useState('');
  const [tuneHomeworkLess, setTuneHomeworkLess] = useState('');
  const [validated, setValidated] = useState(false);



// Show the form div for tuning the syllabus
  const showModify = ()=>{
    let edit = document.getElementById('edit-form');

    if(edit.classList.contains('d-none')){
      document.getElementById('edit-form').className = 'text-start';
      document.getElementById('panel_hm').disabled = true;
    }else{
      document.getElementById('edit-form').className = 'd-none';
      document.getElementById('panel_hm').disabled = false;
    }
    
  }


// Resubmit Syllabus request after edit 
const handleSubmitModify = async (event)=>{
    event.preventDefault();
    const tune = [];
    tune.push(tuneEasy, tuneDetailed, tuneDiff, tuneHomeworkMore, tuneHomeworkLess);
    console.log(tune.toString());
   //Regenerate Syllabus
   generateSyllabus(tune.toString());
   document.getElementById('panel_hm').disabled = false;
  }




// Submit request after click submit
const handleSubmitCourse = async(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log(form.checkValidity());
      event.preventDefault();
       setValidated(true);
       return false;
    }

    event.preventDefault();

    let hm = 'does not have';

    if(homework){
      hm = 'have';
    }
    // generate  Syllabus
    generateSyllabus('I am developing a course about ' + topic+ ' for ' + audiences + '. It is a ' + weeks + ' weeks course and ' + hm + ' homework, tests or final project. Can you generate the detailed syllabus including a course name? Please respond with syllabus itself only, no other message.');

    const side_input = document.getElementById('panel_form').getElementsByTagName('input');
 
    for(let i of side_input){
        i.disabled=true;
        i.style.opacity = 0.5
    }
  }



// Generate Syllabus 
async function generateSyllabus(message){
    const newMessage = {
      message: message,
      sender:'user',
      direction: 'outgoing'
    }
     const newMessages = [...messages, newMessage];
    // update messages state (setMessages)
    setMessages(newMessages);
    setTyping(true);
    document.getElementById('s-content').className='d-none';
    document.getElementById('edit-form').className = 'd-none';
    // send message to ChatGPT and handle response
    setTabId([{
      current:0,
      content:'',
      disabled:false
    }]);

    document.getElementById('submit_course').style.display = 'none';
   // Erase weeks content when regenerating Syllabus.
    setTabDisable(true);
    await sendToGPT(newMessages);

    document.getElementById('toggle_btn').className='btn btn-sm btn-primary';
    document.getElementById('toggle_btn').style.animation = 'hithere 1s';
  }




// Reset the course setting
const regenerate = ()=>{
    document.getElementById('toggle_btn').className='d-none';
    document.getElementById('submit_course').style.display = 'block';
    document.getElementById('submit_course').disabled = false;
    const side_inputs = document.getElementById('panel_form').getElementsByTagName('input');
    for(let i of side_inputs){
      i.disabled=false;
      i.style.opacity = 1;
    }
    setTabDisable(true);
    setWeeks('');
  }



// When change the weeks tab
async function handleTab(index) {
    if(tabId[index]){
     // Disable submit when is not on Syllabus tab.
      if(tabId[index].current == 0){
        document.getElementById('submit_course').disabled='';
      }else{
        document.getElementById('submit_course').disabled='true';
      }
      return false;
    }
   
    document.getElementById('submit_course').disabled='true';
    setTabDisable(true);
    const newMessage = {
      message: 'Please based on syllabus, generate detailed long content for Week'+index+', which students can read through as learning material. Please just respond the content, no other text please',
      sender:'user',
      direction: 'outgoing'
    }
     const newMessages = [...messages, newMessage];
    // update messages state (setMessages)
    setMessages(newMessages);
    setTyping(true);
    setSyllabusDisable(true);
    // send message to ChatGPT and handle response
    await sendToGPTForWeek(newMessages, index);
    setSyllabusDisable(false);
    
  }


// Update how many weeks it contains
function updateWeeks(weeks){
    const weeksCount = [];
    for(let i = 0; i < weeks; i ++){
      weeksCount.push(i);
    }
    return weeksCount;
  }




// Send message to GPT to generate Syllabus
async function sendToGPT(userMessage){
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
      setMessages(
        [...userMessage, {
          message:data.choices[0].message.content,
          sender:'ChatGPT'
        }]
      );
      setTyping(false);
      setSyllabus(data.choices[0].message.content);
      setTabDisable(false);
      if(data.choices[0].message.content.includes('Cannot change the weeks')){
        //setEditWeeks(true);
        document.getElementById('s-content').className = 'd-none';
      }
      document.getElementById('s-content').className = '';
      document.getElementById('syllabus-btn').className = 'mt-3 mb-3 btn btn-primary';
    })
    
  }



// Send message to GPT to generate weekly content
 async function sendToGPTForWeek(userMessage, index){
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
      setMessages(
        [...userMessage, {
          message:data.choices[0].message.content,
          sender:'ChatGPT'
        }]
      );
      setTyping(false);
      tabId[index]={current:index, content:data.choices[0].message.content, disabled:false};
      setTabDisable(false);
    })
    
  }


  const subContent = syllabus.split(/\r\n|\r|\n/);
  const weekContent=[];
function getContent(data,i){
    weekContent[i] = data.split(/\r\n|\r|\n/)
  }

  return (
    <div className="courseGPT">
      <Header/>
      <div className='container mb-4 mt-4 shadow' id='course_gpt'>
       
          <div className='shadow bg-dark text-light p-5 text-start' >
          <h3 className='display-6'>CourseGPT</h3>
          <p><small>Get a comprehensive course structure.</small></p>
          <hr/>
        </div>
       
        <div className='container row w-100 g-0'>
        <div id='side_panel' className='col-xs-12 col-md-3 shadow bg-dark text-light p-4' style={{height: '40rem'}}>
          <div id='course_setting' className='mb-4'style={{height: '6rem'}}>
            <h5>Course Setting</h5>
            
            <Button variant="primary" id='toggle_btn' className='d-none' onClick={regenerate}> RESET
          </Button>
          </div>       
        <Form onSubmit={handleSubmitCourse} noValidate validated={validated} className='text-start' id='panel_form'>
          <Form.Group className="mb-3" controlId="formTopic">
            <Form.Label>Course Topic <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control 
            type='text' 
            placeholder="Enter topic" 
            value={topic}
            required
            onChange={(e)=>{setTopic(e.target.value)}}
            />
            <Form.Control.Feedback type="invalid">
            Please provide a valid topic.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formWeeks">
            <Form.Label>Weeks <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control 
            type='text' 
            placeholder="Enter weeks" 
            value={weeks}
            required
            onChange={(e)=>{
              if(e.target.value > 16 || e.target.value < 0){

                return (<Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>)
              }
              setWeeks(e.target.value);
              
            }}
            />
            <Form.Text className="text-light">
              * Can only provide up to 16 weeks.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
            Please provide a valid number of weeks.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAudiences">
            <Form.Label>Audiences <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter audiences" 
            value={audiences}
            required
            onChange={(e)=>{setAudiences(e.target.value)}}
            />
            <Form.Text className="text-light">
              Who will take this course
            </Form.Text>
            <Form.Control.Feedback type="invalid">
            Please provide a valid audiences.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
            id='panel_hm'
            type="checkbox" 
            label="Homework" 
            checked={homework}
            onChange={(e)=>{setHomework(e.target.checked)}}
            />
          </Form.Group>
          <Button variant="primary" type="submit" id='submit_course'>
            Submit
          </Button>
          
        </Form>
        </div>

        <div className='col-xs-12 col-md-9 shadow text-start p-4' style={{height: '40rem', overflow: 'auto'}}  id='weeks_tab'>
          <Tabs defaultIndex={0} onSelect={(index)=>handleTab(index)}>
            <TabList>
              <Tab disabled={syllabusDisable}>Syllabus</Tab>
              {updateWeeks(weeks).map((w,i)=>(
                <Tab key={i} disabled={tabDisable}>Week {w+1}</Tab>
              ))}
            </TabList>
            <TabPanel>
            
            {typing? <TypingIndicator content='I am generating'/>:null}
            <div id='s-content' className=''>
            <div id='syllabus_txt'>
            {subContent.map((s,i)=>{
              return s.includes((''))? <p className='content' key={i}><br/>{s}</p> : <p className='content'>{s}</p>
            })}
            </div>
            <Button variant="primary" onClick={showModify} id='syllabus-btn' className='m-3 d-none'> 
                Tune
            </Button>
            
            </div>
  
            <Form onSubmit={handleSubmitModify} className='text-start d-none' id='edit-form'>
                <Form.Group className="mb-3" controlId="formEasierCheckbox">
                  <Form.Check
                  id='tune_easier' 
                  type="checkbox" 
                  label="Make it easier" 
                  value="Make it easier"
                  onChange={(e)=>{
                    console.log(e.target.checked);
                    if(e.target.checked && tuneEasy === ''){
                      setTuneEasy("Make it easier");
                      document.getElementById('tune_diff').disabled = true;
                    }
                    if(!e.target.checked){
                      setTuneEasy('');
                      document.getElementById('tune_diff').disabled = false;
                    }
                  }}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDifficultCheckbox">
                  <Form.Check 
                  id='tune_diff'
                  type="checkbox" 
                  label="Make it more difficult" 
                  value='Make it more difficult'
                  onChange={(e)=>{
                    if(e.target.checked && tuneDiff === ''){
                      setTuneDiff('Make it more difficult');
                      document.getElementById('tune_easier').disabled = true;
                    }
                    if(!e.target.checked){
                      setTuneDiff('');
                      document.getElementById('tune_easier').disabled = false;
                    }
                  }}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDetailedCheckbox">
                  <Form.Check 
                  id='tune_detailed'
                  type="checkbox" 
                  label="Make it more detailed" 
                  value='Make it more detailed'
                  onChange={(e)=>{
                    if(e.target.checked && tuneDetailed === ''){
                      setTuneDetailed('Make it more detailed')
                    }
                    if(!e.target.checked){
                      setTuneDetailed('');
                    }
                  }}
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMoreHMCheckbox">
                  <Form.Check 
                  id='tune_detailed'
                  type="checkbox" 
                  label="Less Homework" 
                  disabled={!homework}
                  onChange={(e)=>{
                    if(e.target.checked && tuneHomeworkLess === ''){
                      setTuneHomeworkLess('assign less homework')
                    }
                    if(!e.target.checked){
                      setTuneHomeworkLess('');
                    }
                  }}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMoreHMCheckbox">
                  <Form.Check 
                  id='tune_detailed'
                  type="checkbox" 
                  label="More Homework" 
                  disabled={!homework}
                  onChange={(e)=>{
                    if(e.target.checked && tuneHomeworkMore === ''){
                      setTuneHomeworkMore('assign more homework')
                    }
                    if(!e.target.checked){
                      setTuneHomeworkMore('');
                    }
                  }}
                  />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
            </TabPanel>
            {updateWeeks(weeks).map((w,i)=>(
                <TabPanel key={i}>
                  {typing? <TypingIndicator content={'I am generating the content for week '+(i+1)}/>:null}
                  {tabId[i+1]?getContent(tabId[i+1].content, i+1) : ''}
                  {weekContent[i+1]?weekContent[i+1].map((s,i)=>{
                    return s.includes((''))? <p className='content' key={i}><br/>{s}</p> : <p className='content'>{s}</p>
                  }):''}
               
                </TabPanel>
              ))}
          </Tabs>
        
        </div>
         
        </div>
        </div>
        
        <Footer/>
    </div>
  
  );
}