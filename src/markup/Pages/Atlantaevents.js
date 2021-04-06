import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Atlantaeventstable from '../Element/Atlantaeventstable';




class Atlantaevents extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Atlanta Events </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>  Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p> <strong> Atlanta Events – </strong>  Experience the finest in transportation services while you and your party enjoy all the fantastic amenities of your personalized limo experience. Your chauffeur will cater to your travel needs, yet provide you with the privacy that you would expect from a professional transportation company. Grand Limousine knows just how important your special event is to you, so we will exceed your expectations and provide you with the highest quality Atlanta event limousine services.</p>
                        <p>Grand Limousine is the premier Atlanta event transportation and limousine service, provider. Our fleet consists of vehicles for every Atlanta event transportation need. From Atlanta corporate car services to our limousine party buses, Grand Limousine is ready to make your Atlanta event transportation comfortable and stress-free. Here you will find a listing of current Atlanta events, performances, concerts, musicals things to do all happening in Atlanta, GA. Be sure to visit our Limo Specials page and see some of the great deals on our limousine services. We are open 24 hours a day, 365 days a week. Call us for a quote and see just how easy it is to reserve the very best in event limousine and transportation service.</p>

                            <Atlantaeventstable />

                            <h4>Atlanta Events</h4>
                            <p>We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve. All staff is skilled, knowledgeable, friendly, and conscientious. Chauffeur, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City.</p> 

                            <h4>​​What’s Do You Get With This Service?</h4> 
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Town Car, SUV, or Van. The Airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute <Link to={"/tuscaloosa-car-service-birmingham-bhm/"} className="anchor" rel="noopener noreferrer"> Grocery </Link> Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO <a href="http://www.limousinerentalcompany.com/business/grand-limousine-atlanta-ga" target="_blank" className="anchor" rel="noopener noreferrer">GIMMICKS</a>.</p> 

                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Atlantaevents;