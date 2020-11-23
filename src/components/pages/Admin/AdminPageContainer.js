import React from 'react';
import RenderAdminPage from './RenderAdminPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function AdminPageContainer(props) {
    const {admin} = props;
    return (
        <>
            <Header />
            <RenderAdminPage admin={admin}/>
            <Footer />
        </>
    );
}

export default AdminPageContainer;