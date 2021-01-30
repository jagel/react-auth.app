import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import './login.css';

const Login = (props) => {
    return (
    <React.Fragment>
        <div className="form-user">
            <TextField defaultValue={props.formData.userName} onChange={props.changeFormItemText}
            id="userName" label="User" type="text" variant="outlined" />
        </div>
        <div className="form-password">
            <TextField defaultValue={props.formData.password} onChange={props.changeFormItemText}
            id="password" label="Password" type="password" variant="outlined" />
        </div>
        <div>
            <FormControlLabel
                control={
                <Checkbox 
                    checked={props.formData.chkRememberPass} 
                    onChange={props.changeFormCheckBox}
                    name="chkRememberPass"
                    id="chkRememberPass"
                    color="primary"
                />
                }
                label="Remember me"
            />                        
        </div>
    </React.Fragment>
    );
}


export default Login;