import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { HomePage } from './components/pages/Home';
import { DashboardPage } from './components/pages/Dashboard';
import { LessonPage } from './components/pages/Lesson';
import axios from 'axios';

import './App.css';

const initialUser = {
    id: '',
    username: '',
    password: ''
}

function App() {
  const [user, setUser] = useState(initialUser);

  const history = useHistory();

  const loginUser = (newUser) => {
    const loggedInUser = {};
    axios
    .post('https://reqres.in/api/users', newUser)
    .then(response => {
      loggedInUser.id = response.data.id;
      loggedInUser.username = response.data.username;
      loggedInUser.password = response.data.password;
      setUser(loggedInUser);
      history.push('/dashboard');
    })
    .catch(err => console.log(err));
  }
  console.log(user);

  return (
    <Switch>
      <Route path='/dashboard/lesson1' render={() => <LessonPage user={user}/> } />
      <Route path='/dashboard' render={() => <DashboardPage user={user}/>}/>
      <Route path='/' render={() => <HomePage loginUser={loginUser}/>}/>
    </Switch>
  );
}

export default App;
