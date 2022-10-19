import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'



const Signup = () => {
    const handleSubmit = () => {

    }
    return (
        <div className='sign-in-parent'>
            <div className="sign-in-form-container">
                <div className='header'>
                    <h1>Sign up</h1>
                    <a className='p1' href='#'>
                        I have an Account
                    </a>

                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="UserID"
                        placeholder="Email"
                        name="UserID"
                    />
                    {/* <input
                        className="password"
                        placeholder="Password"
                        name="password"
                    />
                    <p className='ps'>Use 8 characters or more</p>

                    <input
                        type="text"
                        className="name"
                        placeholder="name"
                        name="name"
                    /> */}
                    <p className='p3'>By signing up, you agree to the Terms and Conditions and Privacy Policy. California residents, see our CA Privacy Notice.</p>

                    <button type="submit" className="submit-button">
                        Agree and Signup
                    </button>
                    <p className='p2'> can't Signin?</p>

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

                    <p className='p31'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    <p className='p3'>You also agree to receive product-related marketing emails from Grammarly, which you can unsubscribe from at any time.</p>
                </form>

            </div>
            <p className='p4'>Procced without creating Account</p>
        </div>
    )
}

export default Signup;