import React from 'react';
import RenderLessonPage from './RenderLessonPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function LessonPageContainer(props) {
    const {loginUser} = props;
    return (
        <>
            <Header />
            <RenderLessonPage loginUser={loginUser}/>
            <Footer />
        </>
    );
}

export default LessonPageContainer;