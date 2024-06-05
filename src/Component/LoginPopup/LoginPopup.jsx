import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setshowForm}) => {
    const [currentstate,setcurrentstate]=useState('Sign Up')
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentstate}</h2>
                    <img onClick={()=>setshowForm(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {
                        currentstate==='Login'?<></>: <input type="text"placeholder='Your Name'required
                        />
                    }
                   
                     <input type="email" name="" id="" placeholder='Your email'required />
                     <input type="password" placeholder='password' required/>
                </div>
                <button>{currentstate==='Sign Up'?"Create account":'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id=""required />
                    <p>By continuing,i agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currentstate==='Login'?<p>create a new account? <span onClick={()=>setcurrentstate('Sign Up')}>click here</span></p>:<p>Already have an account? <span onClick={()=>setcurrentstate('Login')}>Login here</span></p>
                }
                
                
            </form>
        </div>
    );
};

export default LoginPopup;