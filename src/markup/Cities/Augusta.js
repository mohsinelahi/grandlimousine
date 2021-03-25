import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Augutsabanner from '../Element/Augustabanner';
import DocumentMeta from 'react-document-meta';
import Havequestion from '../Element/Havequestion';


var augustaimg1 = require('../../images/cities/Ritz-Buckhead.jpg');


class Augusta extends Component {
    render() {
        const meta = {
            title: 'Augusta, GA - Limousine Luxury Car & Party Bus',
            description: "Augusta, GA - Grand Limousine is one of the fastest-growing car and limousine service providers in the industry. You will find our Limousine Service on the INC 5000ѕ list of the fastest-growing private companies.",
            canonical: '',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'react,meta,document,html,tags'
              }
            }
          };
    return(
        <DocumentMeta {...meta}>
            <main className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Augutsabanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Augusta, GA – Grand Limousine Official Website</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Augusta’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Enjoy Premium Transportation Service in Augusta</h4>
                                    <p>Augusta, GA – Grand Limousine is one of the fastest-growing car and limousine service providers in the industry. You will find our Limousine Service on the INC 5000ѕ list of fastest-growing private companies. We are one of the leading town car service providers offering private vehicles and excellent customer support. We have prestigious awards. That is why choose Grand Limousine over any other car service provider in Augusta.</p>
                                    <p>We have a wide range of grand limousines, and we offer the best car services at the best prices. Not only premium quality transport but also provide pleasing customer support. Enjoy safe, smooth, and consistent transportation with Grand Limousine. Whether you are looking for a suitable ride for private shipping or group transport, we have a perfect solution for all your requirements.</p>
                                    <p>If you think hiring our luxury cars will be heavy on the wallet, you are making a mistake. We apply no hidden charges, and all our limousine services are available at competitive rates. Our customer support team is open night and day. Therefore, if you have any queries about our car services, contact us at <a href="tel:4044244499" className="anchor" rel="noopener noreferrer"> (404) 424-4499</a>.</p>

                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={augustaimg1} alt="Augusta, GA"></img>
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
       
                            <ul className="atlanta-serivces">
                                <li> <Link to={"/locations/augusta-car-service/"} rel="noopener noreferrer"> Augusta Car Service </Link> </li>
                                <li> <Link to={"/locations/augusta-limousine/"} rel="noopener noreferrer"> Augusta Limousine </Link> </li>
                                <li> <Link to={"/locations/augusta-party-bus/"} rel="noopener noreferrer"> Augusta Party Bus </Link> </li>
                            </ul>
                        
                            <p>With us, you can explore some of the most exotic places in Augusta. Enjoy the sights and take pleasure with our insider’s tours of the tourist attractions. We accompany your group on special events and offer you the best support in Wi-Fi, refreshment, and a travel guide. Our chauffeurs know, years of experience, dedication, sincerity, and passion. Wherever you are traveling, we assure you of the utmost comfort and safety so you can enjoy the journey stress-freely. To ensure your safety, Augustus Grand Limousine offers only certificate holders, professional chauffeurs. We maintain our fleet meticulously.</p>
                            <p>Our chauffeurs hold a valid license and drive insured vehicles. For providing you with ultimate comfort and luxury, we offer credit card payment facilities. We are your travel guide, and we strive to provide you with a premium quality car and grand limousine service. Augusta Grand Limousine owns and has been operating multiple new rides. We have a wide range of vehicles, including limousines, 56 Passenger Motor Coaches along with SUVs, Sedans, and Hybrids, executive Vans, luxury mini Buses for carrying up to 39 passengers. Also, we have party buses for 12-25 passengers.</p>

                            <h4>Experienced chauffeurs in Augusta</h4>
                            <p>To ensure you get a premium quality car service, one of the most experienced and talented management teams leads the Augusta limousine. Our reputation, development, and expansion allow us to get the attention of high management proficiency in the business. Offering the premium advantages along with the safest sense of dependability, we take the best care of our customers.</p>
                            <p>Our chauffeurs take pride in offering the best transport and customer support. Our highly proficient management crew has introduced an innovative trend of limousine service in Augusta. We aim at providing extraordinary car service every time, every day, whenever you go for a trip. That is why our Grand Limousine is the best choice for the town car service in Augusta. No one in the business can beat the competitive rate, and we provide. Check out why people throughout Augusta and in the surrounding area of the country prefer choosing us over anyone else for their transport.</p>

                            <h4>The all-inclusive solution for transportation in Augusta</h4>
                            <p>With us, you will get grand limousine services for shared airport transfers, transport for a private trip, group travel, corporate outings, weddings, night-out, and various other facilities. We offer a one-stop solution for all transport needs. From sedans to motor coaches–we have everything to meet your needs. We provide our town car services worldwide, and we are one of the trusted names in this business. We leave you no chance to find fault with our limousine services. It is a seamless transport solution that you can enjoy with our Grand Limousine. Just one phone call, and that is all. On the ground of transportation, we solve your problems with a finger click!</p>
                            <p>Check out our entire website to unveil the secrets why people in Augusta and the surrounding area prefer dealing only with Grand Limousine. Call us at (404) 424-4499 to contact us or if you have any queries about our car ad limousine services.</p>

                        </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In Augusta Georgia</h2>
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
                                    <h2 className="box-title">Contact our local team in Augusta</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Augusta, GA | Grand Limousine | Official Website</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />    
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/E6fSUb7xiHAATRKaA">1002 Baker Ave, Augusta, GA 30904, Georgia, USA</a> </li>
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
            <Footer />  
            </main>
        </DocumentMeta>
        )
    }
}

export default Augusta;