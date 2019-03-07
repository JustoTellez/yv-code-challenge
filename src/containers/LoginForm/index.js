import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, postUser} from '../../actions/index';
import ErrorMessage from './ErrorMessage';

import './index.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameValidated: null,
            password: '',
            passwordValidated: null,
            status: ''
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
        this.setState({usernameValidated:this.alphanumericOnly(event.target.value)});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
        this.setState({passwordValidated:event.target.value.length > 3 ? true : false})
    };

    handleSubmit = event => {

        const type = event.target.id;

        if(this.state.usernameValidated === true && this.state.passwordValidated === true){
            const users = type === 'login' ? this.props.fetchUser(this.state) : this.props.postUser(this.state);
            this.setState({password: ''});
            this.setState({username: ''});
        }else{
            this.setState({passwordValidated:this.state.password.length > 3 ? true : false});
            this.setState({usernameValidated:this.alphanumericOnly(this.state.username)})
        }
    };

    handleDefaultSubmit = event => {
        event.preventDefault();
    };

    alphanumericOnly = word => {
        let regex = /^[a-z0-9]+$/,
        str = word;

        if ((str.length >= 4) && regex.test(str)) {
           return true;
        }
        else {
           return false;
        }
    };

    componentDidMount = () => {};

    render(props) {
        return (<form className="form" name="form" onSubmit={this.handleDefaultSubmit}>

            <div className="form-group" on>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control-username" placeholder="Username" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                {this.state.usernameValidated === false &&
                    <p className="error">Username must be 4 or more alphanumeric characters</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control-password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                {this.state.passwordValidated === false &&
                    <p className="error">Password must be 4 or more characters</p>
                }
            </div>
            <div className="form-group buttons">
                <button id="login" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                <button id="signup" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
            </div>

            <ErrorMessage/>
        </form>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUser, postUser
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
