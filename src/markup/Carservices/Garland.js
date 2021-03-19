import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Garlandtable from '../Element/Garlandtable';


var atlantaimg1 = require('../../images/cities/atlanta_transportation.jpg');


class Garland extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Garland Car Service - Book Direct Since 2007</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p><strong> Garland Car Service – </strong> Book Direct Since 2007 – Now, you can travel and arrive in style and comfort. For over 15 years, we have offered a signature white-glove attention to every single customer that steps into our vehicles.  ​Whether you’re a ​Dallas local or visiting our city, ​Grand Limousine can serve all your transportation needs. ​​​We pride ourselves in our team consisting of professional and friendly client representatives, our exceptional quality service, our certified chauffeurs, and our unmatched customer support. Your safety and complete satisfaction is our top priority, which is why you can be sure you are on time by professionally trained Chauffeurs​.</p>
                           
                            <Garlandtable />

                            <h4>​​​​Garland Car Service</h4>
                            <p>We understand that Garland Car Service Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, social and warm demeanour, and their comprehensive knowledge of the City of ​Garland.</p>
                
                            <h4>What Do You Get With This Service?</h4>
                            <p>​​A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized <Link to={"/jonesboro-car-service-atlanta-atl-airport-limousine/"} className={"anchor"} rel="noopener noreferrer"> greeting </Link> sign. You will experience individual <Link to={"/vocabulary/katy/"} className={"anchor"} rel="noopener noreferrer"> assistance </Link> with your luggage and escorted to your Taxi Sedan, Luxury Town car, SUV, or Van. The <Link to={"/houston-executive-shuttle-service/"} className={"anchor"} rel="noopener noreferrer"> Airport </Link> meets ​& greet <Link to={"/atlanta-beer-carnival/"} className={"anchor"} rel="noopener noreferrer"> service </Link> is the perfect choice for <Link to={"/galveston-car-service-houston-iah/"} className={"anchor"} rel="noopener noreferrer"> guests </Link> travelling with small <Link to={"/tampa-car-service-tampa-tpa/"} className={"anchor"} rel="noopener noreferrer"> children </Link> or elderly <Link to={"/miami-dolphins-football-limo/"} className={"anchor"} rel="noopener noreferrer"> passengers </Link> who need or want <Link to={"/brewery-tours-houston/"} className={"anchor"} rel="noopener noreferrer"> individual </Link> assistance. Free 15 Minute <Link to={"/houston-sedan-transportation/"} className={"anchor"} rel="noopener noreferrer"> Grocery </Link> Stop. No Charge for the <Link to={"/houston-cruise-port-transportation/"} className={"anchor"} rel="noopener noreferrer"> use </Link>  of booster/car seat.No Charge for gate fees, tolls or <Link to={"/miami-dolphins-football-limo/"} className={"anchor"} rel="noopener noreferrer"> traffic </Link>. NO HIDDEN FEES, NO <a href="https://www.facebook.com/carservicehouston/" target="_blank" className={"anchor"} rel="noopener noreferrer"> GIMMICKS</a>.</p>
              
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Garland;