import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';


class Privacypolicy extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Privacy Policy – Grand Limousine Quality Services</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Your 24/7 airport transfer chauffeur company</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p>We have a strong commitment to the privacy of sensitive information.</p>
                            <p>This Privacy Policy sets out how we use personal information obtained about you during your use of the Website.</p>
                            <p>Your use of the Website signifies that you have given us your consent to such use of your data and your agreement to the terms of this Privacy Policy.</p>
                                
                            <h4>What personal information do we collect?</h4>
                            <p>We collect personal information when you place an order on our Website. The purpose of collecting this information is to be able to provide you with the service you have requested in a secure and timely way. Any personal information we collect will be used by us strictly in accordance with current data protection legislation and this Privacy Policy.</p>
                
                            <h4>Who do we share your information with?</h4>
                            <ul>
                                <li>We disclose information to our employees and our carefully selected partners for the purpose of supplying the services to you.</li>
                                <li>We shall not share your information with third parties</li>
                                <li>If a visitor voluntarily sends us sensitive or personal data through our website, we will destroy it once discovered.</li>
                                <li>Any payment information e.g. credit cards and bank details processed through our website will be collected through our bank.</li>
                                <li>We do not store credit card or bank details collected from our website</li>
                                <li>We may contact you for such marketing purposes by email (depending on the information we collect from you). If you do not wish to receive such information and offers then you will be able to prevent your information being used at the point you provide the information. Further, you can at any time write to us, or email us at the address in the “Contact Us” section.</li>
                            </ul>

                            <h4>Changes to our Privacy Policy</h4>
                            <p>We may modify our Privacy Policy from time to time in our sole discretion. If so, we will post a revised version of this Privacy Policy on this web page. We urge you to check the Privacy Policy regularly to obtain the most up to date copy. Modifications will be effective when they are posted on the website.</p>

                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Privacypolicy;