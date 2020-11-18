import React, { useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import './DashboardPage.css';
import wizard from '../../../wizard.png';
import data from '../../../classData';
console.log(data);

function RenderDashboardPage(props){
    const {user} = props;
    const [moduleData, setModuleData] = useState(data);
    const history = useHistory();
    const match = useRouteMatch(); 

    const handleSelection= (e)=> {
        e.preventDefault();
        history.push(`${match.url}/lesson1`);

    }
    return (
        <div className='dashboard-wrapper'>
            <div className='header'>
                <img src={wizard} className="wizard-logo" alt="logo" />
                <h1>Level 2 Intro to Python</h1>
                <Link className='home' to='/'>Home</Link>
            </div>
            <div className='student-resources'>
                <h3>Student Resources</h3>
                <a href='https://repl.it/' target='_blank'>Repl.it</a>
                <a href='https://docs.python.org/3/' target='_blank'>Python Docs</a>
                <a href='https://www.w3schools.com/python/default.asp' target='_blank'>W3Schools</a>
            </div>
            <div className='module-container'>
                {
                    moduleData.map(module => (
                        <div key={module.lessonUrl} className='module'>
                            <h3>{module.title}</h3>
                            {
                                module.lessonUrl !== null ?
                                (<>
                                <div className='activities'>
                                <button onClick={handleSelection}>Lesson</button>
                                    <a href={`${module.lessonUrl}`} target='_blank'>Lesson</a>
                                    <a href={`${module.challengeUrl}`} target='_blank'>Challenge</a>
                                </div>
                                </>) :
                                (<>
                                    <a href={`${module.projectUrl}`} target='_blank'>Project {module.projectNumber}</a>
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