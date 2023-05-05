import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { memberInfo } from '../JSON/memberInfo.js';
import { Header } from '../App.js';

export function MemberPage(){
    const [avatar, setAvatar] = useState('');
    const [BIO, setBIO] = useState('');
    const [name, setName] = useState(useParams().name);

    useEffect(() => {
        for(let i = 0; i < memberInfo.length; i ++){
            if(memberInfo[i].url == name){
                setAvatar(memberInfo[i].avatar);
                setBIO(memberInfo[i].BIO);
            }
        }
    });

    return (
        <>
            <Header />
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={avatar} alt='avatar'/>
            </div>
            <div>
                <h1>{BIO}</h1>
            </div>
        </>
    )
}

