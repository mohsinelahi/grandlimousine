import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookingform from './Bookingform';

var bnr = require('./../../images/banner/inner-banner.jpg');

class InnerBanner extends Component{
	render(){
		return(
			<div className="inner-banner overlay-black-middle" style={{backgroundImage:"url("+ bnr + ")" }}>
				<div className="container">        
					<div className="row">
						<div className="col-md-6">
								<Bookingform />
						</div>
						<div className="col-md-6">
							<div className="bnr-content text-right">
								<h2><a href="#"> BOOK YOUR RIDE INSTANTLY </a></h2>
								<h6>TRAVEL IN CONFORT. ALWAYS ON TIME </h6>
								<h3>Call <a href="tel:(404) 424-4499">(404) 424-4499</a></h3>
							</div>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default InnerBanner;