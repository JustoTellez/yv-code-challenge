import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';

import LoginPage from '../../containers/Pages/LoginPage';
import LandingPage from '../../containers/Pages/LandingPage';

class App extends Component {

    componentDidMount = () => {
        this.introAnimation();
    }

    introAnimation = () => {
        if(window.innerWidth > 700){
            TweenMax.set('.hero', {x:"50%"});
            TweenMax.from('.hero',0.75,{scale:1.3, alpha:0, ease:Back.easeOut});
            TweenMax.from('.page', 1, {x:"+=100", alpha:0, ease:Strong.easeInOut, delay:1.1});
            TweenMax.to('.hero',1,{x:'0%', ease:Strong.easeInOut, delay:1});
        }else{
            TweenMax.from('.hero',0.75,{scale:1.3, ease:Back.easeOut});
            TweenMax.from('.page', 0.75, {y:"+=100", alpha:0, ease:Strong.easeOut, delay:0.7});
        }
    }

    render() {
        let { user } = this.props;

        return <div id="youvisit-app">
                {user && user.status === 1 ? <LandingPage /> : <LoginPage />}
            </div>;
    }
}

export default connect(({ user }) => ({ user }))(App);
