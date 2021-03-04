import React, { Component } from 'react';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './sign-in-and-sign-out.style.scss';

export class SigninAndSignOut extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <Signin />
                <SignUp />
            </div>
        )
    }
}

export default SigninAndSignOut;
