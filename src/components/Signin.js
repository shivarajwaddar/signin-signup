import React from 'react'
import './signin.css'
import { Link } from "react-router-dom"


const Signin = () => {

    return (
        <div className='sign-in-parent'>
            <div className="sign-in-form-container">
                <div className='header'>
                    <h1>Sign in</h1>
                    <a className='p1' href='#'>
                        I don't have an Account
                    </a>
                </div>
                <form>
                    <input
                        type="email"
                        className="UserID"
                        placeholder="Email"
                        name="UserID"
                    />

                    <button type="submit" className="submit-button">
                        Continue
                    </button>
                    <p className='p2'> can't Sign in?</p>

                    <button className='social-media'>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.iIzYZCVWfLOiJsdVwGhn8wHaHa&pid=Api&P=0" alt='img' className='image'></img>
                        <p className='s-text'> Singin with Google</p>
                        <div className='arrow1'>  > </div>
                    </button>
                    <button className='social-media'>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.K05b2K0EITE7dSWC8lRWCgHaHx&pid=Api&P=0" alt='img' className='image'></img>
                        <p className='s-text'> Singin with facebbok</p>
                        <div className='arrow2'>  > </div>
                    </button>
                    <button className='social-media'>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.I4Unbkk7KqRxWk_r6fQfiAHaHa&pid=Api&P=0" alt='img' className='image'></img>
                        <p className='s-text'> Singin with Apple</p>
                        <div className='arrow3'>  > </div>
                    </button>

                    <p className='p3'>
                        This site is protected by reCAPTCHA and the Google <a href='#'>Privacy Policy </a>and <a href='#'>Term of service </a>apply.</p>
                    <p className='p3'><a href='#'>Terms and Conditions · Privacy Policy · CA Privacy Notice</a></p>

                </form>
            </div>
        </div>
    )
}

export default Signin;