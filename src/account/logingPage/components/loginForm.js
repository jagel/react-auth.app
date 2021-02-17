import { useState } from "react";
import { Checkbox, FormControlLabel, TextField, Button } from '@material-ui/core';
import { HttpPostLogin } from "../../../core/authentication/loginEndpointAuth";


export function LoginForm(props){
    const [loginForm, setLoginForm] = useState({
        userName : '',
        password : '',
        persisAccount : true
    });

    const submitForm = async event => {
        event.preventDefault();
        var data = await HttpPostLogin(loginForm);
        console.log('response:',data);
    };
    
    const onchangeEvent = event => setLoginForm({...loginForm, [event.target.id]: event.target.value});
    
    const changeFormCheckBox = event => setLoginForm({...loginForm, [event.target.id]: event.target.checked});

    return (
        <form onSubmit={submitForm}>
            <div className="form-user">
                <TextField defaultValue={loginForm.userName} onChange={onchangeEvent}
                    id="userName" label="User" type="text" variant="outlined" required 
                    helperText={"Incorrect entry."} error={false} />
            </div>

            <div className="form-password">
                <TextField defaultValue={loginForm.password} onChange={onchangeEvent}
                    id="password" label="Password" type="password" variant="outlined" required />
            </div>
            
            <div>
                <FormControlLabel
                    control={
                    <Checkbox 
                        checked={loginForm.persisAccount} 
                        onChange={changeFormCheckBox}
                        name="persisAccount"
                        id="persisAccount"
                        color="primary"/>
                    }
                    label="Remember me"
                />                        
            </div>
            <div className="form-signin">
                <Button type="submit" variant="contained" color="primary">
                    Sign In
                </Button>
            </div>
        </form>
    )

}