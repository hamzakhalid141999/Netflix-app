import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import './SignUpScreen.css';
import {auth} from "../firebase";

function SignUpScreen(props) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser);
            alert("User Created Successfully");
        })
        .catch(error => {
            alert("User Already Exists");
        });
    };

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            alert("signed in successfully");
            console.log(authUser);
        })
        .catch(error=>{
            alert(error.message);
            alert("signed in failed");

        });
    };

    return (
        <div className="signupscreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signup__grey">New to Netflix? </span>
                    <span className="signupScreen_link" onClick={register}>Sign Up now.</span>
                    </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;