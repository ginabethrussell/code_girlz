import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Lessons from "../../lessons/lessons";
import './LessonPage.css';

function RenderLessonPage(props){
    const params = useParams();
    const nextlesson = `lesson${params.id}`
   
    return (
        <div className="lesson">
            <Link to='/dashboard'>Return to Dashboard</Link>
             {Lessons({component: nextlesson})}
        </div>
      );
}

export default RenderLessonPage;