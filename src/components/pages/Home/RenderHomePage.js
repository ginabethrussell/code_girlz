import React from 'react';
import './HomePage.css';
import LoginForm from './LoginForm';

function RenderHomePage(props){
    const {loginUser} = props;
    return (
        <div className='home-wrapper'>
                <LoginForm loginUser={loginUser}/>
        </div>
    );
}

export default RenderHomePage;