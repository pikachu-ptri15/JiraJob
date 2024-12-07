import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SignUp.css'

type Props = {};

const SignUp: React.FC = (props: Props) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');


  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passwordCheck') setPasswordCheck(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    setErrorMessage('');
    setSuccessMessage('');


    if (password !== passwordCheck) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {

      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setUsername('');
        setEmail('');
        setPassword('');
        setPasswordCheck('');
        navigate('/login')
      } else {
        setErrorMessage(data.error || 'Failed to register');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className='loginWrapper'>
      <div className='loginCenter loginMoreOffset'>
        <div className='loginHeader'>Welcome to JiraJob</div>
        <div className='loginCenterInfo'>
          <div className='loginCenterLoginHeader'>Sign Up</div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={handleInputChange}
                required
                style={{ borderRadius: '4px' }}
                className='field'
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={email}
                onChange={handleInputChange}
                required
                style={{ borderRadius: '4px' }}
                className='field'
              />
            </div>
            <div>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={handleInputChange}
                required
                style={{ borderRadius: '4px' }}
                className='field'
              />
            </div>
            <div>
              <input
                type='password'
                name='passwordCheck'
                placeholder='Confirm Password'
                value={passwordCheck}
                onChange={handleInputChange}
                required
                style={{ borderRadius: '4px' }}
                className='field'
              />
            </div>
            {/* <div className='field'> */}
            <div>
              <button type='submit' className='login-btn'>
                Sign Up
              </button>
            </div>
          </form>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        </div>
        <div className='loginNewUser'>
          <span>Already have an account? <a href='/login' className='sign-in-link'>Sign In</a></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
