import React, { useContext, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

import './Registration.css'

const Registration = () => {
    const { createUser, logOut, updateUser } = useContext(AuthContext)
    const [errors, setErrors] = useState(null)
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const location  = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        if (password < 6) {
            setErrors('Password should be at least 6 characters')
            return 
        }
        if (password !== confirm) {
            setErrors('Your password did not match')
            return
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('Welcome To Lighentiam')
                const userInfo = {
                    displayName: firstName + " " + lastName
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(firstName, lastName, email, password, "user")
                    })
            })
            .catch((error) => {
                console.error(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (firstName, lastName, email, password, account) => {
        const user = { firstName, lastName, email, password, account }
        fetch(`https://lighteniam-server.vercel.app/users`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("saveUser", data)
                 navigate(from, {replace : true} )
            })
    }

    return (
        <div className='register-section'>
            <div className='container'>
                <div className='register-heading'>
                    <h1>Register Your Account</h1>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='register-form'>
                        <input type="text" name="firstName" placeholder="First name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="lastName" placeholder="Last name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='confirm' placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input id='submit-btn' type="submit" value="Sign in" className="input input-bordered input-primary  w-1/2" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    {errors && <p className='text-red-600'>{errors}</p>}
                </form>

                <p onClick={logOut}  className='text-slate-800 cursor-pointer'>Cancel</p>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Registration;