import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import './DashboardPage.css';
import wizard from '../../../wizard.png';
import data from '../../../classData';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
console.log(data);

function RenderDashboardPage(props){
    const {user} = props;
    const [moduleData, setModuleData] = useState(data);
    const [isDisabled, setIsDisabled] = useState(true);
    const [unlockCode, setunlockCode] = useState('');
    
    const history = useHistory();
    const match = useRouteMatch(); 
    const handleUnlock = (e) => {
        setunlockCode(e.target.value);
        if(e.target.value === '123'){
            setIsDisabled(false);
        }
    }
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
                <img src={wizard} className="wizard-logo" alt="logo" />
                <h1>Intro to Python - {user.username}'s Dashboard</h1>
    
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
                                <button disabled={!module.enabled} className='dashboard' onClick={()=>{handleLessonSelection(module.id)}}><span className='lock-icon'><LockOutlinedIcon/></span>Lesson</button>
                                <button disabled={!module.enabled} className='dashboard' onClick={() => {handleChallengeSelection(module.id)}}><span className='lock-icon'><LockOutlinedIcon/></span>Challenge</button>
                                    {/* <a href={`${module.lessonUrl}`} target='_blank'>Lesson</a>
                                    <a href={`${module.challengeUrl}`} target='_blank'>Challenge</a> */}
                                </div>
                                </>) :
                                (<>
                                    <button disabled={!module.enabled} className='dashboard' onClick={() => {handleProjectSelection(module.id)}}><span className='lock-icon'><LockOutlinedIcon/></span><span>Project</span></button>
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