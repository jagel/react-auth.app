import React from 'react';
import './loginPage.css'
import { LoginForm } from './components/loginForm';
import { LoginHeader } from './components/loginHeader';
import { LoginFooter } from './components/loginFooter';
import { LoginRoutes } from './components/loginRoutes';

class LoginPage extends React.Component
{
    render(){
        return (
            <React.Fragment>
                 <div className="form">
                    <div className="form-login-group">
                        <LoginHeader />
                        <LoginForm />
                        <LoginRoutes />
                        <LoginFooter />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPage;