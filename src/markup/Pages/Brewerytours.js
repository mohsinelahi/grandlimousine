import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Weddinglimotable from '../Element/Weddinglimotable';




class Brewerytours extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Brewery Tours Atlanta Transportation </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>  Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p>Grand limousine offers the ultimate Atlanta brewery tours! We specialize in taking couples and small groups to some of Atlanta’s best beer crafters. Come and enjoy a day or evening visiting local Atlanta breweries while riding in one of our luxury limousines or Party Buses.</p>
                        <p>Our Atlanta brewery tours are customized to give you that unique Atlanta beer tour experience that you and your friends will be talking about for a long time. We can create a particular Atlanta beer tour travel itinerary that stops at all your favorite breweries and locations. Get your best friends and family together to experience the best beer in Atlanta! Call <a href="tel:4044244499" className="anchor" rel="noopener noreferrer">404-424-4499</a> to book your Atlanta brewery tour today!</p>

                            <Weddinglimotable />

                            <p>​​Atlanta Airport Transportation – We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of ​​McDonough.</p> 

                            <h4>​​What’s Do You Get With This Service?</h4> 
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. The Airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop.No Charge for the use of booster/car seat.No Charge for gate fees, tolls or traffic.NO HIDDEN FEES, NO GIMMICKS.</p> 

                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Brewerytours;