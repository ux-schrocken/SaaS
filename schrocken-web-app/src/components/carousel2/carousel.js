
import React, { Component } from 'react';
import ReactDOM from 'react-router-dom';
import 'antd/dist/antd.css';
import './carousel.css';
import { Carousel } from 'antd';

class CarouselEffect extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay >
          
          <div>
            <div className='textfloat'>
              <img
                src={require("../../assets/images/bg-Slide1.png")}
                style={{ maxHeight: '100vh', maxWidth: '500px' }}
              />
              <div class="textcentered">
                <br /><br /><br /> 
                 "Removal of intermediaries- blockchain based systems allow for the removal of intermediaries involved in the record keeping and transfer of assets." <br/> <br/>
               <div style={{fontSize:'0.6em'}}>&nbsp; - Mark Gates</div>
                </div>
            </div>
          </div>

          <div>
            <div className='textfloat'>
              <img
                src={require("../../assets/images/bg-Slide2.png")}
                style={{ maxHeight: '100vh', maxWidth: 'auto' }}
              />
              <div class="textcentered">
              <br /><br /><br /> 
                 "Removal of intermediaries- blockchain based systems allow for the removal of intermediaries involved in the record keeping and transfer of assets." <br/> <br/>
               <div style={{fontSize:'0.6em'}}>&nbsp; - Mark Gates</div>
                </div>
            </div>
          </div>

          <div>
            <div className='textfloat'>
              <img
                src={require("../../assets/images/bg-Slide3.png")}
                style={{ maxHeight: '100vh', maxWidth: 'auto' }} />
              <div class="textcentered">
              <br /><br /><br /> 
                 "Removal of intermediaries- blockchain based systems allow for the removal of intermediaries involved in the record keeping and transfer of assets." <br/> <br/>
               <div style={{fontSize:'0.6em'}}>&nbsp; - Mark Gates</div>
                </div>
            </div>
          </div>

        </Carousel>
      </div>
    );
  }
}
export default CarouselEffect;