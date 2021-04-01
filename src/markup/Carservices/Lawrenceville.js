import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Lawrencevilletable from '../Element/Lawrencevilletable';


class Lawrenceville extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Lawrenceville Car Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Service</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> Lawrenceville Car Service –   </strong>Now, you can travel and arrive in style and comfort. For over 15 years, we have offered a signature white-glove attention to every single customer that steps into our vehicles.  ​Whether you’re a ​Lawrenceville local or visiting our city, ​Grand Limousine can serve all your transportation needs. ​​​We pride ourselves in our team consisting of professional and friendly client representatives, our exceptional quality service, our certified chauffeurs, and our unmatched customer support. Your safety and complete satisfaction is our top priority, which is why you can be sure you are being driven by professionally trained Chauffeurs​.</p>                           
                           
                            <Lawrencevilletable />

                            <p>Lawrenceville Car Service understands that our Chauffeurs are the face of our business. All of our Chauffeur is trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their except​ional driving skills, friendly and warm demeanor, and comprehensive knowledge of the City of ​Lawrenceville.​​</p>

                            <h4>What Do You Get With This Service?</h4>
                            <p> A professional uniformed drivers/chauffeur will meet you at your door step or in the baggage claim area of the Airport with your own personalized greeting sign.You will experience individual <a href="http://www.limousinerentalcompany.com/business/houston-limousine-houston-tx" target="_blank" className="anchor" rel="noopener noreferrer"> assistance </a> with your luggage and will be personally escorted to your Taxi Sedan, Luxury Towncar, SUV or Van.The airport meet ​& greet service is the perfect choice for quests traveling with small children or elderly passengers who need or want individual assistance.Free 15 Minute Grocery Stop. No Charge for use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO GIMMICKS.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Lawrenceville;