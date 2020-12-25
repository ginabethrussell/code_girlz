import React from 'react';
import RenderProjectPage from './RenderProjectPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function ProjectPageContainer(props) {

    return (
        <>
            <Header />
            <RenderProjectPage />
            <Footer />
        </>
    );
}

export default ProjectPageContainer;