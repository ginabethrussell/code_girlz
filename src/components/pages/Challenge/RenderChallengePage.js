import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Challenges from '../../challenges/challenges';

import './ChallengePage.css';

function RenderChallengePage(props){
    const params = useParams();
    const nextchallenge = `challenge${params.id}`
   
    return (
        <div className="challenge">
            <Link to='/dashboard'>Return to Dashboard</Link>
             {Challenges({component: nextchallenge})}
        </div>
      );
}

export default RenderChallengePage;

