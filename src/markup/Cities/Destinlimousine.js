import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Destinbanner from '../Element/Destinbaner';
import Havequestion from '../Element/Havequestion';


var Destinimg1 = require('../../images/cities/atlanta-limousine.jpg');


class Destinlimousine extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Destinbanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Destin Limousine - Book Direct Since 2007</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The Emerald Coast’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <p> <strong> Destin Limousine </strong> offers you an excellent way to travel for your business and personal needs. We provide great comfort and style to the traveler. We offer limousine service for people who want to experience their journey with comfort and luxury. You can contact Grand Limousine to hire our car for many occasions and reasons. Most people prefer to receive this service to celebrate a special event. Our limousine service is reliable and affordable. We also offer a party bus in Destin. Limousine service is the best option for attending a corporate event. People prefer to travel by our vehicles to accommodate up to fourteen people and give you privacy while going.</p>
                                        <p>You can contact Destin Limousine to get an Airport transfer in Destin–Santa Rosa Beach, Fort Walton. If you receive this service, you would not have to wait to meet your new requirements. Our airport transfer in Destin is popular too. Taking this approach will allow travelers to get a safe trip from the airport to the hotel or the desired location. By hiring a limousine, you can reach your destination with style. Our airport transfer facility offers pickup from the airport and drops to the airport. We also offer party bus and car town service.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Destinimg1} alt="Gray Car Service"></img>
                                            <div className="allegiant-stadium-btn custom-btn">
                                                <Link to={"/contact-us/"} rel="noopener noreferrer"> Contact Us </Link>
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
       
                        <p>Corporate meetings and clients also prefer Destin Limousine travel, as this vehicle offers privacy. We provide not only safe driving but also provide much-needed privacy for essential discussions. With our limousine service, you can travel to and from the workplace full of comfort. Our well-trained chauffeurs can assure you of giving a safe car service. We have achieved immense fame by providing the best limousine service on the Emerald Coast. Weddings are undoubtedly an essential occasion in one’s life, and you would want to do everything unique to have an extravagant and splendid wedding. If you’re going to travel to and from the wedding venue with style, nothing can be an ideal option other than hiring a limousine. Also, you can get our help to regard party bus and town car service.</p>
                        <p>Nowadays, most teenagers prefer to enjoy their prom evening by traveling in a limousine. We will fulfill your desire. So, contact us with no hesitation. You can enjoy our limousine service within your determined budget. Contacting us will be the right choice to get a classic limousine luxury at a nominal rate. You can now travel with the style of your special event or attend a corporate event. Even you can also hire a party bus at a reasonable price. Destin Limo will leave no stone unturned to make your special moment unforgettable. It is our responsibility to make you extremely satisfied. No matter the occasion, our prime concern is to make your day special with excellent town car service. There are plenty of limousines in Destin available to meet different needs. As our car service is affordable, you need not take any burden of your pocket. With our affordable limousines, you can enjoy your journey on the Emerald Coast with style. So, contact Destin Limousine and make your every celebration unforgettable. Our excellent party bus is also perfect for celebrating your occasion.</p>
                        <p>Visit our reservation page to make your booking and enjoy the ultimate ride of your life! We, Destin Limousine, offer town car service in Destin – Crestview-Fort Walton Beach, FL Metropolitan Statistical Area. <a href="https://www.augustacarservice.com/" target={"_blank"} className={"anchor"} rel="noopener noreferrer"> According </a>  to the United States Census Bureau, these are metropolitan areas comprising the most beautiful beaches  globally. You can also hire a party bus from us.</p>

               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In Destin Florida</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
    
                                <Carservices />
                                <div className="book-your-car text-center">
                                    <p>We offer high-end solutions for transport that we have designed to suit your business needs. You can rely on our strong business ethics. With us, you will arrive at your business meeting or corporate event in style. Also, you will get the confidence to sign that million dollar contract. All of our corporate cars are of high quality, and we provide you with an exclusive means of transport to your business deals.</p>
                                    <h5> Call now at <a href="4044244499"> (404) 424-4499 </a> to book your limousine! </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Destin</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Destin</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/6fSdgDphKbq3TZhn8" rel="noopener noreferrer">531 Juanita Ave, Destin, FL 32541, Florida, USA</a> </li>
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

export default Destinlimousine;