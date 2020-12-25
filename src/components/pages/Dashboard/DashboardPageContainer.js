import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function DashboardPageContainer() {
   
    return (
        <>
            <Header />
            <RenderDashboardPage />
            <Footer />
        </>
    );
}

export default DashboardPageContainer;