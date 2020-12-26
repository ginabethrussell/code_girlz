import React from 'react';
import { Link } from 'react-router-dom';

export default function MadLibs (){

    return (
        <div>
            <h1>Mad Libs Project 1</h1>
            <h2>Overview</h2>
            <a href='https://www.loom.com/share/7fedd457c88340aa9f32d1facf90e773'>&#x1f4f9; Create a MAD LIBS Game with Python Video Overview</a>
            <p>In this project you will get user input to complete and print a Mad Libs Story for your user.</p>

            <h5>To complete this project, you should have completed the modules: Intro to Python and Repl.it, Variables and Data Types, and User Input 
                Or have previous coding experience in these topics.</h5>

            <h4>I can…</h4>
            <ul>
                <li>create a program in repl.it</li>
                <li>create a comment</li>
                <li>use the print command</li>
                <li>create variables following naming rules and conventions</li>
                <li>list and use three data types: strings, ints, and floats</li>
                <li>receive, store, and print user input</li>
                <li>use the input method with a prompt</li>
                <li>print statements that include user input, text, and variables of data types str, int, and float</li>
            </ul>
 
            <h4>Resources:</h4>
            <a href='https://repl.it/@gbr4477/madlibsstorystarter'><code>mad_libs_story_starter</code></a>

            <h2>Project Criteria</h2>

            <h3>Step 1 - Read through the project criteria</h3>
            <ul>
                <li> Read through all the directions for this project before you start</li>
            </ul>
            <h3>Step 2 - Fork a repl.it program </h3>
            <ul>
                <li>Open the link to the mad_libs repl.it in the sources above </li>
                <li>Fork the program to create your own copy</li>
            </ul>
            <h3>Step 3 - Identify variables needed</h3>
            <ul>
                <li>Read the story to find the variables you need to create</li>
                <li>Create the variables at the top of your program</li>
            </ul>
            <h3>Step 4 - Get user input</h3>
            <ul>
                <li>Use the input method  and prompt to get data from your user</li>
                <li>Add an input method with a prompt to receive a value for each variable</li>
            </ul>
            <h3>Step 5 - Store user input</h3>
            <ul>
                <li>Store your user input in variables</li>
                <li>Use the pattern <code>variable = input(“prompt”)</code></li>
            </ul>
            <h3>Step 6 - Print the story</h3>
            <ul>
                <li>Create print statements around your text to include variables</li>
                <li>Make sure to use extra spaces before and after variables when using the + operator to combine strings</li>
            </ul>
            <h3>Step 7 - Debug and fix errors</h3>
            <ul>
                <li>Run your program and fix any errors</li>
                <li>If you are having trouble finding your error, you can add a # to the beginning of lines one by one to find the line with the bug</li>
                <li>The # character creates a comment but can comment out any line of code you don’t want Python to run</li>
            </ul>
            <h3>Step 8 - Add comments</h3>
            <ul>
                <li>Add a comment at the top of your program to explain it</li>
                <li>Optional: add additional comments to separate sections of your code</li>
                <li>Good comments help other programmers, including you at a later time, understand your code. </li>
            </ul>
            <h3>Bonus - Add a title and directions</h3>
            <ul>
                <li>Add introductory statements to explain the program to your user before your input statement</li>
            </ul>
            <h3>Bonus+ -  Add an ASCII image</h3>
            <ul>
                <li>Use print statements to include an ASCII image that fits your story’s theme</li>
            </ul>

            <p>When you finish your game, show off your project to a friend</p>
            <p>Happy Coding!</p> 
            <Link to='/dashboard/lesson4'>Next Up: Lesson 4 - Decisions &amp; Conditionals</Link>
    </div>
    );
}
