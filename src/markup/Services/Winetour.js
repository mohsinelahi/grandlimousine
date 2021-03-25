import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Booknowtable from '../Element/Booknowtable';
import DocumentMeta from 'react-document-meta';



class Winetour extends Component {
    render() {
        const meta = {
            title: 'Wine Tour',
            description: "Wine Tour - Enjoy a beautiful day trip to Georgia‘s best wineries. We’ll chauffeur you from Atlanta to your choice of wineries: Frog town, Wolf Mountain Vineyard.",
            canonical: '',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'react,meta,document,html,tags'
              }
            }
          };
    return(
        <DocumentMeta {...meta}>
            <main className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Wine Tour</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine – The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">
                           <p><strong>Wine Tour – </strong> Enjoy a beautiful day trip to Georgia‘s best wineries. We’ll chauffeur you from Atlanta to your choice of wineries: Frogtown, Wolf Mountain Vineyard, Three Sisters Mountain, Montaluce, Yonah Mountain, Cavender Creek, The Cottage, and Habersham just past Dahlonega in north Georgia. Breathtaking views, live entertainment, special events, all just an hour from Atlanta.</p>
                            
                            <Booknowtable />
                       
                            <p><strong>​​Atlanta Airport Car Service – </strong> We understand that our Chauffeurs are the face of our business. All of <Link to={"/car-service-elp-el-paso-airport/"} className={"anchor"} rel="noopener noreferrer"> our Chauffeur </Link>  trained traditionally with etiquette. New units of luxury will ensure the little touch of luxury that you so richly deserve. All transportation staff is knowledgeable, skilled, conscientious, and friendly.  Tour Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City.​​</p>

                            <h4>What Do You Get With This Service?</h4>

                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the airport with your Ipad greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Town Car, SUV, or Van. The airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO GIMMICKS.</p>
                        </div>
                    </div>
                </section>
                <Toplimousine /> </div>
            <Footer />  
            </main>
        </DocumentMeta>
        )
    }
}

export default Winetour;