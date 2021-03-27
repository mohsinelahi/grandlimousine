import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Hamptontable from '../Element/Hamptontable';



class Hampton extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Hampton Car Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p>Hampton Car Service – Atlanta Airport Limousine ATL has a proven record of excellence as a leading provider of taxi, limo and car service in the Hampton, GA area. We take great pride in offering the award-winning level of transportation service we have become known for at flat rates that are even lower than our metered taxi rates.</p>
                           
                            <Hamptontable />

                            <h4>Hampton – Atlanta Airport Transportation</h4>
                            <p>We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of Hampton.</p>                
                        
                            <h4>​​included With This Service?</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally <Link to={"/locations/orlando-car-service/"} className={"anchor"} rel="noopener noreferrer"> escorted </Link> to your Taxi Sedan, Luxury Towncar, SUV, or Van. The Airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly <a href={"http://www.limousinerentalcompany.com/business/grand-limousine-atlanta-ga"} target={"_blank"} className={"anchor"} rel="noopener noreferrer"> passengers </a> who need or want individual assistance. Free 15 Minute <Link to={"/locations/houston-car-service/"} className={"anchor"} rel="noopener noreferrer"> Grocery </Link> Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO <Link to={"/locations/macon-limousine/"} className={"anchor"} rel="noopener noreferrer"> HIDDEN </Link> FEES, NO <Link to={"/locations/macon-car-service/"} className={"anchor"} rel="noopener noreferrer"> GIMMICKS</Link>.</p>
              
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Hampton;