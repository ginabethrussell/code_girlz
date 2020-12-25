import React from 'react';
import RenderLessonPage from './RenderLessonPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function LessonPageContainer(props) {
    const {lessonId} = props;
    return (
        <>
            <Header />
            <RenderLessonPage lessonId={lessonId} />
            <Footer />
        </>
    );
}

export default LessonPageContainer;