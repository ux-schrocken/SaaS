import React, { Component } from 'react';
import './register.css';
import Carousel from '../carousel/carousel';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActivationSent: false,
        }
    }
    render() {
        let cardSwitcher;
        if (this.state.isActivationSent === false) {
            cardSwitcher =
                <div>
                <div style={{ color: '#8D9293', marginTop: '20%' }}>
                    Just enter details and verify your account.
                   
                </div>
                <div className='card-reg'>
                    <div style={{ color: '#8D9293', fontSize: '1em' }}>Email Address</div>
                    <input className='email-input' ></input>
                    <div style={{ color: '#8D9293', fontSize: '1em', marginTop:'20%' }}>Password</div>
                    <input className='password-input' type='password' ></input>
                    <input type='checkbox'></input>
                    <div fontSize='1em' color='#969598'>I am not interested in updates about Schrocken products and services. <a href="">Privacy Policy.</a></div>   
                    <button className='submit-button1' onClick={this.buttonSubmit}>Continue</button>
                </div>
                </div> 
        }
        else {
            cardSwitcher =
                <div>
                
                </div>
        }
        return (
            <div >
                <div className='primary-grid'>
                    <div className='carousel-box'>
                       <Carousel/>
                </div>


                    <div className='signup-box'>
                        <div
                            style={{ marginTop: '5%', fontSize: '2.5em', color: '#498FE2' }}> Sign Up for An Account
                            </div>
                        <div
                            style={{ color: '#8D9293', marginTop: '2%' }}>Get started with a Schrocken Account.
                            </div>
                        {cardSwitcher}
                        
                </div>
                </div>
            </div>
        );
    }
}
export default Register;
