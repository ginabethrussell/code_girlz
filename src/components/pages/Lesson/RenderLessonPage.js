import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams, useHistory } from 'react-router-dom';
import lesson1 from '../../../markdown/lesson1.md';
import ProjectSubmissionUrl from '../../common/ProjectUrlSubmission';
import './LessonPage.css';

function RenderLessonPage(props){
    const {loginUser} = props;
    const [lesson, setLesson] = useState('');
    const params = useParams();
    console.log(params);
    console.log(lesson1);
    const history = useHistory();

    useEffect(()=>{
        const lesson = `lesson${params.id}`;
        console.log(lesson);
        fetch(lesson1).then((response) => response.text()).then((text) => {
            setLesson(text)
          })
    },[])
   
    return (
        <div className="lesson">
            <Link to='/dashboard'>Return to Dashboard</Link>
            <ReactMarkdown source={lesson} /> 
            <ProjectSubmissionUrl />
        </div>
      );
}

export default RenderLessonPage;