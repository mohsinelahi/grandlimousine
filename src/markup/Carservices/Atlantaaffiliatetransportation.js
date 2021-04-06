import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Atlantaaffiliatetransportationtable from '../Element/Atlantaaffiliatetransportationtable';



class Atlantaaffiliatetransportation extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Atlanta Affiliate Transportation </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p>Atlanta Affiliate Transportation provides the highest quality transportation services to Atlanta clients. Through our affiliate networks, our clients also enjoy the luxury of professional chauffeur services when traveling abroad.</p>
                            <p>Our professional services adhere to the highest levels of safety, accuracy, promptness, and professionalism, and we expect our affiliate partners to maintain these same qualities.</p>
                            <p>If your company is interested in partnering with Atlanta in Metro Atlanta, please complete the form below. Our professional staff will contact your company to learn more about establishing a transportation affiliate partnership.</p>
                            
                            <Atlantaaffiliatetransportationtable />

                            <p>​​Atlanta Affiliate Transportation – We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of Atlanta.</p>
              
                            <h4>​​​​ Included With This Service?​​</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. Atlanta Affiliate Transportation meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for the use of <Link to={"/tuscaloosa-car-service-birmingham-bhm-airport-limousine/"} className="anchor" rel="noopener noreferrer">booster</Link>/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO GIMMICKS.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Atlantaaffiliatetransportation;