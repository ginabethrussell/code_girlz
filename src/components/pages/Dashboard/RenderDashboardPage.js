import React from 'react';
import { Link } from 'react-router-dom';
// import './DashboardPage.css';


function RenderDashboardPage(props){
    const {user} = props;
    return (
        <div className='dashboard-wrapper'>
                <Link to='/'>Home</Link>
                <h1> Welcome back, {user.username}</h1>

        </div>
    );
}

export default RenderDashboardPage;