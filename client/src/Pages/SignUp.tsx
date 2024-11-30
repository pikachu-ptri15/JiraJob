import React, { useState } from 'react';
type Props = {};

const SignUp: React.FC = (props: Props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('clicked me');
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // const supabase = useSupabaseClient();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setPassword(value);
    if (name === 'passwordCheck') setPasswordCheck(value);
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
                placeholder='Retype Password'
                value={passwordCheck}
                onChange={handleInputChange}
                required
                style={{ borderRadius: '4px' }}
                className='field'
              />
            </div>
            <div className='field'>
              <button type='submit' className='login-btn'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className='loginNewUser'>
          <a href='/'>Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
