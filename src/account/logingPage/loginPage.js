import React from 'react';
import Login from './components/login';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import jagelLogo from '../../src/img/jagelLogo.svg';

class LoginPage extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            userName:'', 
            password:'', 
            chkRememberPass:false
        }
    }

    changeFormItemText = event => {
        let formData = this.state;
        formData[event.target.id] = event.target.value;
        this.setState(formData);
    }

    changeFormCheckBox = event => {
        let formData = this.state;
        formData[event.target.id] = event.target.checked;
        this.setState(formData);
    }

    submitForm = () => {
        console.log(this.state);
    }

    render(){
        return (
            <React.Fragment>
                 <div className="form">
                    <div className="form-login-group">
        
                        <div className="form-logo">
                            <div className="login-logo">
                                <img className="logo-img" src={jagelLogo} />
                            </div>
                            <br />
                            <label>Sign in</label>
                            <label>{this.state.userName}</label>
                        </div>

                        <Login 
                            changeFormItemText={this.changeFormItemText}
                            changeFormCheckBox={this.changeFormCheckBox}
                            formData={this.state}
                        />

                        <div className="form-signin">
                            <Button onClick={this.submitForm} variant="contained" color="primary">
                                Sign In
                            </Button>
                        </div>

                        <div className="form-routes">
                            <Link to="/forgot-password">Forgot your password</Link>
                            <Link to="/create-account">Don't have an account? Sing up</Link>
                        </div>

                        <div className="form-footer">
                            <p>Jagel website 2021</p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default LoginPage;