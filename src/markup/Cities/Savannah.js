import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Savannahheader from '../Element/Savannahbanner';
import DocumentMeta from 'react-document-meta';
import Havequestion from '../Element/Havequestion';


var Savannahcarserviceimg = require('../../images/cities/savannah-car-service.jpg');

class Savannah extends Component {
    render() {
        const meta = {
            title: 'Savannah, Georgia - Limousine Luxury Car & Party Bus',
            description: "Savannah, Georgia - Grand Limousine Official Website is now the nation’s one of the fastest developing ground transportation service providers. We offer some of the most luxurious rides for regular, corporate, fun, occasions, and events.",
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
                <Savannahheader />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Savannah, GA - Limousine Luxury Car & Party Bus </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The Coastal Empire’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Grand Limousine Savannah</h4>
                                        <p>Savannah, Georgia – Savannah Limousine Official Website is now the nation’s one of the fastest developing ground transportation service providers. We offer some of the most luxurious rides for regular, corporate, fun, occasions, and events. Our customer support team is always ready to assist you, and we offer a vast and versatile range of cars. Our Limousine Service is a reliable and reputable transportation company to be on the INC 5000’ѕ list of fastest-growing private companies. You will appreciate our fleet of rides that are luxurious and affordable. These limousine services are available at various reasonable rates. Just choose one according to your budget, purpose, and the number of passengers. We are one of the award-winning limousine companies, and that is why you can entirely rely on us. Savannah Grand Limousine owns and operates multiple new luxury vehicles.</p>
                                        <p>We have different vehicles featuring Sedans, Hybrids, 56 passengers, and Motor Coaches. Also, we offer SUVs, limousines, executive Vans, luxury minibusses for up to 39 passengers, and party buses from 12 to 25 passengers. We assure safe, smooth, and on-time solutions for <a href="https://www.facebook.com/carservicemacon/" target={"_blank"} className="anchor" rel="noopener noreferrer"> transport </a>.</p>
                               
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Savannahcarserviceimg} alt="Savannah, Georgia"></img>
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
       
                            <ul className="atlanta-serivces">
                                <li> <Link to={"/locations/savannah-car-service/"} rel="noopener noreferrer"> Savannah Car Service </Link> </li>
                                <li> <Link to={"/locations/savannah-limousine/"} rel="noopener noreferrer"> Savannah Limousine </Link> </li>
                                <li> <Link to={"/locations/savannah-party-bus/"} rel="noopener noreferrer"> Savannah Party Bus </Link> </li>
                            </ul>
                        
                            <p>With us, you can explore some of the most exotic places in Savannah. Enjoy the sights and take pleasure with our insider’s tours of the tourist attractions. We accompany your group on special events and offer you the best support in Wi-Fi, refreshment, and a travel guide. Our chauffeurs know, years of experience, dedication, sincerity, and passion. Wherever you are traveling, we assure you of the utmost comfort and safety so you can enjoy the journey stress-freely. To ensure your safety, Savannah Grand Limousine offers only certificate holders, professional chauffeurs. We maintain our fleet meticulously.</p>
                            <p>Our chauffeurs hold a valid license and drive insured vehicles. For providing you with ultimate comfort and luxury, we offer credit card payment facilities. We are your travel guide, and we strive to provide you with premium quality car services and limousine services.</p>
                            <p>Savannah Grand Limousine owns and has been operating multiple new rides. We have a wide range of vehicles, including limousines, 56 Passenger Motor Coaches along with SUVs, Sedans, and Hybrids, executive Vans, luxury mini Buses for carrying up to 39 passengers. Also, we have party buses for 12-25 passengers.</p>
                        
                            <h4>Experienced chauffeurs in Savannah</h4>

                            <p>To ensure you get a premium quality car service, one of the most experienced and talented management teams leads the Savannah limousine. Our reputation, development, and expansion allow us to get the attention of high management proficiency in the business. Offering the premium advantages along with the safest sense of dependability, we take the best care of our customers. Our chauffeurs take pride in offering the best transport and customer support. Our highly proficient management crew has introduced an innovative trend of limousine service in Savannah. We aim at providing extraordinary car service every time, every day, whenever you go for a trip. That is why our Grand Limousine is the best choice for transport in Savannah.</p>
                            <p>No one in the business can beat the competitive rate premium quality Towncar service we provide. Check out why people throughout Savannah and in the surrounding area of the country prefer choosing us over anyone else for their transport.</p>
                        
                            <h4>The all-inclusive solution for transportation in Savannah</h4>
                            <p>With us, you will get shared airport transfers, transport for a private trip, group travel, corporate outings, weddings, night-out, and various other facilities. We offer a one-stop solution for all transport needs. From sedans to motor coaches–we have everything to meet your needs.</p>
                            <p>We offer our car services and limousine services worldwide, and we are one of the trusted names in this business. We leave you no chance to find fault with our town car services. It is a seamless transport solution that you can enjoy with our Grand Limousine. Just one phone call and that is all. On the ground of transportation, we solve your problems with a finger click! Check out our entire website to unveil the secrets why people in Savannah and the surrounding area prefer dealing only with Grand Limousine. Call us at (404) 424-4499 to contact us or if you have any queries about our services.</p>

                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Savannah</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Savannah</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />   
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/o5twKf5Hk8BnD3HG9" rel="noopener noreferrer">34 Habersham St, Savannah, GA 31211, Georgia, USA</a> </li>
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

export default Savannah;