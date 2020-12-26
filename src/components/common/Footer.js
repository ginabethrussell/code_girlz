import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div className="footer-wrapper">
            <p>Have a comment, question, or suggestion?</p>
            <a className='email-link' href='mailto:gina.codegirlz@gmail.com'>Email me at gina.codegirlz@gmail.com</a>
            <p>&copy; 2020 Code Girlz</p>
           
            {/* <div>Icons made by <a href="https://www.flaticon.com/free-icon/developer_1508880?related_item_id=1508880&term=girl%20computer" title="mynamepong">mynamepong</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    );
}

export default Footer;