import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Testest from './Pages/Testest';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/test' element={<Testest />} />
        </Routes>
    </Router>
  );
};

export default App;
