import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
	render(){
		return(
			<footer className="site-footer cstm-footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
								<div className="widget">
									<img src={require("./../../images/logo-grand.png")} className="m-b15" alt="" width="180" />
									<p className="text-capitalize m-b20">Grand Limousine and chauffeur service is committed to the success of your business or leisure travel. We are proud to provide all of our clients with the highest level of personalized care and chauffeur service.</p>
									<div className="subscribe-form m-b20">
										<form className="dzSubscribe" action="script/mailchamp.php" method="post">
											<div className="dzSubscribeMsg"></div>
											<div className="input-group">
												<input name="dzEmail" required="required" className="form-control" placeholder="Your Email Address" type="email" />
												<span className="input-group-btn">
													<button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
												</span> 
											</div>
										</form>
									</div>
									<ul className="list-inline social-icon  m-a0">
										<li><Link to ={""} className="site-button facebook circle "><i className="fa fa-facebook"></i></Link></li>
										<li><Link to ={""} className="site-button twitter circle "><i className="fa fa-twitter"></i></Link></li>
										<li><Link to ={""} className="site-button instagram circle "><i className="fa fa-instagram"></i></Link></li>
									
										
									</ul>
								</div>
							</div>
							<div className="col-xl-4 col-lg-5 col-md-7 col-sm-12 col-12">
								<div className="widget border-0">
									<h5 className="m-b30 text-white">Navigation</h5>
									<ul className="list-2 list-line">
										<li><Link to={"/"}>Grand Limousine</Link></li>
										<li><Link to={"/super-bowl"}>The Super Bowl</Link></li>
										<li><Link to={"/about-us"}>About Us</Link></li>
										<li><Link to={""}>Services & Beauty</Link></li>
										<li><Link to={"/locations/"}>Top Cities</Link></li>
										<li><Link to={"/posts"}>Posts</Link></li>
										<li><Link to={"/contact-us"}>Contact Us</Link></li>
										<li><a href="https://account.chauffeurbookingsoftware.com/account/login/?guid=123fd7f0-ff6c-4a9d-80fb-05c694c9ed03" target="_blank">My Account</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
								<div className="widget widget_getintuch">
									<h5 className="m-b30 text-white">Contact us</h5>
									<ul>
										<li><i className="ti-location-pin"></i><strong>address</strong> <a target="_blank" href="https://goo.gl/maps/ob8TJNCTuX7d5RWG9" >houston, tx 77041, texas, usa</a></li>
										<li><i className="ti-mobile"></i><strong>phone</strong><a href="tel:+1 (404) 424-4499" >+1 (404) 424-4499</a></li>
										<li><i className="ti-email"></i><strong>email</strong><a target="_blank" href="mailto:info@grandlimousine.com" >info@grandlimousine.com</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom cstm-copyrights">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span className="fbottom-like"> © 2021, Grand Limousine. All Rights Reserved.</span>

							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;