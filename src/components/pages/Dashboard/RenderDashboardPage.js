import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import './DashboardPage.css';
import developerLogo from '../../../developer.svg';
import data from '../../../classData';

console.log(data);

function RenderDashboardPage(props){
    const {user} = props;
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
                <img src={developerLogo} className="developer-logo" alt="girl-developer-logo" />
                <h1>Intro to Python Dashboard</h1>
    
                <Link className='home' to='/'>Log Out</Link>
            </div>
            <div className='module-container'>
                {
                    moduleData.map(module => (
                        <div key={module.title} className='module'>
                            <h3>{module.title}</h3>
                            {
                                module.lessonUrl !== null ?
                                (<>
                                <div className='activities'>
                                <button  className='dashboard' onClick={()=>{handleLessonSelection(module.id)}}>Lesson</button>
                                <button  className='dashboard' onClick={() => {handleChallengeSelection(module.id)}}>Challenge</button>
                                    {/* <a href={`${module.lessonUrl}`} target='_blank'>Lesson</a>
                                    <a href={`${module.challengeUrl}`} target='_blank'>Challenge</a> */}
                                </div>
                                </>) :
                                (<>
                                    <button disabled={!module.enabled} className='dashboard' onClick={() => {handleProjectSelection(module.id)}}>Project</button>
                                    {/* <a href={`${module.projectUrl}`} target='_blank'>Project {module.projectNumber}</a> */}
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