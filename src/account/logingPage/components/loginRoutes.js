import { Link } from 'react-router-dom';

export const LoginRoutes = (props) => {
    return (
        <div className="form-routes">
            <Link to="/forgot-password">Forgot your password</Link>
            <Link to="/create-account">Don't have an account? Sing up</Link>
        </div>
    );
}