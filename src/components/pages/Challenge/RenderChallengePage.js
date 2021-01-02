import React, { useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Challenges from '../../challenges/challenges';

import './ChallengePage.css';

function RenderChallengePage(){
    const params = useParams();
    const nextchallenge = `challenge${params.id}`
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
   
    return (
        <div className="challenge">
            <Link to='/dashboard'>Return to Dashboard</Link>
             {Challenges({component: nextchallenge})}
        </div>
      );
}

export default RenderChallengePage;

