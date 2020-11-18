import React from 'react';
import RenderChallengePage from './RenderChallengePage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function ChallengePageContainer(props) {
    const {loginUser} = props;
    return (
        <>
            <Header />
            <RenderChallengePage loginUser={loginUser}/>
            <Footer />
        </>
    );
}

export default ChallengePageContainer;