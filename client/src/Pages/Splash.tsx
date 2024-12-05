import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Background from '../Assets/Enforcer.png';

type Props = {};
const Splash: React.FC = (props: Props) => {
  return (
    <div className='splashWrapper'>
      <div
        className='splashImage'
        style={{ backgroundImage: 'url(' + Background + ')' }}
      >
        <h1>Splash Page!</h1>
      </div>
    </div>
  );
};

export default Splash;
