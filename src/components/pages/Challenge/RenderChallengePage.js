import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams, useHistory } from 'react-router-dom';
import challenge1 from '../../../markdown/challenge1.md';
import ProjectUrlSubmission from '../../common/ProjectUrlSubmission';

import './ChallengePage.css';

function RenderChallengePage(props){
    const {loginUser} = props;
    const [challenge, setChallenge] = useState('');
    const params = useParams();
    console.log(params);
    const history = useHistory();

    useEffect(()=>{
        const challenge = `challenge${params.id}`;
        console.log(challenge);
        fetch(challenge1).then((response) => response.text()).then((text) => {
            setChallenge(text)
          })
    },[])
   
    return (
        <div className="challenge">
            <Link to='/dashboard'>Return to Dashboard</Link>
            <ReactMarkdown source={challenge} /> 
            <ProjectUrlSubmission />
        </div>
      );
}

export default RenderChallengePage;