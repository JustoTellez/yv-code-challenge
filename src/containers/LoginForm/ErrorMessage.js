import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.css';

class ErrorMessage extends Component {

    render() {
        let { user } = this.props;
        
        return (
            <p className="error">{user && user.message ? user.message : ''}</p>
        );
    }
}

export default connect(({ user }) => ({ user }))(ErrorMessage);
