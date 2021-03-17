import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import InnerBanner from '../Element/Innerbanner';


var Louisvilleimg1 = require('../../images/cities/limo_chauffeur_service.jpg');


class Louisville extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Kentucky Car Service Louisville (SDF) Airport Limousine</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Louisville Kentucky Derby Car Service</h4>
                                        <p>Kentucky Car Service – You will come across different chauffeur limousine service providers in Kentucky. Among them, choosing Kentucky Car Service will be a great idea. We have a wide range of limousine services and cars to offer. You can get Kentucky Car Service transportation, airport shuttle, executive car service, limousines from us. Also, we provide private taxi event transportation in the Louisville, KY area. We specialize in Chauffeured service to and from Louisville International Airport.</p>
                                        <p>We offer valet service in Louisville and Lexington, KY. Kentucky Grand Limousine is renowned for all sporting events since 2007. You can rely on us for your travel requirements. We offer pleasing customer services and we serve you suitable solutions for Kentucky horse racing events. Whether it’s an SUV, Limo, Shuttle or Coach, we can meet your transportation needs right here in the Blue Grass.</p>
                                        <p>Kentucky Car Service Lexington, KY Churchill Downs is a world-class car service and limousine service provider offering a high quality corporate or leisure town car service to you. We can assist you during conventions, Kentucky Bourbon Tours, meetings, night on the town, etc. If your car is not in good condition, we can pick you up at any local shop and take you to your destination safely. Our Cincinnati Airport Transportation is available at low rates and we offer first-class <Link to={"/phoenix-car-service/"} className={"anchor"}> limousine </Link> service.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Louisvilleimg1}></img>
                                            <div className="allegiant-stadium-btn custom-btn">
                                                <a href="/contact-us">Contact Us</a>
                                                <a href="tel:4044244499"> Call (404) 424-4499  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-two">
                    <div className="cities-content heading">
                        <div className="container">
       
                            <h4>Features Of Our Car Service</h4>
                            <ul>
                                <li>New and Late Model Professionally Chauffeured Vehicles</li>
                                <li>GPS Monitoring of Entire Fleet</li>
                                <li>24 Hour In-Office Dispatch Team</li>
                                <li>Dedicated Sales & Dispatch Team</li>
                                <li>Exclusive VIP Arrival Experience</li>
                                <li>Professionally Attired Chauffeurs and Support Staff</li>
                                <li>Convenient Online Reservation System</li>
                                <li>Complimentary Chilled Bottled Water on all Transfers</li>
                                <li>Team of Over 40 Professionals Working Together</li>
                            </ul>

                            <p>Wherever you are traveling, we assure you of the utmost comfort and safety so you can enjoy the journey stress-freely. To ensure your safety, Kentucky Grand Limousine offers only certificate holders, professional chauffeurs. We maintain our fleet meticulously.</p>
                            <p>Our chauffeurs hold a valid license and drive insured vehicles. For providing you with ultimate comfort and luxury, we offer credit card payment facilities. We are your travel guide, and we strive to provide you with a premium quality car and limousine service.</p>
                            <p>Kentucky Car Service owns and has been operating multiple new rides. We have a wide range of vehicles including limousines, 56 Passenger Motor Coaches along with SUVs, Sedans, and Hybrids, executive Vans, luxury mini Buses for carrying up to 39 <a href="https://www.facebook.com/carservicehouston/" target={"_blank"} className={"anchor"}> passengers</a>. Also, we have party buses for 12-25 passengers.</p>

                            <h4>Experienced Chauffeurs</h4>
                            <p>To assure you get a premium quality car and limousine service, one of the most experienced and talented management teams leads the Kentucky limousine. Our reputation, development, and expansion allow us to get the attention of high management proficiency in the business. Offering the premium advantages along with the safest sense of dependability, we take the best care of our customers.</p>
                            <p>Our chauffeurs take pride in offering the best transport and customer support. Our highly proficient management crew has introduced an innovative trend of limousine service in Kentucky. We aim at offering an extraordinary town car service every time, every day, whenever you go for a trip. That is why our Grand Limousine is the best choice for transport in Kentucky.</p>
                            <p>No one in the business can beat the competitive rate and premium quality service we provide. Check out why people throughout Kentucky and in the surrounding area of the country prefer choosing us over anyone else for their <Link to={"/locations/savannah-party-bus/"} target={"_blank"} className={"anchor"}> transport </Link>.</p>

                            <h4>Kentucky Car Service – The all-inclusive solution for transportation</h4>
                            <p>With us, you will get shared airport transfers, transport for a private trip, group travel, corporate outings, weddings, night-out, and various other facilities. We offer a one-stop solution for all transport needs. From sedans to motor coaches–we have everything to meet your needs.</p>
                            <p>We offer our car services and limousine services worldwide, and we are one of the trusted names in this business. We leave you no chance to find fault with our town car services. It is a seamless transport solution that you can enjoy with our Grand Limousine. Just one phone call and that is all. On the ground of transportation, we solve your problems with a finger click!</p>
                            <p>Check out Kentucky Car Service’s entire website to unveil the secrets why people in Kentucky and the surrounding area prefer dealing only with Grand Limousine. Call us at <a href="tel:4044244499"> (404) 424-4499 </a> to contact us or if you have any queries about our services.</p>

                        </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In Kentucky</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                                <Carservices />
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Kentucky</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Kentucky</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/XdpY8dghVTgnkigi9">1002 Baker Ave, Kentucky, KY 40203, Kentucky, USA</a> </li>
                                            <li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
                                            <li>Corporate: <a href="tel:4044244499"> (404) 424-4499</a> EXT. 4</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 </div>
            <Footer /> </div>
        )
    }
}

export default Louisville;