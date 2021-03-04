import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import GoogleMaps from "simple-react-google-maps";
import Contactus from './../Element/Contactus';
import InnerBanner from '../Element/Innerbanner';

class Contact extends Component{
	render(){
		return(
			<div className="page-wraper">
			
				<Header />
				
				
				
				<div className="page-content bg-white">
				
					<InnerBanner />
					
					
					<section className="section-full content-inner">
						<div className="container">
							<div className="section-head inner-section-head text-black text-center">
								<h2 className="box-title">Contact Us – Grand Limousine</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
							</div>
							<div className="contact-us-main heading">
								<h4>Drop us a line or just say Hello!</h4>
								<form action="#" className="form-style">
										<div className="form-group mb-3">
											<div className="row">
												<div className="col-lg-6">
													<input type="text" className="form-control"  placeholder="First Name"/>
												</div>
												<div className="col-lg-6">
													<input type="text" className="form-control"  placeholder="Last Name"/>
												</div>
											</div>
										</div>
										<div className="form-group mb-3">
											<div className="row">
												<div className="col-lg-6">
													<input type="email" className="form-control"  placeholder="Email"/>
												</div>
												<div className="col-lg-6">
													<input type="phone" className="form-control"  placeholder="Phone"/>
												</div>
											</div>
										</div>
									<button type="submit" className="submit-btn">Send Message</button>
								</form>
								<div className="deal-with-us">
									<h4>Come and Deal with us</h4>
									<strong>Grand Limousine</strong> offers the best transport so you can make the most of your business or leisure trip. This is what we take pride in. We provide all our clients with a superlative quality personalized solution for transport.
									<ul>
										<li>Address: <a href="https://g.page/grand-limousine-houston?share">13503 Somersworth Dr, Houston, TX 77041, Georgia, USA</a> </li>
										<li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
										<li>Email: <a href="mailto:info@grandlimousine.com"> info@grandlimousine.com </a></li>
									</ul>
								</div>
							</div>
						</div>
					</section>


					<section className="section-full content-inner top-limousine-section">
						<div className="container">
							<div className="top-limousine-head text-center">
								<h4>Our Top Limousine Service Locations</h4>
								<p>Grand Limousine & Chauffeur Service Top Locations</p>
								<ul>
									<li><a href="#">Airport Transportation in Augusta, Georgia</a></li>
									<li><a href="#">Airport Transportation in Houston, Texas</a></li>
									<li><a href="#">Airport Transportation in Destin, Florida</a></li>
									<li><a href="#">Airport Transportation in Los Angeles, California</a></li>
									<li><a href="#">Airport Transportation in Jacksonville, Florida</a></li>
									<li><a href="#">Airport Transportation in Macon, Georgia</a></li>
									<li><a href="#">Airport Transportation in Orlando, Florida</a></li>
									<li><a href="#">Airport Transportation in San Francisco, California</a></li>
									<li><a href="#">Airport Transportation in NewYork</a></li>
									<li><a href="#">Airport Transportation in Gray, Georgia</a></li>
									<li><a href="#">Airport Transportation in Chicago, Illinois</a></li>
									<li><a href="#">Airport Transportation in Columbus, Georgia</a></li>
									<li><a href="#">Airport Transportation in Miami, Florida</a></li>
									<li><a href="#">Airport Transportation in Atlanta, Georgia</a></li>
									<li><a href="#">Airport Transportation in Savannah, Georgia</a></li>
									<li><a href="#">Airport Transportation in Palm Beach, Florida</a></li>
									<li><a href="#">Airport Transportation in Kentucky</a></li>
								</ul>
							</div>
						</div>
					</section>
				</div>		
				
				<Footer  />
			</div>
		)
	}
}

export default Contact;