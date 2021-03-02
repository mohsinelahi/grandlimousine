import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Register extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				<div className="page-content dlab-login" >
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-4 login-form-box">
								<div className="login-form">
									<div className="logo">
										<Link to={"./"}><img src={require("./../../images/logo-black.png")} alt=""/></Link>
									</div>
									<div className="tab-content nav">
										<div id="login" className="tab-pane active">
											<form className="dlab-form">
												<h3 className="form-title m-t0">Welcome back, please login to your account</h3>
												<div className="text-center m-b20">
													<Link to= {"#"} className="site-button facebook btn-block"><i className="fa fa-facebook-official m-r10"></i> Log in with Facebook</Link>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Username or Email Address" type="text"/>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password"/>
												</div>
												<div className="form-group field-btn text-left">
													<div className="input-block">
														<input id="check1" type="checkbox" />
														<label htmlFor="check1">Remember me</label>
													</div>
													<Link data-toggle="tab" to="#forgot-password" className="btn-link forgot-password"> Forgot Password</Link>
												</div>
												<div className="form-group">
													<button className="site-button btn-block button-md">login</button>
												</div>
												<div className="form-group">
													<p className="info-bottom">Don’t have an account? <Link data-toggle="tab" to="#register" className="btn-link">Register</Link> </p>
												</div>
											</form>
										</div>
										<div id="forgot-password" className="tab-pane fade">
											<form className="dlab-form">
												<h3 className="form-title m-t0">Find Your Account</h3>
												<div className="form-group text-center">
													<Link to="#" className="site-button facebook btn-block"><i className="fa fa-facebook-official m-r10"></i> Log in with Facebook</Link>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Email Id" type="text"/>
												</div>
												<div className="form-group"> 
													<button className="site-button btn-block button-md">Get New Password</button>
												</div>
												<div className="form-group">
													<p className="info-bottom">
														<Link data-toggle="tab" to="#login" className="btn-link">Login </Link> | 
														<Link data-toggle="tab" to="#register" className="btn-link">Register</Link> 
													</p>
												</div>
											</form>
										</div>
										<div id="register" className="tab-pane fade">
											<form className="dlab-form">
												<h3 className="form-title m-t0">Create an account! It's free and always will be.</h3>
												<div className="form-group text-center">
													<Link to="#" className="site-button facebook"><i className="fa fa-facebook-official m-r10"></i> Log in with Facebook</Link>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Full Name" type="text"/>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Email Id" type="text"/>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Address" type="text"/>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="City/Town" type="text"/>
												</div>
												<h6 className="text-inherit m-b10">Enter your account details below: </h6>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="User Name" type="text"/>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Password" type="text"/>
												</div>
												<div className="form-group">
													<input name="dzName" required="" className="form-control" placeholder="Re-type Your Password" type="text"/>
												</div>
												<div className="form-group">
													<input type="checkbox" id="privacy-policy" />
													<label htmlFor="privacy-policy">I agree to the <Link to="#" className="btn-link">Terms of Service </Link>& <Link to="#" className="btn-link">Privacy Policy </Link></label>
												</div>
												<div className="form-group"> 
													<button className="site-button button-md btn-block">Submit</button>
												</div>
												<div className="form-group">
													<p className="info-bottom">
														<Link data-toggle="tab" to="#login" className="btn-link">Login with username and password?</Link> 
													</p>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8 bg-primary">
								<div className="content-info">
									<ul className="list-info">
										<li>
											<div className="dlab-box">
												<i className="fa fa-bullhorn"></i>
												<p>Get personalized advice from the friends and travel experts you trust</p>
											</div>
										</li>
										<li>
											<div className="dlab-box">
												<i className="fa fa-car"></i>
												<p>Easily find hotels, things to do & restaurants that are right fr you</p>
											</div>
										</li>
										<li>
											<div className="dlab-box">
												<i className="fa fa-check"></i>
												<p>It's everything you need to know</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
}

export default Register;