import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Booknowtable from '../Element/Booknowtable';
import DocumentMeta from 'react-document-meta';



class Graduationlimo extends Component {
    render() {
        const meta = {
            title: 'Graduation Limo',
            description: "Graduation Limo - Our professional chauffeurs, provides memorable experiences for young adults. Throughout the evening, our clients enjoy comfortable and reliable.",
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
                            <h2 className="box-title">Graduation Limo</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">
                           <p><strong>Graduation Limo -</strong> Our professional chauffeurs, provides memorable experiences for young adults. Throughout the evening, our clients enjoy comfortable and reliable transportation. Our impressive fleet of high-quality limousines enhances prom, homecoming, and graduation experiences with a variety of luxury amenities, including:</p>
                                
                            <p>​At Grand Limousine, we want our customers to arrive at prom, return, or graduation in a stylish and reliable vehicle. Our clients can choose from stretch H2 Hummers, white and black classic stretch limousines, party buses, and more. All of our vehicles inspected to meet our high safety and maintenance standards.</p>

                            <Booknowtable />

                            <p> <a href="https://www.augustacarservice.com/atlanta-car-service/" className="anchor" rel="noopener noreferrer"> Luxury </a> Airport Transportation – We understand that our <Link to={"/kennesaw-car-service-atlanta-atl/"} className="anchor" rel="noopener noreferrer"> Chauffeurs </Link> are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City.​​</p>

                            <h4>What’s Included With This Service?</h4>

                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi <Link to={"/wa}rner-robins-car-service/"} className="anchor" rel="noopener noreferrer"> Sedan</Link>, Luxury Town car, SUV, or Van. The airport meets &amp; greet service is the perfect <Link to={"/atlanta-hartsfield-jackson-airport/"} className="anchor" rel="noopener noreferrer"> choice </Link> for guests travelling with <Link to={"/chauffeur/"} className="anchor" rel="noopener noreferrer"> small </Link> children or <Link to={"/concert-limo/"} className="anchor" rel="noopener noreferrer"> elderly </Link> passengers who need or <Link to={"/atlanta-hawks-limo/"} className="anchor" rel="noopener noreferrer"> want </Link> individual <Link to={"/the-woodlands-car-service/"} className="anchor" rel="noopener noreferrer">assistance</Link>. Free 15 Minute <Link to={"/tuscaloosa-car-service-birmingham-bhm/"} className="anchor" rel="noopener noreferrer"> Grocery </Link> Stop. No Charge for the use of booster/car seat. No Charge for gate fees, <Link to={"/valdosta-car-service/"} className="anchor" rel="noopener noreferrer">tolls </Link> or traffic.NO <Link to={"/houston-sprinter-shuttle-services/"} className="anchor" rel="noopener noreferrer"> HIDDEN </Link> FEES, NO <Link to={"/casino-trips/"} className="anchor" rel="noopener noreferrer"> GIMMICKS </Link>.</p>                       
                            
                            </div>
                    </div>
                </section>
                <Toplimousine /> </div>
            <Footer /> 
            </main>
        </DocumentMeta>
        )
    }
}

export default Graduationlimo;