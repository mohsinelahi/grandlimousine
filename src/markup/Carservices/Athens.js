import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Athenstable from '../Element/Athenstable';




class Athens extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Athens, GA Limousine Luxury Car & Party Bus</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p><strong> Athens Car Service Atlanta (ATL) Airport Limousine – </strong> Now, you can travel and arrive in style and comfort. For over 15 years, we have offered a signature white-glove attention to every single customer that steps into our vehicles.​Whether you’re an ​Athens local or visiting our city, ​Grand Limousine can serve all your transportation needs. ​​​We pride ourselves in our team consisting of professional and friendly client representatives, our exceptional quality service, our certified chauffeurs, and our unmatched customer support. Your safety and complete satisfaction is our top priority, which is why you can be sure professionally trained Chauffeurs are driving you​.</p>
                           
                            <Athenstable />

                            <h4>Athens Car Service</h4>
                            <p>Atlanta Airport Transportation We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve. All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, social and warm demeanor, and their comprehensive knowledge of the City of ​At​hens.​​</p>
                
                            <h4>Athens Car Service</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your <a href="https://www.facebook.com/carservicemiamiMiami/" target={"_blank"} className={"anchor"} rel={"noopener noreferrer"}> doorstep </a> or in the baggage claim airport at the Airport with your personalized greeting sign. Individual assistance with your luggage and escorted to your Taxi Sedan, Luxury Town car, SUV Airport The Airport meet ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute <Link to={"/tampa-car-service-tampa-tpa"} className={"anchor"}> Grocery </Link> Stop.No Charge for the use of booster/car seat. No <Link to={"/tampa-car-service-tampa-tpa"} className={"anchor"}> Charge </Link> for gate fees, tolls or traffic.NO HIDDEN FEES, NO GIMMICKS.</p>

                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Athens;