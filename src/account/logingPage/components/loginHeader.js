import jagelLogo from '../../../assets/img/jagelLogo.svg';

export const LoginHeader  = (props) => {
    return(
        <div className="form-logo">
            <div className="login-logo">
                <img className="logo-img" src={jagelLogo} />
            </div>
            <br />
            <label>Sign in</label>
        </div>
    )
}