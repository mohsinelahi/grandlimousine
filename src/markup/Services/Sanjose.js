import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Sanjose extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">San Jose International Airport</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p> <strong> Norman Y. Mineta San Jose International Airport </strong>  (IATA: <strong> SJC </strong>, ICAO: <strong> KSJC </strong>, FAA LID: <strong> SJC </strong>) is a city-owned public airport in San Jose, California, United States. It is named after San Jose native Norman Mineta, former Transportation Secretary in the Cabinet of George W. Bush and Commerce Secretary in the Cabinet of Bill Clinton. The name also recognizes Mineta’s service as a councilman for, and mayor of, San Jose.</p>
                        <p>San Jose is the largest city in the Bay Area; but SJC is the Bay Area’s second-busiest airport by passenger boardings, behind SFO. In addition, the airport is also an official U.S. Customs and Border Protection international port of entry. It is situated three miles northwest of Downtown San Jose near the intersections of U.S. Route 101, Interstate 880, and State Route 87. In 2018, 45.4% of departing or arriving passengers at SJC flew on Southwest Airlines; Alaska Airlines was the second most popular airline with about 17.6% of <Link to={"/atlanta-hartsfield-jackson-international-airport/"} className="anchor" rel="noopener noreferrer"> passengers</Link>.</p>


                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Sanjose;