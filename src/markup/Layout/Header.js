import React, {Component} from 'react';
import  {Link} from 'react-router-dom';

class Header extends Component{
	componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

    }
	
	render(){
		return(
			<header className="site-header header-transparent mo-left">
				
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix ">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
								<Link to={"/"} className="logo-1"><img src={require("../../images/logo-grand.png")} alt="Logo Grand Limousine" /></Link>
								<Link to={"/"} className="logo-2"><img src={require("./../../images/logo-grand.png")} alt="Logo Grand Limousine" /></Link> 
							</div>
							
							<button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
						
							
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
								<ul className="nav navbar-nav">              
										
									<li className=""><Link to={"/super-bowl/"} rel="noopener noreferrer">The Super Bowl</Link></li>
									<li className=""><Link to={"/about-us/"} rel="noopener noreferrer">About Us</Link></li>
									<li className="down"><Link to={"#"}>Services <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/limousine-service/"} rel="noopener noreferrer">Limousine Service</Link></li>
											<li><Link to={"/corporate-transportation/"} rel="noopener noreferrer">Corporate Transportation</Link></li>
											<li><Link to={"/wedding-transportation/"} rel="noopener noreferrer">Wedding Limousine Service<span className="tag-new">New</span></Link></li>
											<li><Link to={"/airport-car-service/"} rel="noopener noreferrer">Airport Car Service<span className="tag-new">New</span></Link></li>
											<li><Link to={"/wine-tour/"} rel="noopener noreferrer">Wine Tour<span className="tag-new">New</span></Link></li>
											<li><Link to={"/transportation-coordinator/"} rel="noopener noreferrer"> Transportation Coordinator<span className="tag-new">New</span></Link></li>
											<li><Link to={"/church-limo/"} rel="noopener noreferrer">Church Limo<span className="tag-new">New</span></Link></li>
											<li><Link to={"/casino-trips/"} rel="noopener noreferrer">Casino Trips<span className="tag-new">New</span></Link></li>
											<li><Link to={"/party-limo/"} rel="noopener noreferrer">Party Limo<span className="tag-new">New</span></Link></li>
											<li><Link to={"/bachelor-party/"} rel="noopener noreferrer">Bachelor Party<span className="tag-new">New</span></Link></li>
											<li><Link to={"/bachelorette-party/"} rel="noopener noreferrer">Bachelorette Party<span className="tag-new">New</span></Link></li>
											<li><Link to={"/graduation-limo/"} rel="noopener noreferrer">Graduation Limo<span className="tag-new">New</span></Link></li>
											<li><Link to={"/concert-limo/"} rel="noopener noreferrer">Concert Limo<span className="tag-new">New</span></Link></li>
										</ul>
									</li>
									<li className="down"><Link exact to={"/locations/"} rel="noopener noreferrer">Top Cities <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/locations/atlanta/"} rel="noopener noreferrer">Atlanta, GA <span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/augusta/"} rel="noopener noreferrer">Augusta, GA<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/columbus/"} rel="noopener noreferrer">Columbus, GA<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/chicago/"} rel="noopener noreferrer">Chicago, IL<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/destin/"} rel="noopener noreferrer">Destin, FL<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/gray/"} rel="noopener noreferrer">Gray, GA<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/houston/"} rel="noopener noreferrer">Houston, TX<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/jacksonville/"} rel="noopener noreferrer">Jacksonville, FL<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/los-angeles/"} rel="noopener noreferrer">Los Angeles, CA <span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/kentucky-car-service/"} rel="noopener noreferrer"> Louisville, KY <span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/macon/"} rel="noopener noreferrer">Macon, GA<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/miami/"} rel="noopener noreferrer">Miami, FL<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/new-york/"} rel="noopener noreferrer">New York<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/orlando/"} rel="noopener noreferrer">Orlando, FL<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/palm-beach/"} rel="noopener noreferrer">Palm Beach, FL<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/san-francisco/"} rel="noopener noreferrer">San Francisco, CA<span className="tag-new">New</span></Link></li>
											<li><Link to={"/locations/savannah/"} rel="noopener noreferrer">Savannah, GA<span className="tag-new">New</span></Link></li>
											<li><Link exact to={"/locations/"} rel="noopener noreferrer">All Locations & Services<span className="tag-new">New</span></Link></li>
										
										</ul>
									</li>
									<li className=""><Link to={"/posts/"} rel="noopener noreferrer">Posts</Link></li>
									<li><Link to={"/contact-us/"} rel="noopener noreferrer">Contact Us</Link></li>
									<li className="my-account" ><a href="https://account.chauffeurbookingsoftware.com/account/login/?guid=123fd7f0-ff6c-4a9d-80fb-05c694c9ed03" rel="noopener noreferrer" target="_blank">My Account <i className="ti-import m-r5 rotate90"></i> </a></li>
								</ul>		
							</div>
						</div>
					</div>
				</div>
				
			</header>
		)
	}
}

export default Header;
