import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Projects from '../../projects/projects';
import './ProjectPage.css';

function RenderProjectPage(){
    const params = useParams();
    const nextproject = `project${params.id}`;
   
    return (
        <div className="project">
            <Link to='/dashboard'>Return to Dashboard</Link>
             {Projects({component: nextproject})}
        </div>
      );
}

export default RenderProjectPage;
