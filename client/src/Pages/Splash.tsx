import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JiraJobLogo from '../assets/JiraJob_logo.png';
import './Splash.css'


type Props = {};
const Splash: React.FC = (props: Props) => {

  const navigate = useNavigate();

  const handleClick = () => navigate('/login')

  return (
    <div className='app'>
      <img src={JiraJobLogo} alt="JiraJobLogo" className='img'/>
      <div className='button-container-12'>
      <button className='button-12' onClick={handleClick}>Get Started</button>
      </div>
    </div>
  );
};

export default Splash;
