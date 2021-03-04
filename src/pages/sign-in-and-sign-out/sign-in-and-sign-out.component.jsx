import React, { Component } from 'react';
import Signin from '../../components/signin/signin.component';

import './sign-in-and-sign-out.style.scss';

export class SigninAndSignOut extends Component {
    render() {
        return (
            <div>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <Signin />
            </div>
        )
    }
}

export default SigninAndSignOut;
