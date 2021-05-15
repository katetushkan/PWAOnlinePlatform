import React, { Component } from "react";
import '../../assets/styles/authenticate.css'
import {authLogin, authLoginGoogle, authSignUp} from "../../store/actions/authActions";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";

class Authenticate extends Component{

    state = {
        email: '',
        password: '',
    }

    onClickGoBack = () =>{
        const { history } = this.props;
        history.goBack();
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSignUp = (event) => {
        event.preventDefault();
        this.props.onSignUp(this.state);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state);
    }

    handleGoogle = (event) => {
        event.preventDefault();
        this.props.onAuthGoogle();
    }
    render() {
        let componentType = false
        if (this.props.match.path === '/Login'){
            componentType = true
        }
        return (
            <div>
                { this.props.auth.auth ?
                    <Redirect to="/Profile"/>
                    :
                    <div className="log-in-screen">
                        <div className="go-back-btn-wrapper">
                            <button className="go-back auth" onClick={this.onClickGoBack}/>
                        </div>
                        <div className="authenticate-form-wrapper">
                            <form className="form-wrapper">
                                <input type="email" id='email' placeholder="Email" onChange={this.handleChange} className="form-field auth"/>
                                <input type="password" id='password' placeholder="Password" onChange={this.handleChange} className="form-field auth"/>
                                <div className="auth-btn-wrapper">
                                    <button className="google log-in" onClick={this.handleGoogle}/>
                                    { componentType ?
                                        <button className="arrow-btn login-btn log-in" onClick={this.handleSubmit}/>
                                        :
                                        <button className="arrow-btn signup-btn log-in" onClick={this.handleSignUp}/>
                                    }

                                </div>

                            </form>
                        </div>
                    </div>
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        loading: state.loading,
        error: state.error,
        auth: state.auth,
        token:state.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (creds) => dispatch(authLogin(creds)),
        onAuthGoogle: () => dispatch(authLoginGoogle()),
        onSignUp: (creds) => dispatch(authSignUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
