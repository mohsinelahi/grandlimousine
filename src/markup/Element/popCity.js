import React,{Component} from 'react';
import {Link} from 'react-router-dom';


const cityBlog = [
	{
		image: require('./../../images/destinations/pic3.jpg'),
		title: 'San Francisco, CA',
		Link: '/locations/san-francisco/',
		alt: 'San Francisco, CA',
	},
	{
		image: require('./../../images/destinations/pic4.jpg'),
		title: 'Los Angeles, CA',
		Link: '/locations/los-angeles/',
		alt: 'Los Angeles, CA',
	},
	{
		image: require('./../../images/destinations/pic3.jpg'),
		title: 'Houston, TX',
		Link: '/locations/houston/',
		alt: 'Houston, TX',
	},
	{
		image: require('./../../images/destinations/pic4.jpg'),
		title: 'Chicago, IL',
		Link: '/locations/chicago/',
		alt: 'Chicago, IL',
	},
];



class popCity extends Component{
	
	render(){

		return(
					
			<div className="row">
				{cityBlog.map((item,index) => (
					<div className="col-lg-3 col-md-6 col-sm-6" key={index}>
					
						<div className="featured-bx m-b30">
							<div className="featured-media">
								<Link to={item.Link}> <img src={item.image} alt={item.alt}/> </Link>
								
							</div>	
							<div className="featured-info">
								<ul className="featured-star">
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
								<h5 className="title"><Link to={"./"}>{item.title}</Link></h5>
								<ul className="featured-category">
									
									<li><i className="fa fa-map-o"></i> 30+ Listing</li>
								</ul>
							</div>
						</div>
					
					</div>
				))}
			</div>
					
		)
	}
}

export default popCity;