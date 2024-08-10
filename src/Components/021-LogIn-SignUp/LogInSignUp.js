import React from "react";
import './LogInSignUp.css';

const LogInSignUp = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="signup">
                    <h2>Sign Up</h2>
                    <div className="line"></div>
                </div>
            </div>
            <form className="form">
                <div className="input-group">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email id" />
                    <input type="password" placeholder="Password"/>
                </div>
                <p>Forgot Password<a href="www.google.com">Click Here!</a></p>
                <div className="buttons-group">
                    <button>sign up</button>
                    <button>sign in</button>
                </div>
            </form>
        </div>
    );
}

export default LogInSignUp;