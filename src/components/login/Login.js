import { Button, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.scss';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((error) => alert(error.message));

        // firebase login
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch((error) => alert(error.message));

        // firebase register
    };

    return (
        <div className="login">
            <Link to="/" className="login__linkBack">
                <CloseIcon />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form className="form">
                    <Input
                        placeholder="E-mail"
                        type="email"
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        className="form__signinButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign In
                    </Button>

                    <p className="form__terms">
                        By signing-in you agree to our Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and
                        our Interest-Based Ads Notice.
                    </p>

                    <Button
                        variant="outlined"
                        className="form__registerButton"
                        onClick={register}
                    >
                        Create an Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
