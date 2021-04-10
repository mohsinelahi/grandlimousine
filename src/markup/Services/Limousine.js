import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Limousine extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Limousine </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p>A <strong> limousine</strong> (/ˈlɪməziːn/ or /lɪməˈziːn/) is a large luxury vehicle driven by a chauffeur usually with a partition between the driver’s compartment and the passenger’s compartment. A very long-wheelbase luxury sedan (with more than four doors) driven by a professional driver is called a <strong> stretch limousine</strong>.</p>

                            <p>In some countries like the United States, Germany, or Canada, a “limousine service” is a pre-booked hire car with a driver, regardless of the type of vehicle. It also describes an excellent vehicle for transporting passengers to and from an airport. In German-speaking countries, a Limousine is simply a full-size sedan, while a lengthened-wheelbase car is called Stretch-Limousine.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Limousine;