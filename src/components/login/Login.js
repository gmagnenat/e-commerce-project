import { Button, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
    return (
        <div className="login">
            <Link to="/" className="login__linkBack">
                <CloseIcon />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form className="form">
                    <Input placeholder="E-mail" type="email" required="" />
                    <Input placeholder="Password" type="password" />

                    <Button
                        variant="contained"
                        color="primary"
                        className="login__signinButton"
                    >
                        Sign In
                    </Button>

                    <p>
                        By signing-in you agree to our Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and
                        our Interest-Based Ads Notice.
                    </p>

                    <Button variant="outlined" className="login__registeButton">
                        Create an Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
