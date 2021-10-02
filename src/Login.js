import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            // dispatch pushes this user into the data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="fb logo"/>

                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
                  alt="facebook"></img>
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login
