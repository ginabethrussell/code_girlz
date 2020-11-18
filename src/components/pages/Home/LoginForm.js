import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import wizard from '../../../wizard.png';

const initialFormState = {
    username: '',
    password: ''
}
function LoginForm (props) {
    const {loginUser} = props;
    const [userFormState, setUserFormState] = useState(initialFormState);

    const handleChange = (e) => {
        const newFormState = {
            ...userFormState, [e.target.name]: e.target.value
        }
        setUserFormState(newFormState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(userFormState);
        setUserFormState(initialFormState);
    }

    return(
        <div className='form-wrapper'>
            <div className='form-header'>
                <img src={wizard} className="wizard-logo" alt="logo" />
                <h2>Coding<br />Wizards</h2>
            </div>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='form-group'>
                    <label htmlFor="username">username</label><br/>
                    <input type='text'
                        name='username'
                        id='username'
                        value={userFormState.username}
                        onChange={handleChange}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">password</label><br />
                    <input type='password'
                        name='password'
                        id='password'
                        value={userFormState.password}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Login</button>
                <Link to='/resetpassword'><span className='forgot-passord'>Forgot password ?</span></Link>
            </form>
        </div>
    )
}

export default LoginForm;