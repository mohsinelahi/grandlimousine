import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';

// var aboutimg3 = require('./../../images/services/Grand-Limousine-MKT.jpg');



class About extends Component{
	render(){
		return(
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">

                <InnerBanner />

                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">About Us – Grand Limousine</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine – " Trusted Quality Dependable Service Since 2007 "</p>
                        </div>
                    </div>
                </section>

                <section className="about-content heading pb-5">
                    <div className="container">

                        {/* <div className="aboutlimo1 text-center m-5">
                        <img src={aboutimg3}></img>
                        </div> */}

                        <p><strong>About Us </strong> – Are you looking for a reliable limousine Service near you? If yes, then we are here to help. Grand Limousine is one of the best companies specializing in offering chauffeur-driven Car and Limousine services in Georgia, Florida, New York, California, and Texas. Our exclusive car services are available at competitive rates. We are presenting high-end limousine and luxury transportation. Also, we have been in this town car service business for more than 15 years. That is why you can entirely rely on us. It is a sincere, custom limousine service.</p>
                        <p>Here at Grand Limousine, we have designed our limousine and car services with great care and attention. Our professional chauffeurs always strive to meet your transport needs. We do our level best to make your transportation safer, more satisfactory, and hassle-free. Whether you need our service for an airport transfer, private tour, particular event transfer, or limousine tour, we are here to help you out. You call us on (404) 424-4499.</p>
                        <p>With Grand Limousine, you can enjoy reliable transport that is both safe and affordable. The professional and knowledgeable chauffeurs operate all our cars. Also, our friendly staff offers you the best customer support. We provide you with the advanced facilities so you can enjoy the ride to the fullest.</p>
                   
                        <h4>No compromise with quality customer service</h4>
                        <p>Our group of staff strives to provide the best customer care. From the business to the individual transport need, we try our best to exceed your expectations. It is our commitment to meet clients’ needs that makes Grand Limousine one of the most excellent limousine service providers in the industry. Whether you need an airport chauffeur transfer, corporate transportation, or wedding limousine, we are here to serve you. We take pride in our record of many satisfied customers.</p>

                        <h4>About Our Vehicles at a Glance</h4>
                        <p>We are introducing an exclusive range of the fleet for limousine and airport car. You will find various rides from traditional stretch limos, SUVs, to exotic and classic sedans and coach party buses. We always take the best care of these vehicles to make sure these are still in excellent condition.</p>
                        <p>All of our vehicles have state-of-the-art technology. Our business loyalty rates and custom party packages are available at competitive prices. We have designed these to meet the personal needs of our clients in Georgia, Texas, California, Illinois, Florida, and New York. Contact us whenever you need our services.</p>

                        <h4>About Trained Chauffeurs with years of experience</h4>
                        <p>We select our chauffeurs with great attention and care. All of them carry out individual instruction in customer etiquette. Thus, they assure the safest town car services. Also, they hold advanced training on high standards for safety.</p>
                        <p>Our chauffeurs have years of experience in the limousine and airport car business. Also, these professionals hold proper training. They understand their obligation to provide more than a regular limousine service. We must make your journey more secure and comforting. Call us at (404) 424-4499 to book your car.</p>
                    </div>
                </section>


                <Toplimousine />

            </div>
            <Footer  />
        </div>
		)
	}
}

export default About;