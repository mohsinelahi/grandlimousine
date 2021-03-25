import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';
import DocumentMeta from 'react-document-meta';

var limousineimg = require ('./../../images/services/grand_limousine_service.png');

class Corporatetransportation extends Component {
    render() {
        const meta = {
            title: 'Corporate Car Service – Luxury Car &amp; Party Bus',
            description: "Corporate Car Service is a one-stop solution for all your corporate transportation needs.  We are committed to giving our clients memorable and comfortable.",
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
                            <h2 className="box-title">Corporate Car Service – Luxury Car & Party Bus</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>

                <section className="section-full services-main">
                    <div className="container">
                        <div className="services-content heading">
                            <div className="content-img">
                                <div className="left">
                                    <h4>Luxury Corporate Transportation</h4>
                                    <p><strong>Corporate Car Service </strong>  is a one-stop solution for all your corporate transportation needs.  We are committed to giving our clients memorable and comfortable experiences. We serve California, Texas, Illinois, New York, Florida, Georgia, and surrounding areas.</p>
                                    <p>If you want to travel to your business meeting or conference in a safe and comfortable manner, look no further than Grand Limousine. We are here to <a href="https://www.augustacarservice.com/atlanta-car-service/" target="_blank" className="anchor" rel="noopener noreferrer"> accommodate </a> all your transportation requirements. We have highly-trained, courteous, and knowledgeable chauffeurs. They are friendly and helpful with the luggage. Our chauffeurs are properly attired and committed to meeting the transportation needs of the client. The chauffeur will pick you up from your office or from the airport to safely take you to your destination. Also, you can rest assured that he will drop you off on time.</p>
                                    <p>As a business owner, you want to establish a reputable image and want to represent your company right. At Grand Limousine, we understand that! That’s why we offer the best in chauffeured transportation. We have a wide range of luxury vehicles to best suit your specific transportation requirements. You can book a limousine to impress your clients. Our vehicles have all the great facilities that will entertain your clients, business partners, and VIP guests. Contact us to know more about our town car service.</p>
                                </div>   
                                <div className="right">
                                    <img src={limousineimg} alt="Limousine Car"></img>
                                </div>
                            </div>
                            <h4>Why use a Corporate Transportation Service?</h4>
                            <p>If you want to close deals faster, you need to show your clients that you care about them. But how will do that? One easy way you can make your clients feel special is by arranging luxury transportation for them. And you don’t need to go anywhere else for the <a href="https://www.facebook.com/carservicehouston/" target="_blank" className="anchor" rel="noopener noreferrer">purpose</a>.</p>
                            <p>Grand Limousine is a leading limo service provider offering affordable and reliable corporate transportation for businesses. We have trained and experienced chauffeurs who will drive your clients to the meeting or event comfortably. The professionally trained chauffeur will safely take your clients to the destination on time. They will enjoy the best amenities, including comfortable seating, etc. It will help you make a great impression that your clients will never forget. It will show them that you really care about them and you are serious about doing business with them.</p>
                            <p>You can book a limousine service to reach your business meetings on time. The luxury vehicle will speak of your style and professionalism. It will help you establish a professional image for your business. We have a wide selection of luxury vehicles in our fleet. You can choose a vehicle according to your preference. With us, you can book your ride very easily and quickly.</p>
                            <p>The satisfaction of our clients is our top priority. Our team always strives to satisfy the needs of our clients. We will handle all your business travel needs so you can get more time to focus on your other important tasks. If you have any questions regarding our services, you can <Link to={"/contact-us/"} className={"anchor"} rel="noopener noreferrer"> contact </Link> us directly. We will try to reach you as soon as possible.</p>
                            <h4>Choose a Reliable Limousine Service Provider</h4>
                            <p>When it comes to booking a luxury vehicle for corporate transportation, you should not blindly choose the first car service provider you find. You need to know that not all companies are reliable. That’s why you should choose a limousine service provider that has been providing Car Services for a long time and has a good reputation in the market.</p>
                            <p>However, you don’t need to take time out of your busy schedule to find a reliable town car service provider. Contact Grand Limousine now! We have been providing chauffeured transportation for many years. We ensure that every ride is as safe and convenient as possible. We offer airport chauffeur transfers, wedding limousine services, etc as well. You can contact us to know more about our services. </p>
                       
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
export default Corporatetransportation;