import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/Context';
import app from '../../Firebase/firebase.config';
import './RecoverPassword.css'

const auth = getAuth(app)

const RecoverPassword = () => {
    const [userEmail, setUserEmail] =  useState('');
   
    const handleEmailBlur = event => {
        event.preventDefault()
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }

    const handleForgetPassword = () => {
        if(!userEmail){
            toast.error("Please enter your email address.")
            return 
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            toast.success("Reset password link sent! Please check your email.")
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
       <div className='recoverPassword-section'>
            <div className='container'>
                <div className='recoverPassword-heading'>
                    <h1>Recover Password</h1>
                </div>
                <p className='text-slate-400'>Please enter your email and we will send a Password reset link</p>
                <form className='recoverPassword-form'>
                    <input type="text" onBlur={handleEmailBlur} name="email"  placeholder="Email" className="input-email input input-bordered" />
                    <input onClick={handleForgetPassword} type="button" value="Reset Password" className="input-reset input w-1/2" />
                </form>
            </div>
            <Toaster/>
        </div>
    );
};

export default RecoverPassword;