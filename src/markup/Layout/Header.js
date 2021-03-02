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
								<Link to={"./"} className="logo-1"><img src={require("../../images/logo-grand.png")} alt="" /></Link>
								<Link to={"./"} className="logo-2"><img src={require("./../../images/logo-grand.png")} alt="" /></Link> 
							</div>
							
							<button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									<a href="https://account.chauffeurbookingsoftware.com/account/login/?guid=123fd7f0-ff6c-4a9d-80fb-05c694c9ed03" target="_blank" className="site-button-link white head-myacc">My Account<i className="ti-import m-r5 rotate90"></i></a>
								</div>
							</div>
							
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
								<ul className="nav navbar-nav">              
									<li className=" active"><Link to={""}>Grand Limousine</Link></li>
										
									<li className=""><Link to={"/super-bowl"}>The Super Bowl</Link></li>
									<li className=""><Link to={"/about-us"} >About Us</Link></li>
									<li className="down"><Link to={"#"}>Services <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/limousine-service"}>Limousine Service</Link></li>
											<li><Link to={"/corporate-transportation"}>Corporate Transportation</Link></li>
											<li><Link to={"/wedding-transportation"}>Wedding Limousine Service<span className="tag-new">New</span></Link></li>
											<li><Link to={"/airport-car-service"}>Airport Car Service<span className="tag-new">New</span></Link></li>
											<li><Link to={"/wine-tour"}>Wine Tour<span className="tag-new">New</span></Link></li>
										</ul>
									</li>
									<li className="down"><Link to={"/top-cities"}>Top Cities <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"#"}>San Francisco, CA</Link></li>
											<li><Link to={"#"}>Los Angeles, CA<span className="tag-new">New</span></Link></li>
											<li><Link to={"#"}>Houston, TX<span className="tag-new">New</span></Link></li>
											<li><Link to={"#"}>Chicago, IL<span className="tag-new">New</span></Link></li>
											
											

											
										</ul>
									</li>
									<li className=""><Link to={"/posts"}>Posts</Link></li>
									<li><Link to={"/contact-us"}>Contact Us</Link></li>
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
