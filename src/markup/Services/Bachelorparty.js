import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Booknowtable from '../Element/Booknowtable';
import DocumentMeta from 'react-document-meta';



class Bachelorparty extends Component {
    render() {
        const meta = {
            title: 'Bachelor Party',
            description: "Bachelor Party is meant to be a wild and extravagant affair. We can help you experience a fun night with your closest friends by providing luxurious limousine.",
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
                            <h2 className="box-title">Bachelor Party</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine – The World’s Leading Provider of High-Quality Car & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">
                           <p><strong>Bachelor Party </strong> is meant to be a wild and extravagant affair. We can help you experience a fun night with your closest friends by providing luxurious limousine services. As our limousines fully equipped with modern amenities, you can relax and fully enjoy your last night of bachelorhood!</p>
                                
                            <p>Let a stretch limo be the transportation for your entire bachelor or Bachelorette party, making your wild night safe, fun and memorable, as you arrive wherever you wish to go by a highly professional and accommodating limo driver. When you ride in a limo from Us for your bachelor or Bachelorette party, you can rest assure that the “last night out with the boys or girls,” will be a night you’ll always remember. Let the nightlife be yours to enjoy, as you say goodbye to singlehood and enjoy your bachelor or Bachelorette party in a limo. Just the risks of drinking and driving should make your decision to use a limo service as an easy and responsible one.</p>

                            <Booknowtable />

                            <p> <strong> Bachelor Party – </strong> We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City. </p>

                            <h4>WHAT’S INCLUDED WITH THIS SERVICE?</h4>
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

export default Bachelorparty;