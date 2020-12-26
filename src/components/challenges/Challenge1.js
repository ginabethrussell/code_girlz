import React from 'react';
import { Link } from 'react-router-dom';

export default function Challenge1 (){

    return (
        <div>
            <h1> Intro to Python and Repl.it Challenge</h1>
            <h2>Summary</h2>
            <a href='https://www.loom.com/share/1ca0a01bcc48451c8eb0425a850d6194'>&#x1f4f9; Watch the intro video</a>
            <h3>You should have completed the Intro to Python and Repl.it Lesson or have previous knowledge of the following.</h3>
            <ul>
                <li>I have an account on repl.it</li>
                <li>I can log into my repl.it account and create a new Python program</li>
                <li>I can use the Python <code>print</code> command</li>
                <li>I can add a comment to my Python program</li>
            </ul>
            <h2>Challenge</h2>

            <h3>Create a Python program</h3>
            <ol>
                <li>Log into repl.it and create a new Python program</li>
                <li>Name the program about_me</li>
                <li>Create 5 print statements in the program about you
                    <ul>
                        <li>Your name</li>
                        <li>Your age</li>
                        <li>Your favorite food</li>
                        <li>Your favorite book or movie</li>
                        <li>Your pet (if you have one)</li>
                    </ul>
                </li>
                <li>Add a comment to the program above your statements to explain your program</li>
                <li>Add another comment below your print commands with the name of a friend</li>
                <li>Create a second set of print statements about your friend</li>
                <li>Run your program and fix any errors</li>
            </ol>
            <p>Remember to check for <code>print</code> to start with a lowercase letter and be spelled correctly, for the text to print to be inside “ “ quotation marks and inside ( ) parentheses after the keyword print</p>
            <p>Remember to start your comments with <code>#</code></p>

            <h3>Debug a Python program</h3>
            <ol>
                <li>Open the repl.it program link <a href='https://repl.it/@gbr4477/less1debugme'><code>less1_debug_me</code></a></li>
                <li>Fork the program to make your own copy</li>
                <li>Read through the code carefully to see if you can find and fix 5 errors before you hit the Run button</li>
                <li>Run the program and use the repl.it red error messages to help you find any errors you missed</li>
                <li>Make sure the final program runs correctly</li>
            </ol>
            <h3>Bonus Challenge: ASCII Art</h3>
            <p>ASCII Art is art you can create using the characters from your computer keyboard (ASCII stands for American Standard Code for Information Interchange. If you are interested, you can read more about it <a href='https://kids.kiddle.co/ASCII'>here</a>.</p>
            <p>These images can be simple, like a heart &lt;3, or be much more complex.</p> 
            <p>Take a look at some of these examples.</p>
            <ul>
                <li><a href='https://i.ytimg.com/vi/YTiIje8EZF0/maxresdefault.jpg'>ascii art</a></li>
                <li><a href='https://i.pinimg.com/236x/41/9a/b2/419ab2116c5c218a3fb6adaf3e8e8400--ascii-art-keyboard.jpg'>ascii art</a></li>
            </ul>
            <ol>
                <li>Design or select an ASCII Art image. Check out this <a href='http://www.heartnsoul.com/ascii_art/ascii_animals_indx.htm'>ASCII Animal Art Index</a> for inspiration.</li>
                <li>Create a new Python program in repl.it and name it ascii_art</li>
                <li>Use print commands and characters from your keyboard to create your picture</li>
                <li>Remember spaces are characters you can add to your print commands.</li>
            </ol>
            <p>If your artwork includes “ “, you can use ‘ ‘ inside your parentheses so Python doesn’t get confused.  <code>print ( ‘ (“) (“) ‘ )</code></p>
            <p>Check out this <a href='https://repl.it/@gbr4477/asciiart'>sample</a></p>
            <p>Happy Coding!</p>
        
            <Link to='/dashboard/lesson2'>Next Up: Lesson 2 Python - Variables and Data Types</Link>
    
        </div>
    );
}
