import React, { Component } from 'react';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';
//import Logo from '../../assets/images/'
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
        }
    }
    buttonSubmit = () => {
        this.setState({ submit: true })
    }
    render() {
        var switchcard;

        if (this.state.submit === true) {
            switchcard =
                <div className='card-success'>
                    <div style={{ color: 'green' }}>
                        Reset link sent successfully.
                </div>
                    <div style={{ color: '#8D9293', textAlign: 'center' }}>
                        Your reset link has been sent to your email. Follow the link to reset the password.</div>
                </div>
        } else {
            switchcard =
                <div className='card'>
                <div style={{ color: '#8D9293', fontSize: '1em' }}>Email Address</div>
                <div className='input-button-align'>
                    <input className='email-input' ></input>
                    <button className='submit-button' onClick={this.buttonSubmit}>Continue</button></div>
            </div>
        }


        return (
            <div >
                <div className='box'>
                    <div>
                        <img src={require("../../assets/images/Schrocken-Logo@3x.png")} style={{ maxHeight: '100px', maxWidth:'auto' }} /></div>
                    <div
                        style={{ marginTop: '5%', fontSize: '2.5em', color: '#498FE2' }}> Forgot Password </div>
                    <div style={{ color: '#8D9293', marginTop: '1%' }}>Enter your email address below and we will get you back on track.</div>

                    {switchcard}

                    <div style={{marginBottom:'10%'}}>
                        Remembered your details?  <a href="/">Go back to Sign in </a>
                    </div>
                    <div style={{  marginBottom:'10%' }}>
                        Don't have an account?
                            <Link to='/Register'>
                            <button href='/Register' className='getstarted-button'>Get Started</button></Link>
                    </div>
                    <div style={{ marginBottom:'2%' }}>
                        &#169; 2018 Schrocken Pvt. Ltd <a href="">Terms</a> <a href="">Privacy</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;