import React from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.css';
import ginaBitmoji from '../../../gina.png';


function Splash () {
    const history = useHistory();
    console.log(history);

    return(
        <div className='splash-wrapper'>
            <div className='logo-wrapper'>
                <img src={ginaBitmoji} alt="gina bitmoji" />
            </div>
            <div className='info-wrapper'>
            <h2>Hi! I'm Gina.</h2>
            <h3>I'm a Software Developer and a Teacher.</h3>
            <p>
                I started my own journey teaching myself to code so I could introduce students to the possibilities of computer science.
                I wanted every girl to have the opportunity to express their own creativity and develop problem solving skills by building fun projects with code. 
            </p>
            <p>   
                Along the way I discovered I love the creativity, detailed analytical thinking, and thoughtful problem solving coding provides.
            </p>
    
            <p>Would you like to try learning to code?</p>
            <button onClick={() => history.push('/dashboard')}className='cta-button'>Let's Get Started</button>  
             
            </div>       
        </div>
    )
}

export default Splash;