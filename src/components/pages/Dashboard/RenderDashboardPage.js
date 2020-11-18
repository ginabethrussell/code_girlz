import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';
import wizard from '../../../wizard.png';


function RenderDashboardPage(props){
    const {user} = props;
    return (
        <div className='dashboard-wrapper'>
            <div className='header'>
                <img src={wizard} className="wizard-logo" alt="logo" />
                <h1>Level 2 Intro to Python</h1>
                <Link className='home' to='/'>Home</Link>
            </div>
            <div className='module-container'>
                <div className='module'>
                    <h3>1. Intro to Python and Repl.it</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>2. Variables and Data Types</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>3. User Input</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>Mad Libs</h3>
                    <a href="">Project 1</a>
                </div>
                <div className='module'>
                    <h3>4. Booleans and Conditionals</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>5. Chained and Nested Conditionals</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>6. While Loops, Modules, and Random</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>Rocket Launch</h3>
                    <a href="">Project 2</a>
                </div>
                <div className='module'>
                    <h3>7. Lists</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>8. For Loops</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>1D Battleship</h3>
                    <a href="">Project 3</a>
                </div>
                <div className='module'>
                    <h3>9. Functions</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>10. Functions with Arguments and Return Statements</h3>
                    <div className='activities'>
                        <a href="">Lesson</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
                <div className='module'>
                    <h3>The Camel Race Game</h3>
                    <a href="">Project 4</a>
                </div>
                <div className='module'>
                    <h3>Capstone Project</h3>
                    <a href="">Project 5</a>
                </div>
            </div>
        </div>
    );
}

export default RenderDashboardPage;