import React, {Component} from 'react';
import {Link} from 'react-router-dom';

var bnr = require('./../../images/banner/inner-banner.jpg');

class InnerBanner extends Component{
	render(){
		return(
			<div className="inner-banner overlay-black-middle" style={{backgroundImage:"url("+ bnr + ")" }}>
				<div className="container">        
					<div className="row">
						<div className="col-md-6 banner-c-table left">
							<div className="cont"> 
							<form action="#">
							<input  type="text" className="validate" placeholder="Pickup Addres or Airport" />

							<input  type="text" className="validate"  placeholder="Drop-off Addres or Airport"/>

							<div>
							<input  type="text" className="validate"  placeholder="Day"/>
							<input  type="text" className="validate"  placeholder="Time"/>

							</div>
							<input  type="submit" className="validate" />
							</form>
							</div>
						</div>
						<div className="col-md-6 right">
							<div className="bnr-content text-center">
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