import React, {useState} from 'react';
import './ProjectUrlSubmission.css';

export default function ProjectSubmissionUrl(){
    const [projectUrl, setProjectUrl] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setProjectUrl(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Project Submitted:', projectUrl);
        setIsSubmitted(true);
        setProjectUrl('')
    }

    return(
        <div className='project-url-wrapper'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='url'>
                    Submit Your Repl.it Lesson/Challenge/Project URL
                </label>
                <p>Separate multiple urls with commas</p>
                <input type='url'
                    id='url'
                    name='url'
                    placeholer = 'repl.it url'
                    value = {projectUrl}
                    onChange={handleChange}
                    />
                <button type='submit'>Submit</button>
            </form>
            {
                isSubmitted &&

                <div className="success">
                    <p>Success! Your project has been submitted.</p>
                </div>
            }
            
        </div>
    )
}