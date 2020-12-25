import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { HomePage } from './components/pages/Home';
import { DashboardPage } from './components/pages/Dashboard';
import { LessonPage } from './components/pages/Lesson';
import { ChallengePage } from './components/pages/Challenge';
import { ProjectPage } from './components/pages/Project';


import axios from 'axios';

import './App.css';

function App() {

  return (
    <Switch>
      <Route path='/dashboard/project:id' render={() => <ProjectPage /> } />
      <Route path='/dashboard/challenge:id' render={() => <ChallengePage /> } />
      <Route path='/dashboard/lesson:id' render={() => <LessonPage /> } />
      <Route exact path='/dashboard' render={() => <DashboardPage />}/>
      <Route path='/' render={() => <HomePage />}/>
    </Switch>
  );
}

export default App;
