import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import JobBoard from './Pages/JobBoard';
import Splash from './Pages/Splash';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/board' element={<JobBoard />} />
        </Routes>
    </Router>
  );
};


export default App;
