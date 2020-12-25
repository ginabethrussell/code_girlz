import React from 'react';
import RenderHomePage from './RenderHomePage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function HomePageContainer() {
    
    return (
        <>
            <Header />
            <RenderHomePage />
            <Footer />
        </>
    );
}

export default HomePageContainer;