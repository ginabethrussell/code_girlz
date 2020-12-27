import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import './DashboardPage.css';
import developerLogo from '../../../developer.svg';
import data from '../../../classData';

console.log(data);

function RenderDashboardPage(props){
    const [moduleData, setModuleData] = useState(data);
    
    
    const history = useHistory();
    const match = useRouteMatch(); 
    
    const handleLessonSelection = (id) => {
        history.push(`${match.url}/lesson${id}`);  
    };
    const handleChallengeSelection = (id) => {
        history.push(`${match.url}/challenge${id}`);
    };
    const handleProjectSelection = (id) => {
        history.push(`${match.url}/project${id}`)
    };

    return (
        <div className='dashboard-wrapper'>
            <div className='header'>
                <Link className='home' to='/'>Home</Link>
                <h1>Intro to Python Dashboard</h1>  
            </div>
            <div className='module-container'>
                {
                    moduleData.map(module => (
                        <div key={module.title} className='module'>
                            <h3>{module.title}</h3>
                            <p>{module.description}</p>
                            {
                                module.module?
                                (<>
                                    <div className='activities'>
                                        <button  className='dashboard' onClick={()=>{handleLessonSelection(module.id)}}>Lesson</button>
                                        <button  className='dashboard' onClick={() => {handleChallengeSelection(module.id)}}>Challenge</button>
                                    </div>
                                </>) :
                                (<>
                                    <div className='activities'>
                                        <button className='dashboard' onClick={() => {handleProjectSelection(module.id)}}>Project</button>
                                    </div>
                                </>)
                            }   
                            
                                
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RenderDashboardPage;