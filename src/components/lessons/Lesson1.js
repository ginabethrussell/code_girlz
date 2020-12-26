import React from 'react';
import { Link } from 'react-router-dom';

export default function Lesson1 (){

    return (
        <div>
            <h1>Intro to Python and Repl.it</h1>
            <h2>Summary</h2>
            <a href='https://www.loom.com/share/f0a11e2610664b729620c4ab23aeec1d'>Watch the intro video</a>
            <h3>What am I learning about today?</h3>
            <ul>
                <li>What is Python?</li>
                <li>What is Repl.it and how do I use it to write code?</li>
                <li>How do I print to the screen?</li>
                <li>How do I leave comments for myself or other programmers?</li>   
            </ul>  
           <h3>When I complete this lesson: </h3>
            <h4>I can:</h4>
            <ul>
                <li>log into repl.it and create a Python program</li>
                <li>use the Python print command</li>
                <li>write a comment in my code</li>
            </ul>
            <h3>Materials You Will Need</h3>
            <ul>
                <li>Your Laptop/Computer</li>
                <li>Chrome Browser</li>
                <li>A curious mind and a little persistence!</li>
            </ul>
            <h2>Let’s Get Started</h2>
            <h3>What is Python</h3>
            <p>Python is an extremely popular programming language used by many popular websites including Google, YouTube, Netflix, and Instagram.</p>
            <p>If you have created programs and games with blocks using Scratch, Python makes a great first text-based language. The syntax (the rules for how we write programs) and the keywords (the special words Python understands) are great for beginners.</p>
            <h3>An Intro to Repl.it</h3>
            <p>Text-based programs can be written using many tools. If you have programmed in Scratch, you have used the Scratch website to write and save your programs. </p>
            <p>To write Python, we need to use a tool that will be able to understand and run our code. Repl.it has a Python compiler/interpreter built-in so it’s a great place for us to start. </p>
            <p>Using Repl.it is free. Let’s set up your account together.</p>   
            <a href='https://www.loom.com/share/072364d175fe47ffa2aac655fd28aa88'>Set Up Your Repl.it Account</a>
            <h3>Writing Your First Program</h3>
            <p>Now that you have an account, let’s write our first program. A common tradition is to write a “Hello World” program whenever a programmer uses a new platform or learns a new language. </p>
            <p>Let’s do that together.</p>
            <a href='https://www.loom.com/share/ec95e0156de24779a2b16a49fdb54ac3'>Code Along - Hello World</a>
            <h3>The print Command and Comments</h3>
            <h4>print</h4>
            <p>Python has several built-in commands created for us that make it easy to get started writing programs. The first one we used in the hello_world program is print. Print does just what we might expect. It prints whatever we place inside the parentheses just after the command.</p>
            <p>In our repl.it program we typed:</p>
            <code>
                print ("Hello World")
            </code>
            <p>When we ran the code, Hello World printed in our console.</p>
            <h4>A couple of things to remember: </h4>
            <ul>
                <li>print always needs to be followed by parentheses. If you leave them off, the command won’t work. </li>
                <li>The command print is also written in all lowercase letters. </li>
                <li>Words and sentences (we call those **strings **in programming) that we place inside the parentheses also need to be inside “ “ quotation marks.</li>
            </ul>
            <h3>Stop and Do:</h3>
            <p>Before we learn our next command, let’s stop and practice. Complete the following tasks before moving on.</p>
            <ul>
                <li>Open your repl.it hello_world program</li>
                <li>Remove the parentheses and run the program to see what happens</li>
                <li>Now add back the parentheses, and capitalize the P in print</li>
                <li>Change the P back to lowercase p and remove the quotation marks</li>
                <li>Last, change the “Hello World” text to a new greeting message</li>  
            </ul>
            <h3>A note about all those red text messages in repl.it window:</h3>
            <p>If you completed the tasks above, repl.it displayed error messages to you in red text. I wanted to introduce you to these right away. Everyone, that’s right EVERYONE who learns to program, makes mistakes and gets error messages when running code. </p>
            <p>Don’t let this frustrate you or make you feel like you can’t learn. It’s just part of the process. Your computer needs exact directions; it can’t figure out what you meant. When you see an error message, just think of it as the computer’s way of saying, “I’m lost and don’t know what to do next.”</p>
            <p>Some of the error messages in repl.it will help you fix your code. When you left off the parentheses, repl.it made the suggestion to include them. Other times they are trickier to figure out. Check for spelling, capitalization, and the correct use of punctuation like parentheses and quotation marks.</p> 
            <h3>comments</h3>
            <p>Adding comments is important in programming. A good comment explaining why you wrote a section of code in your program will help another programmer be able to read and understand your code.</p>
            <p>Write good comments because the “other developer” reading your code may just be you when looking back on earlier programs you’ve written.</p>
            <p>Comments in Python begin with a hashtag #, also called a pound sign, or an octothorpe. This symbol signals to the interpreter that it can ignore the line in your program.</p>
            <code>
                # This is a Python Comment
            </code>
            <h3>Stop and Do:</h3>
            <h4>Complete the following tasks before moving on.</h4>
            <ul>
                <li>Open your repl.it hello_world program</li>
                <li>Add a comment that begins with the # symbol to the top of your program</li>
                <li>Run the program to make sure it still works</li>
            </ul>
             <h3>Congratulations! You did it.</h3>
            <p>You finished Intro to Python Lesson 1.</p>
            <p> Take a well earned break and then practice your new Python skills in Challenge 1 </p>
            <p>See you soon. Happy Coding!</p>

            <Link to='/dashboard/challenge1'>Next Up: Lesson 1 Challenges</Link>
    </div>
    );
}
