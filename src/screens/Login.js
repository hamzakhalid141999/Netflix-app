import React, {useState} from 'react';
import './Login.css'
import netflix from "../netflix.png";
import SignUpScreen from './SignUpScreen';



function Login() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="login"> 
        <div className="login__gradient">
        
            <div className="login__background">
                <img className="login__logo" src={netflix} alt="logo"/>
                <button onClick={()=>setSignIn(true)} className="login__btn">Sign In</button>
            </div>
            </div>

            

            <div className="login__body">
                {signIn ? <SignUpScreen/> : 
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anytime, Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="login__input">
                    <div className="input__container">
                    <form>
                        <input type="email"
                        placeholder="Email Address" />
                    </form>

                    <button className="login__getStarted">GET STARTED</button>
                    </div>
                    
                </div>
                </>}
                
            </div>
        </div>
    );
}

export default Login;