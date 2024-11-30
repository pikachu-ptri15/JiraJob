// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const App: React.FC = () => {
//   return <div>Hello, world!</div>;
// };

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { router } from './Routes/Routes';
import App from './App';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
// const router = createBrowserRouter([
//   {
//     path: '/', element: <LogIn/>,
//   },
//   {
//     path: '/signup', element: <SignUp/>,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);
