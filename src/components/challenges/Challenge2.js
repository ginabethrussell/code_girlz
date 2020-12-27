import React from 'react';
import { Link } from 'react-router-dom';

export default function Challenge2 (){

    return (
        <div>
            <h1>Variables and Data Types Challenge</h1>
            <h2>Before you start</h2>
            <a href='#'>&#x1f4f9; Watch the intro video</a>
            <h3>You should have completed Lesson 2 Variables and Data Types or have previous knowledge of the following.</h3>
            <ul>
                <li>I can explain a variable</li>
                <li>I can create variables following Python naming rules and conventions</li>
                <li>I can list and explain three Python data types (str, int, and float)</li>
                <li>I can use the type( ) method to find the type of a variable</li>
                <li>I can combine variables, strings, ints, and floats in print statements, using the + operator, commas, and the str( ) method when needed</li>
            </ul>
            <h2>Challenge</h2>

            <h3>Create a Variable Story</h3>
            <ol>
                <li>Open the repl.it <a href='https://repl.it/@gbr4477/avariablestorystarter'> a_variable_story_starter </a>and fork a copy of your own</li>
                <li>Rename the copy my_variable_story</li>
                <li>Read through the text to decide the information you need to complete the story.</li>
                <li>Create variables to fill in the missing information.</li>
                <li>Modify the print statements to include your new variables.</li>
                <li>Run and Debug your program to complete your story.</li>
                <li>Add a comment at the top explaining your program.</li>
            </ol>
            
            <h3>Debug a Python program</h3>
            <ol>
                <li>Open the repl.it program link <a href='https://repl.it/@gbr4477/debugmeprintingvariables'>debug_me_printing_variables</a></li>
                <li>Fork the program to make your own copy</li>
                <li>Read through the code carefully to see if you can find and fix 5 errors before you hit the Run button</li>
                <li>Run the program and use the repl.it red error messages to help you find any errors you missed</li>
                <li>Make sure the final program runs correctly</li>
            </ol>
            <h3>Bonus Challenge:  Another Variable Story or …</h3>
            <p>Choose an idea from below.</p>
            <ol>
                <li>Fork your own story from above. Rename the new copy. Change your variable values and create a completely different tale.</li>
                <li>Compose your own story starter and create variables to make a variable story.</li>
                <li>Use the lyrics to a favorite poem or song and replace the repeated words and phrases with variables to hold the repeated values.</li>
                <li>Modify our Old MacDonald Song with new variables to create new verses.
                    <a href='https://repl.it/@gbr4477/less2oldmcdonaldvariables'> old_macdonald_song_variables</a>
                </li>
            </ol>
            <p>Happy Coding!</p>
        
            <Link to='/dashboard/lesson3'>Next Up: Lesson 3 Python - User Input</Link>
    
        </div>
    );
}
