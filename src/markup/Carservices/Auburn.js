import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Auburn extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Auburn Car Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine – The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <h4>What Do You Get With This Service?</h4>
                            <p><strong> Auburn Car Service </strong> professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the <Link to={"/best-airport-car-service-deal-in-houston-tx/"} target="_blank" className="anchor" rel="noopener noreferrer"> airport </Link>  with your IPad greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Town Car, SUV, or Van. The airport meets & greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic.NO HIDDEN FEES, NO GIMMICKS.</p>
                           
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Auburn;