import React from 'react';
import RenderChallengePage from './RenderChallengePage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function ChallengePageContainer() {
   
    return (
        <>
            <Header />
            <RenderChallengePage />
            <Footer />
        </>
    );
}

export default ChallengePageContainer;