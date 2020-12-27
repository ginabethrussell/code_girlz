import React from 'react';
import { Link } from 'react-router-dom';

export default function Lesson2 (){

    return (
        <div>
            <h1>Variables and Data Types</h1>
            <h2>Summary</h2>
            <a href='#'>&#x1f4f9; Watch the intro video</a>
            <h3>What am I learning about today?</h3>
            <ul>
                <li>What is a variable?</li>
                <li>How do I create and use variables?</li>
                <li>What types of data can I use in Python?</li>
                <li>How do I include variables in my print statements?</li>   
            </ul>  
           <h3>When I complete this lesson: </h3>
            <h4>I can:</h4>
            <ul>
                <li>explain a variable</li>
                <li>create and use variables</li>
                <li>list types of data in Python</li>
                <li>print using text and variables</li>
            </ul>
            <h3>Materials You Will Need</h3>
            <ul>
                <li>&#x1f4bb; Your Laptop/Computer</li>
                <li>Chrome Browser</li>
                <li>A curious mind and a little persistence!</li>
            </ul>
            <h2>Let’s Get Started</h2>
            <h3>What is a Variable?</h3>
            <p>In our first programs in Lesson 1, we used Python comments and the print command to print information about ourselves and a friend to the screen. Information, or data, is what most computer programs are all about. Computers receive data as input, process that data in some way, and return the data as output.</p>
            <p>Computers often need to store data to use later. We can do this by creating a variable.  We can think of a variable as a container in our computer’s memory that will allow us to store data to use, modify, and reuse later.</p>
            <p>A variable has three parts: </p>
            <ol>
                <li>a name</li>
                <li>an = sign, called an assignment operator</li>
                <li>and a value</li>
            </ol>
            <p>To create a variable we choose a name, follow it with an equal sign, and then the value we want the computer to store.</p>
            <code>my_name = “Gina Beth”</code>
            <p>In Python it’s important to remember that the = sign doesn’t mean “equal” the way you are used to using it in math. Python uses a double ==  to compare values to see if they are the same. One equal = sign is the assignment operator and is used to assign the value on the right of the equal sign into the variable name on the left. Python stores the value “Gina Beth” in a container in memory with the label my_name. When I want to use the value in my program, I can just give Python the name of my variable. To print “Gina Beth”, I would use the command:
            </p>
            <code>print(my_name)</code>
            <h4>A note about variable names:</h4>
            <p>You can name your variables almost anything. Python only has a few rules and a few suggestions to help us out.</p>
            <h4>Rules for Variable Names:</h4>
            <ol>
                <li>Variable names may only contain letters, numbers, and the _ underscore character</li>
                <li>Variable names may not begin with a number</li>
                <li>Variable names may not use Python keywords (special words reserved in Python that have special meaning, like print)</li>
                <li>Variable names may not have spaces </li>
            </ol>
            <h4>Some Python Conventions (or How Python Programmers Create Variables)</h4>
            <ol>
                <li>Use only lowercase letters</li>
                <li>Use &#x1f40d; snake_case, adding an _ underscore character between words to make names with multiple words more readable</li>
                <li>Use short, but descriptive names (usually not single letters)</li>
            </ol>
           <a href='#'>&#x1f4f9; Watch this video for review &amp; Intro to Stop and Do</a>
            <h3>&#x1f4bb; Stop and Do:</h3>
            <p>Let’s stop and practice creating and using variables. Complete the following tasks before moving on.</p>
            <ul>
                <li>Create a new repl.it program</li>
                <li>Name the program variables_practice</li>
                <li>Add a comment at the top of your program to explain a variable
                    <code># A variable is … (finish this statement)</code>
                </li>
                <li>Create a variable for each of the following:
                    <ul>
                        <li>your name</li>
                        <li>your age</li>
                        <li>your location</li>
                        <li>your favorite food</li>
                        <li>your favorite number</li>
                        <li>your best friend</li>
                    </ul>
                    <p>Choose descriptive names.</p>
                    <p>Use snake_case and lowercase letters.</p>
                    <p>Do not start your variable names with numbers.</p>
                    <p>Do not use characters other than numbers, letters, and underscores _.</p>
                </li>
                <li>Add print statements to print each of your variables.
                    <p>Use parentheses around your variable name inside the print command. </p>
                    <code>print (my_variable_goes_here)</code>
                    <p>Do not use quotes around variable names</p>
                    <p>Make sure you create your variable before you try to print it.</p>
                </li>  
            </ul>
            <h3>Variables and Data Types</h3>
            <p>Information or data in our programs may be many different types. We have worked with a few in our programs already.</p>
            <p>Sequences of characters, text, numbers, special characters, and even spaces within quotation marks are known as strings. Strings are a basic data type in Python.</p>
            <code>
                my_string = “I love Python.”
                another_string = “Coding Club is Awesome!”
            </code>
            <p>To create a string, we just need to enclose our text or characters inside quotation marks. You may use single or double quotation marks, just make sure the starting and ending quotes match.</p>
            <p>A second type of data we can use in our programs is a number. We created a variable to hold our age. Our age is a type of number known as an int, short for integer. Integers are positive or negative numbers and zero. You can think of an int as any number that doesn’t have a decimal point.</p>
            <code>
                my_age = 50
                colton_age = 0
                temp_in_alaska = -40
            </code> 
            <p>Another type of number data is a float. A float is a number that has a decimal point.</p> 
            <code>
                my_temp = 98.6
                length_in_cm = 2.0
                temp_in_antarctica = -60.5
            </code>
            <p>Python has special operations or methods it can use with each of these data types that we will learn more about later. If you would like to see the type of value that Python is storing in a variable, you can use Python’s type method. A method in Python is a function that is part of Python’s built-in toolbox.</p>
            <p>You can use this method with a print statement to check a variable’s type.</p>
            <code>print(type(my_string))</code>
            <p>Python will return the type of the variable.</p>
            <code>&lt; class 'str' &gt;</code>
            <p>This can look a little cryptic, but if you check out the text between the quotes, you will find str, short for string.</p>
            <a href='#'>&#x1f4f9; Watch this video for review &amp; Intro to Stop and Do</a>
            <h3>&#x1f4bb; Stop and Do:</h3>
            <p>Let’s stop and practice creating variables of type string, int, and float. Complete the following tasks before moving on.</p>
            <ul>
                <li>Create a new repl.it program</li>
                <li>Name the program data_types</li>
                <li>Add a comment at the top of your program to finish the statement.
                    <code># Three types of data in Python are ...</code>
                </li>
                <li>Create two variables of each type. (Hint: str, int, and float)</li>
                <li>Print each variable using the print command</li>
                <li>Print the type of each variable using the type( ) method to check your work</li>
            </ul>
            <h3>Using Variables in Print Statements</h3>
            <p>Now that we can create and print variables. Let’s work them back into our print statements by combining them with text or other variables.</p>
            <p>To include our variables in our print statements, we will often use the + operator. With ints and floats, the + operator is used to add,  but when we use the + operator with strings and variables, it means something different.</p>
            <p>Using a + operator to combine strings and variables is called concatenation. In our print statement, we can use it like this:</p>
            <code>print (“Gina Beth says “ + my_string)</code>
            <p>Python will run this code and print out</p>
            <code>Gina Beth says I love Python.</code>
            <p>The + operator allows Python to concatenate the string and our variable into a single statement. Notice the empty space before the closing quotation marks after the word says. This is important because Python only does exactly what we tell it. The + operator means “take these things and squish them together.” It won’t leave the extra space between words unless we include it.</p>
            <p>The + operator is also a little picky. If you try to combine an int or a float with text or a string variable in a print statement, Python will give you an error. To fix this, Python has another handy method called str( ). This method can wrap around your int or float variable so that it will be treated just like string characters when it’s added to your text.</p>
            <code>print(“Gina Beth is “ + str(my_age) + “ years old.”)</code>
            <p>A second way we can create print statements to include variables is to use a comma between items. This will create a space between the comma-separated items. Using str( ) isn’t necessary around ints or floats when using a comma between items in a print statement.</p>
            <code>print (“Gina Beth says“, my_string)</code>
            <p>Python has more tricks up its sleeve when it comes to printing, but more about that later.</p>
            <h4>A note about possible errors to watch for:</h4>
            <p>As you are working on your tasks for this lesson, Python may give you red error messages in repl.it. Remember this has nothing to do with your ability or intelligence. Python is just lost and can’t figure out what to do next.</p>
            <p>Some common errors to check:</p>
            <ol>
                <li>Make sure you are spelling your variables the same way when you create and use them. There is no such thing in Python as close enough.</li>
                <li>Make sure you are using the same capitalization. Python is case-sensitive which means a variable my_name is completely different from a variable My_name</li>
                <li>Make sure you create your variable in your program BEFORE you try and use it. Python reads your statements from the top down. If it hasn’t seen your variable created yet, it won’t allow you to use it.</li>
                <li>Check for opening and closing parentheses when using the type method and print statements. There has to be one closing parenthesis for every opening parenthesis.</li>
                <li>Check for opening and closing quotation marks when using strings.</li>
            </ol>
            <a href='#'>&#x1f4f9; Watch this video for review &amp; Intro to Stop and Do</a>
            <h3>&#x1f4bb; Stop and Do:</h3>
            <p>Let’s stop and practice printing text,  strings, ints, floats, and variables using concatenation +  or commas. Complete the following tasks before moving on.</p>
            <ul>
                <li>Open your repl.it variables_practice program</li>
                <li>Fork your repl.it and rename the new copy print_variables</li>
                <li>Use your variable to create 5 print statements</li>
                <li>Use concatenation + or a comma between two variables in your statements</li>
                <li>Include extra spaces inside your quotation marks so your printed statements aren’t squished</li>
            </ul>
            <p>&#x1f913; Tip: you can use print( ) without anything inside the parentheses to print a blank line to create some extra space between your print statements.</p>
            <h3>Congratulations! You did it.</h3>
            <p>You finished Python Variables and Data Types Lesson 2.</p>
            <p> Take a well earned break and then practice your new Python skills in Challenge 2 </p>
            <p>See you soon. Happy Coding!</p>

            <Link to='/dashboard/challenge2'>Next Up: Lesson 2 Challenge</Link>
    </div>
    );
}
