import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loginform from './Loginform';

const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <React.StrictMode>
      <h1>User Registration Form</h1>
      <Loginform/>
    </React.StrictMode>
  );