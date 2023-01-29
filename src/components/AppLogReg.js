import React from 'react'
import { Login } from './Login';
import { Register } from './Register';
import { useState } from 'react';
import "../Styles/LogReg.css"

function AppLogReg() {
    

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm =(formName) => {
      setCurrentForm(formName)
    }

  return (

    <div className='appLogReg'>
{
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}  />
        }


    </div>

  );
}

export  {AppLogReg};