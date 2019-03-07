import React, {Component} from 'react';
import LoginForm from '../LoginForm';
import Hero from '../../components/Hero';

import './index.css';

export default class LoginPage extends Component {

    render() {

        return (
            <div className="container">
                <Hero/>
                <div id="login-page" className="page">
                    <div class="floating-container">
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}
