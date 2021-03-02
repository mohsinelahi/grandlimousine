import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import Header from './../Layout/Header';
import Footer	from './../Layout/Footer';

import Popcity from './../Element/popCity';
import Topplacesowl from './../Element/Topplacesowl';
import Userowl from './../Element/Userowl';
import Fromblog from './../Element/Fromblog';

import Tabcontent from './../Element/Tabcontent';

var bnr = require('./../../images/main-slider/banner-image.jpg');

var img1 = require('./../../images/background/bg1.jpg');



class Homepage extends Component{
	render(){
		return(
			
			<div className="page-wraper">
				<Header />

				<div className="page-content bg-white">

					<div className="dlab-bnr-inr dlab-bnr-inr-md main-home-banner" style={{backgroundImage:"url(" + bnr + ")", backgroundSize: "cover"}}>
			            <div className="container">
						<div className="row">
    

						<div className="col-md-4 banner-c-table left">
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

						<div className="col-md-8">
    
	
						<div className="dlab-bnr-inr-entry align-m dlab-home right">
								<div className="bnr-content">
									<h2><strong>BOOK YOUR RIDE INSTANTLY</strong> TRAVEL IN CONFORT. ALWAYS ON TIME </h2>
									<h5>Call <a href="tel:(404) 424-4499">(404) 424-4499</a></h5>
							
								</div>
								
								<div className="dlab-tabs search-filter">
									<Tabcontent />
								</div>
								
								{/* <div className="category-bx">
									<Link to={"./listing-left-sidebar"} className="category">
										<i className="flaticon-cart-of-ecommerce"></i>
										<p>carts</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-carrot"></i>
										<p>foods</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-hockey"></i>
										<p>candy</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-pill-capsule"></i>
										<p>medicine</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-birthday-cake"></i>
										<p>cake</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-place"></i>
										<p>place</p>
									</Link>
								</div> */}
							</div>
	</div>



							</div>
			            </div>
			        </div>




					<div className="content-block">
						

						
						{/* <Topplacesowl /> */}



						<div className="section-full home-top-cities bg-white content-inner">
							<div className="container">
								<div className="section-head text-black text-center">
									<h2 className="box-title">Top Cities</h2>
									<div className="dlab-separator bg-primary"></div>
								</div>
								
								<Popcity />
								
							</div>
						</div>




						
						
						<div className="section-full home-about bg-img-fix most-visited content-inner overlay-primary-dark" style={{backgroundImage:"url(" + img1 + " )" }}>
							<div className="container">
								<div className="section-head text-white text-center">
									<h2 className="box-title">GRAND LIMOUSINE – OFFICIAL WEBSITE</h2>
									<div className="dlab-separator bg-white"></div>
									<p>THE WORLD’S LEADING PROVIDER OF HIGH-QUALITY CHAUFFEURED CAR & LIMOUSINE SERVICES</p>
								</div>
								<div className="row">

								<div className="col-md-6"> 
									<div className="left"> 
									<img src={require('./../../images/about-limo.jpg')} />
								
									</div>
								</div>


								<div className="col-md-6"> 
									<div className="right"> 
									<h4>GRAND LIMOUSINE</h4>
									<h2>BOOK DIRECT SINCE 2007</h2>
									<p>	Now, you can book Limousine or Airport Car Service Direct with us. Fast Booking Curbside Assist and Escort Chauffeurs from The Most Trusted Worldwide Name In Travel. Providing Direct Destination Ready Limousine and Airport Car Service. The World’s Leading Provider of High-Quality Chauffeur & Limousine Services. Car Service, and Party Bus. Book Direct Premium Limousine Service Since 2007.</p>

									<p>If you require an Airport Car – SUV, Wedding, Bachelor Parties, Bachelorette Parties, Proms, Hotel pick up, Corporate transfer. Take a look at our fleet and let us know how we can help you with your special occasion. Our Luxury Mercedes Sprinter Limousine & Private Airport Car Service has Exceptional Trusted Professionalism. We serve a level of premium quality in the convenience of 5 Markets.</p>
									<a target="_blank" href="./" >Learn More</a>
									<span>
									<img src={require('./../../images/limo-pic.png')} />
									</span>
									</div>
								</div>









									{/* <div className="col-md-6">
										<div className="icon-bx-wraper sr-box center box1 m-b30">
											<div className="icon-bx-lg radius bg-white m-b20"><Link to={""} className="icon-cell text-primary"><i className="ti-search"></i></Link> </div>
											<div className="icon-content">
												<h3 className="dlab-tilte">Choose What To Do?</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="icon-bx-wraper sr-box center  m-b30">
											<div className="icon-bx-lg radius bg-white m-b20"><Link to={""} className="icon-cell text-primary"><i className="ti-gift"></i></Link> </div>
											<div className="icon-content">
												<h3 className="dlab-tilte">Find What Your Want?</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
											</div>
										</div>
									</div> */}
									
								</div>
							</div>
						</div>
						
						{/* <div className="section-full content-inner bg-gray">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="box-title">What Our Users Say</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
								</div>
								<div className="container">
											
									<Userowl  />
									
								</div>		
							</div>
						</div> */}











						
						<div className="section-full home-services bg-white content-inner">
							<div className="container">
								<div className="section-head text-black text-center">
									<h2 className="box-title">WE CARE ABOUT YOUR SAFETY</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>ENJOY LUXURY TRAVEL IN COMFORT AND ON TIME !</p>
								</div>
								
								<Fromblog />
							</div>
						</div>		
						
					</div>	
				








				</div>	
				
				<Footer />
				
			</div>
			
			
		)
	}
	
}

export default Homepage;