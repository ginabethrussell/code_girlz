import React from 'react';
import RenderHomePage from './RenderHomePage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function HomePageContainer(props) {
    const {loginUser} = props;
    return (
        <>
            <Header />
            <RenderHomePage loginUser={loginUser}/>
            <Footer />
        </>
    );
}

export default HomePageContainer;