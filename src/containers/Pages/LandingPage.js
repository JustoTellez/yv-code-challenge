import React, {Component} from 'react';
import Hero from '../../components/Hero';
import { connect } from 'react-redux';

import './index.css';

class LandingPage extends Component {

    componentDidMount = () => {
        this.animateIn()
    }

    animateIn = () =>{
        TweenMax.set('.floating-container',{y:"-50%", x:"-50%"});
        TweenMax.from('.floating-container',0.5,{alpha:0, transformOrigin:"50% 50%", scale:1.3, ease:Back.easeOut});

    }

    render() {
        let { user } = this.props;
        return (
            <div className="container">
                <Hero/>
                <div id="landing-page" className="page">
                    <div class="floating-container center-text">
                        {user && user.name ? <h2>{user.name}</h2> : null}
                        {user && user.name ? <p className="signup-name">Welcome back to your profile!</p> : <p>Thank you for signing up {user.username}</p>}
                        <img className="avatar" src="./images/coolhat-guy.jpg"/>
                        <p>Username : {user.username}</p>
                        <p>User ID : {user.userid}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(({ user }) => ({ user }))(LandingPage);
