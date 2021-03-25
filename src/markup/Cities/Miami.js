import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import InnerBanner from '../Element/Innerbanner';
import DocumentMeta from 'react-document-meta';
import Havequestion from '../Element/Havequestion';


var chicagoimg1 = require('../../images/cities/limo_chauffeur_service.jpg');


class Miami extends Component {
    render() {
        const meta = {
            title: 'Miami, Florida - Limousine Luxury Car & Party Bus',
            description: "Miami, Florida - Grand Limousine Official Website has the latest fleet collection to choose from to meet your requirements. ",
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
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Miami, FL - Limousine Luxury Car & Party Bus</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Miami’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                    <p>Miami, Florida – Grand Limousine Official Website has the latest fleet collection to choose from to meet your requirements. Grand Limousine Car Service offers you the best limousine services suitable for your travel plans. We match your needs and expectation even when time is a concern. Come and deal with us to experience the benefits of efficient and worry-free town car service in Miami South Beach. Grand Limousine assures a safe, stylish, and timely transport every time.</p>
                                    <p>When you are in Miami Beach, you want to ride in style and wish to be in ultimate protection. If you have such a plan, nothing is better than hiring a grand limousine. Choosing a ride from Miami Grand Limousine is so far the most excellent approach to explore the south shoreline.</p>
                                    <p>Choose our car service in Miami Airport. Also, get in touch with us if you want to enjoy exploring downtown. It will be a lifetime experience for you to have dinners while enjoying the shoreline breeze and pleasant sound of waves. Grand limousine will make it happen.</p>

                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={chicagoimg1} alt="Miami, FL"></img>
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
                                <li> <Link to={"/locations/miami-car-service/"} rel="noopener noreferrer"> Miami Car Service </Link> </li>
                                <li> <Link to={"/locations/miami-limousine/"} rel="noopener noreferrer"> Miami Limousine </Link> </li>
                                <li> <Link to={"/locations/miami-party-bus/"} rel="noopener noreferrer"> Miami Party Bus </Link> </li>
                            </ul>
                        
                                <p>With Grand Limousine and car services, you can explore some of the most exotic places in Miami. Enjoy the sights and take pleasure with our insider’s tours of the tourist attractions. We accompany your group on special events and offer you the best support in Wi-Fi, refreshment, and a travel guide. Our chauffeurs know, years of experience, dedication, sincerity, and <Link to={"/locations/new-york/"} className="anchor" rel="noopener noreferrer"> passion</Link>.</p>
                                <p>Wherever you are traveling, we assure you of the utmost comfort and safety so you can enjoy the journey without stress. To ensure your safety, Miami Grand Limousine offers only certificate holders, professional chauffeurs. We maintain our fleet meticulously.</p>
                                <p>Our chauffeurs hold a valid license, and they drive insured vehicles. For providing you with ultimate comfort and luxury, we offer credit card payment facilities. We are your travel guide, and we strive to provide you with premium quality car services.</p>
                                <p>Miami Grand Limousine owns and has been operating multiple new rides. We have a wide range of vehicles, including limousines, 56 Passenger Motor Coaches along with SUVs, Sedans, and Hybrids, executive Vans, luxury mini Buses for carrying up to 39 passengers. Also, we have party buses for 12-25 passengers.</p>
                                            
                                <h4>Experienced chauffeurs in Miami</h4>           
                                <p>To ensure you get a premium quality limousine and car service, one of the most experienced and talented management teams, leads the Miami limousine. Our reputation, development, and expansion allow us to get the attention of high management proficiency in the business. Offering the premium car service advantages along with the safest sense of dependability, we take the best care of our customers.</p>
                                <p>Our chauffeurs take pride in offering the best transport and customer support. Our highly proficient management crew has introduced an innovative trend of limousine service in Miami. We aim at providing extraordinary service every time, every day, whenever you go for a trip. That is why our Grand Limousine is the best choice for transport in Miami.</p>
                                <p>No one in the business can beat the competitive rate and premium quality car and limousine service we provide. Check out why people throughout Miami and in the surrounding area of the country prefer choosing us over anyone else for their transport.</p>
                                            
                                <h4>The all-inclusive solution for transportation in Miami</h4>            
                                <p>With us, you will get car services for shared airport transfers, transport for a private trip, group travel, corporate outings, weddings, night-out, and various other facilities. We offer a one-stop solution for all transport needs. From sedans to motor coaches–we have everything to meet your needs.</p>
                                <p>We offer our services worldwide, and we are one of the trusted names in this business. We leave you no chance to find fault with our town car services. It is a seamless transport <a href="https://www.augustacarservice.com/augusta-limousine/" target="_blank" className="anchor" rel="noopener noreferrer"> solution </a> that you can enjoy with our Grand Limousine. Just one phone call and that is all. On the ground of transportation, we solve your problems with a finger click!</p>
                                <p>Check out our entire website to unveil the secrets why people in Miami and the surrounding area prefer dealing only with Grand Limousine. Call us at (404) 424-4499 to contact us or if you have any queries about our car services.</p>

              
               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Check out Grand Car Services in Miami</h2>
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
                                    <h2 className="box-title">Contact our local team in Miami</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Miami</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/kheqmApLCEujdrvSA">3225 NW 204th Terrace, Miami Gardens, FL 33056, USA</a> </li>
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

export default Miami;