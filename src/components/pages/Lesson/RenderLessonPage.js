import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import less1 from '../../../markdown/lesson1.md';

function RenderLessonPage(props){
    const {loginUser} = props;
    const [lesson, setLesson] = useState('');

    useEffect(()=>{
        fetch(less1).then((response) => response.text()).then((text) => {
            setLesson(text)
          })

    },[])
   
    return (
        <div className="App">
          <ReactMarkdown source={lesson} />
        </div>
      );
}

export default RenderLessonPage;