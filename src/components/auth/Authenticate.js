import React, { Component } from "react";
import '../../assets/styles/authenticate.css'

class Authenticate extends Component{

    state = {
        email: '',
        password: ''
    }
    onClickGoBack = () =>{
        const { history } = this.props;
        history.push("/");
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        let componentType = false
        if (this.props.match.path === '/Login'){
            componentType = true
        }
        return(
            <div className="log-in-screen">
                <div className="go-back-btn-wrapper">
                    <button className="go-back auth" onClick={this.onClickGoBack}/>
                </div>
                <div className="authenticate-form-wrapper">
                <form className="form-wrapper">
                    <input type="email" id='email' placeholder="Email" onChange={this.handleChange} className="form-field auth"/>
                    <input type="password" id='password' placeholder="Password" onChange={this.handleChange} className="form-field auth"/>
                    <div className="auth-btn-wrapper">
                        <button className="google log-in"/>
                        { componentType ?
                            <button className="arrow-btn login-btn log-in" onClick={this.handleSubmit}/>
                            :
                            <button className="arrow-btn signup-btn log-in"/>
                        }

                    </div>

                </form>
                </div>
            </div>
        )
    }
}

export default Authenticate;