import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { memberInfo } from '../JSON/memberInfo.js';
import { Header,Footer } from '../App.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function MemberPage(){
    const [avatar, setAvatar] = useState('');
    const [BIO, setBIO] = useState('');
    const [url, setUrl] = useState(useParams().url);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [linkName, setLinkName] = useState('');
    const [more, setMore] = useState([]);


    useEffect(() => {
        const member = memberInfo.find(m => m.url == url);
        if(member){
            setAvatar(member.avatar);
            setBIO(member.BIO);
            setName(member.name);
            setPosition(member.position);
            setTitle(member.title);
            setEmail(member.email);
            setLink(member.link);
            setLinkName(member.link_name);
            setMore(member.more);
            
        }
    },[url]);

    return (
        <> 
            <Header />
            <Row xs={2} md={2} className="g-3 member-intro shadow">
                <Col>
                <div  className='container ms-5 mt-3'>
                    <img src={avatar} alt='avatar'/>
                </div>
                </Col>
                <Col>
                 <Row xs={1} md={1} className="g-1 mt-3">
                    <div>
                        <h1>{name}</h1>
                        <hr className='w-50'/>
                    </div>
                 </Row>
                 
                 <Row xs={1} md={1} className="g-1">
                    <div>
                        <h3>{position}</h3>
                        <p>{title}</p>
                        <p className={email == '' ? 'no-email' : 'has-email'}><a href={'mailto:' + email}><FontAwesomeIcon icon={faEnvelope} /> {email}</a></p>
                        <p><a key={url} href={link}> {linkName}</a></p>
                    </div>
                 </Row>
                </Col>
            </Row>
            <Row xs={1} md={1} className="g-1 ps-5 mt-5">
                <Col className='container'>
                    <h1>BIO</h1>
                    <p>{BIO}</p>
                </Col>
            </Row>
            <Row xs={1} md={1} className="g-1 ps-5 mt-5">
                {more.map((value,index)=>(
                    <div className='container'>
                        <h3>{value['name']}</h3>
                        <ul>
                            {value['content'].map((value, index)=>(
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    </div>
  
                ))}
            </Row>
        <Footer />
        </>
    )
}

