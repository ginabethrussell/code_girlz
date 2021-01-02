import React, { useLayoutEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import Lessons from "../../lessons/lessons";
import './LessonPage.css';

function RenderLessonPage(){
    const params = useParams();
    const nextlesson = `lesson${params.id}`

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
   
    return (
        <div className="lesson">
            <Link to='/dashboard'>Return to Dashboard</Link>
             {Lessons({component: nextlesson})}
        </div>
      );
}

export default RenderLessonPage;