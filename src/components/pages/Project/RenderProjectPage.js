import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams, useHistory } from 'react-router-dom';
import madlibs from '../../../markdown/madlibs.md';
import ProjectSubmissionUrl from '../../common/ProjectUrlSubmission';
import './ProjectPage.css';

function RenderProjectPage(props){
    const {loginUser} = props;
    const [project, setProject] = useState('');
    const params = useParams();
    console.log(params);
    const history = useHistory();

    useEffect(()=>{
        const project = `project${params.id}`;
        console.log(project);
        fetch(madlibs).then((response) => response.text()).then((text) => {
            setProject(text)
          })
    },[])
   
    return (
        <div className="project">
            <Link to='/dashboard'>Return to Dashboard</Link>
            <ReactMarkdown source={project} /> 
            <ProjectSubmissionUrl />
        </div>
      );
}

export default RenderProjectPage;