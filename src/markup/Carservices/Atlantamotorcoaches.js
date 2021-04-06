import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Toplimousine from '../Element/Toplimousine';
import InnerBanner from '../Element/Innerbanner';
import Atlantamotorcoachestable from '../Element/Atlantamotorcoachestable';


class Atlantamotorcoaches extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Atlanta Motor Coaches</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Service</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p> Atlanta Motor Coaches provides reliable and professional charter bus services. Our Motor Coach division operates throughout Atlanta and nationwide. We offer the best in Modern Motor Coach Bus Service. Mini Buses, Shuttle Buses, and Limo Coach Buses right here for your event needs, Grand Limousine, has the best in the class vehicle for your group transportation needs. Our Motor Coaches and Luxury Charter Buses offer spacious seating arrangements, state-of-the-art amenities, and plenty of luggage room.</p>

                            <Atlantamotorcoachestable />

                            <h4>​​​Atlanta Motor Coaches</h4>
                            <p>We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve. All staff is skilled, knowledgeable, friendly, and conscientious. Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of ​​Atlanta.</p>
                            
                            <h4>​​What’s Included With This Service?</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. The Airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly <Link to={"/atlanta-executive-shuttle-service/"} className="anchor" rel="noopener noreferrer"> </Link>passengers who need or want <Link to={"/airport-car-service-relieves-travel-stress/"} className="anchor" rel="noopener noreferrer"> individual </Link> assistance. Free 15 Minute Grocery Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO <Link to={"/atlanta-sprinter-shuttle-services/"} className="anchor" rel="noopener noreferrer">GIMMICKS</Link>.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Atlantamotorcoaches;