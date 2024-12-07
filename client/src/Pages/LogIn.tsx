<<<<<<< HEAD
=======
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LogIn: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     if (name === 'username') setUsername(value);
//     if (name === 'password') setPassword(value);
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     setErrorMessage('');

//     try {

//       const response = await fetch('http://localhost:3001/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Login successful:', data.message);
//         navigate('/board');
//       } else {
//         setErrorMessage(data.error || 'Failed to log in');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage('An unexpected error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="loginWrapper">
//       <div className="loginCenter">
//         <div className="loginHeader">JiraJob</div>
//         <div className="loginCenterInfo">
//           <div className="loginCenterLoginHeader">Login</div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={username}
//                 onChange={handleInputChange}
//                 required
//                 style={{ borderRadius: '4px' }}
//                 className="field"
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handleInputChange}
//                 required
//                 style={{ borderRadius: '4px' }}
//                 className="field"
//               />
//             </div>
//             <div className="field">
//               <button type="submit" className="login-btn">
//                 Login
//               </button>
//             </div>
//           </form>
//           {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//         </div>
//         <div className="loginNewUser">
//           <a href="/signup">New User?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;



>>>>>>> 341796cd (last minute login + signup styling)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LogIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data.message);
        navigate('/board');
      } else {
        setErrorMessage(data.error || 'Failed to log in');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCenter">
        <div className="loginHeader">JiraJob</div>
        <div className="loginCenterInfo">
          <div className="loginCenterLoginHeader">Login</div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleInputChange}
                required
                className="field"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                required
                className="field"
              />
            </div>
            {/* <div className="field"> */}
            <div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="loginNewUser">
          <span>
            New to JiraJob? <a href="/signup" className='signup-link'>Create new user</a>
            </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
