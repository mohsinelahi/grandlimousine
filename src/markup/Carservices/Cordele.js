import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Cordeletable from '../Element/Cordeletable';


var atlantaimg1 = require('../../images/cities/atlanta_transportation.jpg');


class Cordele extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Cordele Car Service Atlanta (ATL) Airport Limousine</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p><strong> Cordele Car Service Atlanta (ATL) Airport Limousine – </strong> Now, you can travel and arrive in style and comfort. For over 15 years, we have offered a signature white-glove attention to every single customer that steps into our vehicles. Whether you’re a Cordele local or visiting our city, Cordele Car Service can serve all your transportation needs. We pride ourselves in our team consisting of professional and friendly client representatives, our exceptional quality service, our certified chauffeurs, and our unmatched customer support. Your safety and complete satisfaction is our top priority, which is why you can be sure professionally trained Chauffeurs are driving you.</p>
                           
                            <Cordeletable />

                            <p>Cordele Car Service –  Airport Transportation We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve. All staff is skilled, knowledgeable, friendly, and conscientious. Chauffeurs, in particular, are hand-picked for their exceptional driving skills, social and warm demeanor, and their comprehensive knowledge of the City of Cordele.​​</p>
                
                            <h4>Cordele Car Service Atlanta (ATL) Airport Limousine</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Town Car, SUV, or Mercedes Sprinter. The Airport meets ​& greet service is the perfect choice for guests <Link to={"/flowery-branch-car-service-atlanta-atl/"} className="anchor"> traveling </Link> with small children or elderly passengers who need or want individual <a href="https://sites.google.com/view/grand-limousine" className={"anchor"} target="_blank" rel="noopener noreferrer"> assistance</a>. Free 15 Minute Grocery Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls, or traffic.NO HIDDEN FEES, NO GIMMICKS.</p>
              
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Cordele;