import React, { useState } from 'react';
type Props = {};

const LogIn: React.FC = (props: Props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('clicked me');
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const supabase = useSupabaseClient();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className='loginWrapper'>
      <div className='loginCenter'>
        <div className='loginHeader'>JiraJob</div>
        <div className='loginCenterInfo'>
          <div className='loginCenterLoginHeader'>Login</div>
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
            <div className='field'>
              <button type='submit' className='login-btn'>
                Login
              </button>
            </div>
          </form>
        </div>
        <div className='loginNewUser'>
          <a href='/signup'>New User?</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
