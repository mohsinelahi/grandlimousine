import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';


class Buckheadpage extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Buckhead</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p> <strong> Buckhead </strong>  is an uptown commercial and residential district of Atlanta, Georgia, comprising approximately the northernmost fifth of the city. It is considered a separate business district from Downtown Atlanta and Midtown Atlanta, generating its mixture of banks, hotels, and contains many of Atlanta’s prominent highrise condo towers.</p>
                        <p>Buckhead is an example of an edge city, anchored by a core of highrise office buildings, hotels, and condominiums centered around the intersection of Peachtree Road and Piedmont Road near Georgia State Route 400, Buckhead station, and Lenox Square. Buckhead is the third <Link to={"/naples/"} className="anchor" rel="noopener noreferrer"> largest </Link> commercial center in Atlanta, behind Downtown and Midtown. Buckhead is a major commercial and financial center of the Southeast.</p>
                        <p>The residential areas of Buckhead consist mostly of large single-family homes situated among dense <Link to={"/augusta-golf-transportation/"} className="anchor" rel="noopener noreferrer"> forests </Link> and rolling hills. It is among the most <Link to={"/atlanta-events/"} className="anchor" rel="noopener noreferrer"> desirable </Link> and wealthiest places to live in Metro Atlanta</p>

                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Buckheadpage;