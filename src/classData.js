const classData = [
{
    id: '1',
    title: '1. Intro to Python and Repl.it',
    description: 'Welcome to Intro to Python. In this first lesson we will learn about why we should learn Python, how we can use Repl.it to write our code, how to print to the screen, and how to leave comments for ourselves and other developers.',
    lessonUrl: 'https://docs.google.com/document/d/1U8_I7Y8wZjNpNrWTnQ4cxwuZvX-Dep_TVqt13q24jkI/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1jqUMJOVLQgDsSsURhBAA1kbRBXXm-3D1FRrfIJxUsPk/edit?usp=sharing',
    projectUrl: null,
},
{
    id: '2',
    title: '2. Variables and Data Types',
    description: 'Computer programs are all about data. Some type of input is passed into a program, the program acts on it in some way, and then some new output is passed back to the user. In this lesson we will learn about types of data we can work with in Python and how we can store this data in variables.',
    lessonUrl: 'https://docs.google.com/document/d/18PSq_RQuBNw-tq0qskXB1emhEvRBlRFE9ju9MXPCIfY/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/11k6r0BUJGiPIt8aKmEZZRm_dHlurqVC7OM0DdbIy2VM/edit?usp=sharing',
    projectUrl: null,
},
{
    id: '3',
    title: '3. User Input',
    description: '',
    lessonUrl: 'https://docs.google.com/document/d/1_DimHDhbzIp-ToCw-uRMrBknZQLPMNrKnvvCLAxfxIY/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1EG-N3QEWFAOl47phKUBo-xL3ZayWav-o8zvAM7OBfAo/edit?usp=sharing',
    projectUrl: null,
},
{
    id: 'madlibs',
    title: 'Project 1 - Mad Libs',
    description: '',
    lessonUrl: null,
    challengeUrl: null,
    projectNumber: '1',
    projectUrl: 'https://docs.google.com/document/d/1bHi5y8m5WqqDboSjXZgSxr7zF_TC7pBf-szmeuw_Sxg/edit?usp=sharing',
    enabled: true
},
{
    id: '4',
    title: '4. Booleans and Conditionals',
    lessonUrl: 'https://docs.google.com/document/d/139X5vqOjr0Sl5j2d34bTCB1-tE8hG11FFSRkoIH7M54/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1A8DzZWqXTnb1yvDUyjwTRtjBJD7DMYZppwJbYuK3tQE/edit?usp=sharing',
    projectUrl: null,
    enabled: false
},
{
    id: 5,
    title: '5. Chained and Nested Conditionals',
    lessonUrl: 'https://docs.google.com/document/d/1pjVpsvRsxxF9kCATuORxuyvokG5xCLudZRTAzlXq-T4/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1Fb4zurqaIsNrue-_ckKquTRQy8h-CkruuPmsef1yOqc/edit?usp=sharing',
    projectUrl: null,
    enabled: false
},
{
    id: 6,
    title: '6. While Loops, Modules, and Random',
    lessonUrl: 'https://docs.google.com/document/d/1BSdA2A6jOaTPz7p4S2vLXx8W5da9ungUOxyuuX6FzSs/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1fS-olwXQytklOBa7fSbowBVHhGBH9ipG2c4E4lvlN74/edit?usp=sharing',
    projectNumber: '2',
    projectUrl: null,
    enabled: false
},
{
    id: 'rocketlaunch',
    title: 'Project 2 - Rocket Launch',
    lessonUrl: null,
    challengeUrl: null,
    projectNumber: '2',
    projectUrl: 'https://docs.google.com/document/d/1h2ByVVE-3ZmFKLjQ451-mzpi_CE12mhYv6CsiAqDMBo/edit?usp=sharing',
    enabled: false
},
{
    id: '7',
    title: '7. Lists',
    lessonUrl: 'https://docs.google.com/document/d/1TJV1SYp0dRIlFKcEFoNWd-K3tVWlfwOSAjV6CjpRHlI/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1A0auXWmSw26U6hdosKqDsqQOuebk18earjvFxd6F23g/edit?usp=sharing',
    projectUrl: null,
    enabled: false
},
{
    id: 8,
    title: '8. For Loops',
    lessonUrl: 'https://docs.google.com/document/d/1tASjAZ6zt4BjeDsU_Jt6SX5yf0IAjbDpNRKsm5URGTY/edit?usp=sharing',
    challengeUrl: 'https://docs.google.com/document/d/1X2Aqghpf2zkj2DDRr8zGWjv4NxnimTm4H7vpvlZHgT8/edit?usp=sharing',
    projectUrl: null,
    enabled: false
},
{
    id: 'battleship',
    title: 'Project 3 - 1D Battleship',
    lessonUrl: null,
    challengeUrl: null,
    projectNumber: '3',
    projectUrl: 'https://docs.google.com/document/d/1_saf6VIA9EXV1gO-zXJLescGnT12ENMHET_8RwAGuQU/edit?usp=sharing',
    enabled: false
},
{
    id: '9',
    title: '9. Functions',
    lessonUrl: '',
    challengeUrl: '',
    projectUrl: null,
    enabled: false
},
{
    id: '10',
    title: '10. Functions with Arguments and Return Statements',
    lessonUrl: '',
    challengeUrl: '',
    projectUrl: null,
    enabled: false
},
{
    id: 'camelrace',
    title: 'Project 4 - The Camel Race Game',
    lessonUrl: null,
    challengeUrl: null,
    projectNumber: '4',
    projectUrl: '',
    enabled: false
},
{
    id: 'capstone',
    title: 'Project 5 - Capstone',
    lessonUrl: null,
    challengeUrl: null,
    projectNumber: '5',
    projectUrl: '',
    enabled: false
}
];

export default classData;