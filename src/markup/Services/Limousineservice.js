import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';

var limousineimg = require ('./../../images/services/grand_limousine_service.png');

class Limousineservice extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">

                <InnerBanner />

                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Limousine Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>

                <section className="section-full services-main">
                    <div className="container">
                        <div className="services-content heading">
                            <div className="content-img">
                                <div className="left">
                                    <h4>Limousine Service</h4>
                                    <p><strong>Limousine Service –</strong>  When it is about the limousine services, <Link to={"/limousine-service/"} className={"anchor"} rel="noopener noreferrer"> Grand Limousine</Link> is the right option for you. Whether you want to make your entry at any special event attractive or want to enjoy a luxury limo ride, we are there to serve you. We take pride in having an exclusive collection of limousines. No matter what your profession is, we are sure that we have the perfect transport solutions to suit your requirements. You rely on us.</p>
                                    <p>Grand Limousine is providing the best and luxury transport solutions, New York, California, Florida, and Texas. All our town car services are <a href="https://www.facebook.com/carservicehouston/" target="_blank" className="anchor" rel="noopener noreferrer"> available </a>at competitive rates. That is why, overall, you will find the price very affordable and even way cheaper, especially when you are traveling with a group of people.</p>
                                </div>   
                                <div className="right">
                                    <img src={limousineimg} ></img>
                                </div>
                            </div>
                                <h4>Opt for advanced limousine services booking</h4>
                                <p>During the peak wedding season, the limousines are high in demand. That is why so you don’t miss an exclusive deal for your bridal party, book your wedding limo earlier. We have a unique collection of wedding limos.</p>
                                <p>The peak season for the limousine services is the vacations around the high school graduation, weekends, and wedding seasons. To get your best deal for car service, book your car earlier. If you plan to book your limo at the eleventh hour, you are likely to miss the best deal for wedding car services or party buses.</p>
                        
                                <h4>Number of travelers and other specifications</h4>
                                <p>Before booking your car services, let us know all the details about your party so we can help with planning. We will suggest you the right vehicle with the right capacity. Also, inform us how long you will require these services. If you need extra facilities such as champagne and snacks during your journey, let us know. However, this facility is available for most functions, bachelor parties, but not for proms.</p>
                        
                                <h4>Limousine Service–Choose bigger for safer rides</h4>
                                <p>The limousines can carry more or less 8-15 travelers. The bigger rides will be more expensive than the standard options. However, if you think hiring a big car for your group will not be affordable, you are wrong. We charge the rate per hour but not per head. That is why if you have a large gang of travelers, it will be even easier on your pocket.</p>
                                <p>Since we charge per hour, you can make the most of the capacity of the vehicle. That is why whether you are riding alone or you are riding with a big group of friends, the charge won’t vary depending on that. You call us on <strong><a href="tel:4044244499">(404) 424-4499</a></strong>.</p>
                        
                                <h4>Let us know about the event</h4>
                                <p>We offer added facilities such as car decoration on an extra charge. Thus, we strive to make your journey even more enjoyable on value addition. Let us know the event, and we will offer you a personalized solution.</p>
                        
                                <h4>Your comfort and safety is what we seek</h4>
                                <p>The limousine service provider you will contract will contribute to making your experience the best or worst. To keep hassles at bay, make sure the service provider you are hiring is a reputed one such as Grand Limousine. You can check the reputation in places such as BBB and the trusted review sites. Make sure your service provider has been serving in your locality for years. We know all the routes and destinations in the area.</p>
                                <p>The reputed car service companies such as our Grand Limousine will provide attention to details so you can stay on the side of the safety. Don’t forget to tip your chauffeur if he offers exemplary <Link to={"/locations/destin/"} className={"anchor"} rel="noopener noreferrer"> limousine </Link> service. Our staff will help make your evening enjoyable, and your smake their evening too. For more details, please <Link to={"/contact/"} className={"anchor"} rel="noopener noreferrer"> contact </Link>us immediately.</p>
              
                        </div>
                    </div>
                  
                </section>


                <Quotebox />

                <Toplimousine />

            </div>
            <Footer  />
        </div>
        )
    }
}

export default Limousineservice;