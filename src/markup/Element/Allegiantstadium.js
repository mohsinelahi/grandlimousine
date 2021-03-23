import React, {Component} from 'react';
import {Link} from 'react-router-dom';

var allegiantstadiumimg1 = require('./../../images/allegiantstadium/So-Fi_Stadium.jpg');


class Allegiantstadium extends Component{
	render(){
		return(

         
                <div className="allegiant-stadium text-center">
                    <img src={allegiantstadiumimg1}></img>
                    <div className="allegiant-stadium-btn custom-btn">
                        <a href="/contact-us/">Contact Us</a>
                        <a href="tel:4044244499"> Call (404) 424-4499  </a>
                    </div>
                </div>
    

            )
        }
    }
export default Allegiantstadium;