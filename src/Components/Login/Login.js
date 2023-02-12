import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import './login.css'

const Login = () => {
    const {user, loginUser} = useContext(AuthContext);
    const [loginError, setLoginError ] = useState('');

    const navigate = useNavigate()
    const location  = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
       
        loginUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace : true} )
          })
          .catch((error) => {
           console.error(error)
           setLoginError(error.message)
        })
    }
    
    return (
        <div className='login-section'>
        <div className='container'>
            <div className='login-heading'>
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit} className='login-form'>
                <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <div className='flex flex-col'>
                <input type="text" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                <Link to='/recoverPassword'><p className='text-slate-800'>Forget password?</p></Link>
                </div>
                <div className='flex flex-col'>
                <input type="submit" value="Sign in" className="input input-bordered input-primary  w-1/2" />
                {loginError && <p className='text-red-600'>{loginError}</p>}
                <Link to="/registration" className='text-slate-800'>Create account</Link>

                </div>
                
            </form>
           
        </div>
    </div>
    );
};

export default Login;