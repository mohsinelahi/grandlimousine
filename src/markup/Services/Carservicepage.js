import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Augutsabanner from '../Element/Augustabanner';
import Havequestion from '../Element/Havequestion';
import Toplimousine from '../Element/Toplimousine';



class Carservicepage extends Component {
    render() {
    return(
            <main className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Augutsabanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Car Service </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> Locations In New York – Augusta – Savannah – Columbus – Macon Serving Orlando – San Francisco – Destin – Miami – Atlanta And Surrounding Areas </p>
                        </div>
                    </div>
                </section>


                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
       
                        <h4>Airport Car Service – Locations</h4>
                            <p> <strong>  Car Service – </strong> Book Direct Ground Transportation <Link to={"/super-bowl/"} className="anchor" rel="noopener noreferrer"> Grand Limousine </Link> delivers top-quality to all significant U. S. cities with the finest and newest fleet. Available. Our quality and attention to detail are our primary focus. Our Airport Car transportation is affordable, convenient, and safe. We pride ourselves on providing professional, timely, experienced, and fast service, chauffeurs. We offer the best round the clock reservations for private airport travel. You will enjoy the savings and security of style and comfort relaxed while gas, parking fees, and rental car costs. We are always here for you, so you never have to hail a taxi or games with your Uber <Link to={"/locations/gray-car-service/"} className="anchor" rel="noopener noreferrer">App</Link>. When it comes to fast <strong> Airport Car Service </strong>, we are the <a href="https://www.facebook.com/carservicehouston/" target="_blank" className="anchor" rel="noopener noreferrer"> best</a>.</p>

                            <h4>Professional Chauffeurs</h4>
                            <p>Chauffeurs, not drivers. All chauffeurs are highly trained and courteous and will get you to your <Link to={"/benefits-of-an-airport-car-service/"} className="anchor" rel="noopener noreferrer"> destination </Link> with efficient routes in and around the city.</p>

                            <h4>We are the Professionals:​​</h4>
                            <ul>
                                <li>No Surge in Pricing</li>
                                <li>Reliable and Timely</li>
                                <li>Airport Curbside Service.</li>
                                <li>Clear and direct Upfront Pricing</li>
                                <li>Professionally safe and knowledgeable Chauffeurs</li>
                                <li>Pure Secure and Quality online booking</li>
                                <li>Priority Private Airport Travel is just a call away.</li>
                                <li>Newest, Well-Maintained inventory bringing you comfort</li>
                                <li>Confirmed Reservations in Advanced to ensure your limousine is on-time when you’re ready.</li>
                                <li>Avoid all the hassles of self-driving – No stress from traffic wows</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="section-full cities-sec-two">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Check out our Premium Luxury Cars</h2>
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
                                    <h2 className="box-title">Contact one of our local teams near you</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />    
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/c7r7DSZaxoEL5VEA7">2401 Nance St, Houston, TX 77020, Texas, USA</a> </li>
                                            <li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
                                            <li>Corporate: <a href="tel:4044244499"> (404) 424-4499</a> EXT. 4</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer />  
            </main>
        )
    }
}

export default Carservicepage;