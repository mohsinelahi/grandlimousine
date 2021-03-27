import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Buckheadtable from '../Element/Buckheadtable';



class Buckhead extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Buckhead Car Service - Book Direct Since 2007</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p><strong> Buckhead Car Service Atlanta (ATL) Airport Limousine – </strong> Now, you can travel and arrive in style and comfort. For over 15 years, we have offered a signature white-glove attention to every single customer that steps into our vehicles. Whether you’re a ​Buckhead local or visiting our city, ​Grand Limousine can serve all your transportation needs. ​​​We pride ourselves in our team consisting of professional and friendly client representatives, our exceptional quality service, our certified chauffeurs, and our unmatched customer support. Your safety and complete satisfaction is our top priority, which is why you can be sure you are being driven by professionally trained Chauffeurs​.</p>
                           
                            <Buckheadtable />

                            <h4>​​Buckhead Car Service</h4>
                            <p>We understand that our Chauffeurs are the face of our business. All of our Chauffeurs trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve. All staff is skilled, knowledgeable, friendly, and conscientious. Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of ​Buckhead – Atlanta.​​</p>
                
                            <h4>What’s Included With This Service?</h4>
                            <p>A Buckhead Car Service professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your own personalized greeting sign. You will experience individual assistance with your luggage and will be personally escorted to your Taxi Sedan, Luxury Town car, SUV, or Van. The airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly <Link to={"/auburn-car-service/"} className={"anchor"}>passengers </Link> who need or want individual <a href="https://www.augustacarservice.com/atlanta-car-service/" className={"anchor"} target="_blank" rel="noopener noreferrer"> assistance </a>. Free 15 Minute Grocery Stop. No Charge for use of booster/car seat. No Charge for gate fees, tolls or traffic.NO HIDDEN FEES, NO GIMMICKS.</p>
              
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Buckhead;