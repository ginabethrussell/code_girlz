import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wizard from '../../../wizard.png';
import data from '../../../classData';
import './AdminPage.css';

const initialFormState = {
    admin: '',
    date: '',
    student: '',
    module: '',
    activity: '',
    comments: ''
}

function RenderAdminPage(props){
    const {admin} = props;
    const adminFormState = {...initialFormState, admin: admin.username}
    const [formState, setFormState] = useState(adminFormState);

    const handleChange = (e) => {
        const newFormState = {...formState, [e.target.name]: e.target.value};
        setFormState(newFormState)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submission: ",formState);
        setFormState(adminFormState);
    }

    
    return (
        <div className='admin-page-wrapper'>
            <div className='admin-page-header'>
            <img className='wizard-logo' src={wizard}/>
            <h1>Admin Page</h1>
            <Link to='/'>Log Out</Link>
            </div>
            <div className='admin-page-form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="admin">Admin Name: </label><br/>
                        <input type='text'
                            name='admin'
                            id='admin'
                            value={formState.admin}
                            onChange={handleChange}
                        />

                        <label htmlFor="date">Date: </label><br />
                        <input type='date'
                            name='date'
                            id='date'
                            value={formState.date}
                            onChange={handleChange}
                        />
                    </div>


                    <div className='form-group'>
                        <label htmlFor="student">Student Name: </label><br />
                        <input type='text'
                            name='student'
                            id='student'
                            value={formState.student}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='module'>Module: </label><br />
                            <select id='module' name='module' value={formState. module} onChange={handleChange}>
                                <option
                                name='module'
                                id='module'
                                value= ''>
                                    -- select a module --
                                </option>
                           
                        {
                            data.map( module => (
                            
                            <option key={module.id} 
                                name='module'
                                id='module'
                                value={module.title}
                            >
                                {module.title}
                            </option>
                   
                        ))
                    }
                        </select>
                    </div>
                    
                    <div className='form-group'>
                        <h3>Select Activity </h3><br />
                        <div className="radio-buttons">
                            <input type="radio" id="lesson" name="activity" value="lesson" onChange={handleChange} />
                            <label htmlFor="lesson">Lesson</label><br/>
                            <input type="radio" id="challenge" name="activity" value="challenge" onChange={handleChange} />
                            <label htmlFor="challenge">Challenge</label><br/>
                            <input type="radio" id="project" name="activity" value="project" onChange={handleChange} />
                            <label htmlFor="project">Project</label>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="comments">Comments: </label><br />
                        <textarea 
                            name='comments'
                            id='comments'
                            rows="10" 
                            cols="50"
                            value={formState.comments}
                            onChange={handleChange}
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      );
}

export default RenderAdminPage;