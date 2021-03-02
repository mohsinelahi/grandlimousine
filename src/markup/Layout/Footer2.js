import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footerowl from './../Element/Footerowl';
class Footer2 extends Component{
	render(){
		return(
			<footer className="site-footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
								<div className="widget">
									<img src={require("./../../images/logo-white.png")} className="m-b30" alt="" width="180" />
									<p className="text-capitalize m-b30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                            
									<ul className="list-inline m-a0">
										<li><Link to={""} className="site-button circle"><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={""} className="site-button circle"><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={""} className="site-button circle"><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={""} className="site-button circle"><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={""} className="site-button circle"><i className="fa fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-8 col-sm-8 col-12">
								<div className="widget border-0">
									<h5 className="m-b30">Frequently Asked Questions</h5>
									<ul className="list-2 list-line">
										<li><Link to={""}>Hotel</Link></li>
										<li><Link to={""}>Restaurant</Link></li>
										<li><Link to={""}>Appartment</Link></li>
										<li><Link to={""}>SPA & Beauty</Link></li>
										<li><Link to={""}>Atuomation</Link></li>
										<li><Link to={""}>Travel</Link></li>
										<li><Link to={""}>How It Works</Link></li>
										<li><Link to={""}>For Employers</Link></li>
										<li><Link to={""}>Underwriting</Link></li>
										<li><Link to={""}>Contact Us</Link></li>
										<li><Link to={""}>Lending Licnses</Link></li>
										<li><Link to={""}>Support</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12">
								<div className="widget border-0">
									<h5 className="m-b30">Help</h5>
									<ul className="list-1 list-block ist-line">
										<li><Link to={""}>Hotel</Link></li>
										<li><Link to={""}>Restaurant</Link></li>
										<li><Link to={""}>Appartment</Link></li>
										<li><Link to={""}>SPA & Beauty</Link></li>
										<li><Link to={""}>Atuomation</Link></li>
										<li><Link to={""}>Travel</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
								<div className="widget widget_subscribe">
									<h5 className="m-b30">Subscribe With Us</h5>
									<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.</p>
									<div className="subscribe-form m-t20">
										<form className="dzSubscribe" action="script/mailchamp.php" method="post">
											<div className="dzSubscribeMsg"></div>
											<input name="dzEmail" required="required" className="form-control" placeholder="Your Email Address" type="email" />
											<button name="submit" value="Submit" type="submit" className="site-button m-t20 btn-block radius-xl">Subscribe</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						
						<Footerowl  />
						
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span className="fbottom-like"> Design With <Link to={""} className="like-btn" ><i className="fa fa-heart"></i></Link> By DexignZone </span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
export default Footer2;