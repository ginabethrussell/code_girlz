import React from 'react';
import RenderProjectPage from './RenderProjectPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function ProjectPageContainer(props) {
    const {loginUser} = props;
    return (
        <>
            <Header />
            <RenderProjectPage loginUser={loginUser}/>
            <Footer />
        </>
    );
}

export default ProjectPageContainer;