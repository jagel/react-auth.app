import React from 'react';
import './login.css';
import TextField from '@material-ui/core/TextField';
import logo from '../logo.svg';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
const Login = () => {
    const [chkRememberPass, setChkRememberPass] = React.useState(false);

    const handleChkRememberPassChange = (event) => {
        console.log(event);
        setChkRememberPass(event.target.checked);
    }

    return (
    <div class="form">
        <div class="form-login-group">

            <div class="form-logo">
                <div class="login-logo">
                    <img class="logo-img" src={logo} />
                </div>
                <label>Sign in</label>
            </div>

            <div class="form-user">
                <TextField id="user" label="User" type="text" variant="outlined" />
            </div>
            <div class="form-password">
                <TextField id="password" label="Password" type="password" variant="outlined" />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox 
                            checked={chkRememberPass} 
                            onChange={handleChkRememberPassChange}
                            name="chkRememberPass"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />                        
            </div>
            <div class="form-signin">
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
            </div>
            <div class="form-routes">
                <a href=''>Forgot your password</a>
                <a href=''>Don't have an account? Sing up</a>
            </div>
            <div class="form-footer">
                <p>Jagel website 2021</p>
            </div>
        </div>
    </div>
    );
}


export default Login;