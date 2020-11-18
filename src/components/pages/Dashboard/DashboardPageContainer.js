import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function DashboardPageContainer(props) {
    const {user} = props;
    return (
        <>
            <Header />
            <RenderDashboardPage user={user}/>
            <Footer />
        </>
    );
}

export default DashboardPageContainer;