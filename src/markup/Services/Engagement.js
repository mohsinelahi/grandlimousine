import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Engagement extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Engagement </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p>An <strong> engagement </strong>  or <strong> betrothal </strong> is the relationship between two people who want to get married, and also the period between a marriage proposal and a marriage. During this period, a couple is said to be betrothed, intended, affianced, engaged to be married, or engaged. Future brides and grooms may be called the betrothed, a wife-to-be or husband-to-be, fiancée or fiancé (from the French), respectively. The duration of the courtship varies vastly and is mainly dependent on cultural norms or upon the agreement of the parties involved.</p>
                        <p>Long engagements were once typical in formal arranged marriages, and it was not uncommon for parents betrothing children to arrange marriages many years before the engaged couple was old enough. Long engagements are still prevalent in some countries.</p>
                      
                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Engagement;