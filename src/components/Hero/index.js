import React, {Component} from 'react';
import './index.css';

class Hero extends Component {

    render() {
        return (
            <div className="hero">
                <div className="hero-container">
                    <h2>Welcome.</h2>
                    <img src="./images/people.jpg" alt="peopleholding phones" />
                </div>
            </div>
        )
    }
}

export default Hero;
