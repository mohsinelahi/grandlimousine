import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';
import DocumentMeta from 'react-document-meta';


var weddingimg = require ('./../../images/services/Grand-Limousine-Wedding.png');


class Weddingtransportation extends Component {
    render() {
        const meta = {
            title: 'Wedding Transportation - Book Direct Since 2007',
            description: "Wedding Transportation - Car Services for Weddings is a leading limousine service provider offering reliable wedding transportation in California, Texas.",
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
                            <h2 className="box-title">Wedding Transportation</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Service</p>
                        </div>
                    </div>
                </section>

                <section className="section-full services-main">
                    <div className="container">
                        <div className="services-content heading">
                            <div className="content-img">
                                <div className="left">
                                    <h4>Wedding Transportation</h4>
                                    <p><strong>Wedding Transportation – </strong> <Link to={"/wedding-transportation/"} className={"anchor"} rel="noopener noreferrer"> Car Services for Weddings </Link> is a leading limousine service provider offering reliable wedding transportation in California, Texas, Illinois, New York, Florida, Georgia, and surroundings. We have a large selection of luxury vehicles to suit your transportation needs.</p>
                                    <p>We strive to uphold our reputation as one of the reliable wedding car service providers in the country. That’s why we provide the best in chauffeured transportation. We always keep our vehicles well-maintained to ensure every ride is safe and convenient.</p>
                                    <p>Your wedding is an extraordinary event in your life. You want everything to be perfect on that day. At Grand Limousine, we <a href="https://www.augustacarservice.com/atlanta-car-service/" target="_blank" rel="noopener noreferrer">understand</a> that! That’s why we have carefully designed our wedding transportation packages. Our team is <Link to={"/car-service-elp-el-paso-airport/"} className={"anchor"} rel="noopener noreferrer"> committed </Link> to making your wedding more special and memorable. So, forget the worries about wedding transportation and let <Link to={"/"} className={"anchor"} rel="noopener noreferrer"> Grand Limousine </Link> handle the matter so you can focus on your other tasks that matter.</p>
                                    <p>We are ready to accommodate all your transportation needs. Our chauffeurs are highly trained and professionally dressed. You and your guests will never feel uncomfortable with them. The chauffeur will take care of all your transportation needs that you might have before and after your wedding ceremony. He will drive you to your destination safely. Also, we have trained our drivers to pamper our clients unobtrusively. You can <Link to={"/contact-us/"} className={"anchor"} rel="noopener noreferrer"> contact </Link >us at any time to know more about our services.</p>
                                </div>   
                                <div className="right">
                                    <img src={weddingimg} alt="Limousine Car Wedding"></img>
                                </div>
                            </div>
                            <h4>Wedding Car Service for You and Your Guests</h4>
                            <p>Our full-service transportation packages include options for your relatives and guests. We will pick your guests from the airport and drop them off at the wedding venue on time. Our bags feature Limousines, Party Buses, premium sedans, etc. These luxury vehicles will add a touch of class and elegance to your wedding.</p>
                            <p>Client satisfaction is always our top priority. That’s why we always strive to deliver a level of service that exceeds the expectations of our clients. We know that every wedding is different. That’s why we focus on customizing our transportation services to fit the specific needs of our clients.</p>

                            <h4>Affordable and Reliable Town Car Service</h4>
                            <p>Grand Limousine offers affordable limousine service. We have a variety of vehicles in our fleet. Each luxury vehicle comes with a lot of amenities and comfortable seating arrangements. The cars can comfortably accommodate a large number of people. You can also book a wedding party bus if you need more space. Booking your ride with us is easy and quick.</p>

                            <h4>Book Your Limousine Early</h4>
                            <p>The town car service is in high demand during the peak seasons. So, we recommend you book your limousine early, so you don’t miss the best deals. If you have any questions regarding our wedding <Link to={"/limousine-service/"} className={"anchor"} rel="noopener noreferrer"> limousine service</Link>, feel free to contact us. We will try to reach you as soon as possible.</p>
                        </div>
                    </div>
                  
                </section>


                <Quotebox />

                <Toplimousine />

            </div>
            <Footer  />
            </main>
        </DocumentMeta>
        )
    }
}
export default Weddingtransportation;