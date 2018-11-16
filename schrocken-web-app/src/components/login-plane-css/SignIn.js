import React, { Component } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { preventDefault } from 'fullcalendar';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInputClicked: false,
            passwordInputClicked: false,
            rememberMe: false,
            showPassword: false,
        }
    }

    togglePassword = () => {
        var passwordInputClicked = true;
        var showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword,
            passwordInputClicked: passwordInputClicked

        });
        //    alert(showPassword)
    }
    emailInputClicked = () => {
        var passwordInputClicked = this.state.passwordInputClicked;
        if (passwordInputClicked) { this.setState({ passwordInputClicked: !passwordInputClicked }) }
        var emailInputClicked = !this.state.emailInputClicked;
        this.setState({ emailInputClicked })
    }
    passwordInputClicked = () => {
        var emailInputClicked = this.state.emailInputClicked;
        if (emailInputClicked) { this.setState({ emailInputClicked: !emailInputClicked }) }
        var passwordInputClicked = !this.state.passwordInputClicked;
        this.setState({ passwordInputClicked })
    }
    render() {
        var showPassword = this.state.showPassword;
        var emailInputClicked = this.state.emailInputClicked;
        var passwordInputClicked = this.state.passwordInputClicked
        return (
            <div className="signin">
                <div className="signincontainer">
                    <div className="signinheading">
                        <h1>Sign In</h1>
                        <p>Sign into your Schrocken Account</p>
                    </div>

                    <div className="card-container">
                        <p className="signinEnterDetails">Enter your Sign in details to view your Account</p>
                        <div className="signincard block">
                            <div className="repeat-block">
                                <label className={emailInputClicked ? "label-active block" : "label block"} >Email</label>
                                <input className={emailInputClicked ? "input input-active  block" : "input block"} onClick={this.emailInputClicked} />
                            </div>
                            <div className="repeat-block">
                                <label className={passwordInputClicked ? "label-active block" : "label block"}>Password</label>

                                {showPassword ? (
                                    <div>
                                        <input className={passwordInputClicked ? "input-active input block" : "input block"} onClick={this.passwordInputClicked} />
                                        <img src={require("../../assets/images/eye-closed.png")} onClick={this.togglePassword} />
                                    </div>)
                                    : (
                                        <div>
                                            <input className={passwordInputClicked ? "input-active input block" : "input block"} type="password" onClick={this.passwordInputClicked} />
                                            <img src={require("../../assets/images/eye-open.png")} onClick={this.togglePassword} />
                                        </div>
                                    )


                                }
                                {/* <img src={require("../../assets/images/eye.png")} onClick={this.togglePassword} /> */}
                            </div>

                            <input type="radio" value="Remember Me" id="remember" className="remember label" /><label for="remember">Remember me</label>
                            <button className="signin-button block">Sign in</button>

                        </div>
                    </div>
                    <div className="other-options">
                        <Link to="/ForgotPassword" className="forgot"> <p>Forgot Password?</p></Link>
                        <div className="signup-link">
                            <p>Don't have an Account</p>
                            <Link to="/Register" style={{ textDecoration: "none" }} > <button>Get Started</button></Link>
                        </div>
                    </div>
                    <footer className="footer"> &#169; 2018 Schrocken Pvt. Ltd <a href="">Terms</a> <a href="">Privacy ...</a>
                    </footer>

                </div>

            </div>
        )
    }
}

export default SignIn;