import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';




class Orlandointernationalairport extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Orlando International Airport</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> Orlando International Airport </strong>  (IATA: <strong> MCO </strong> , ICAO: <strong> KMCO </strong>, FAA LID: <strong> MCO </strong> ) is a major public airport located six miles (10 km) southeast of Downtown Orlando, Florida, United States. In 2019, MCO handled 50,613.072 passengers, making it the busiest airport in the state of Florida and the tenth-busiest airport in the United States.</p>

                            <p>The airport serves as a hub for Silver Airways and a focus city for Frontier Airlines, JetBlue, Southwest Airlines, and Spirit Airlines. <Link to={"/houston-cruise-port-transportation/"} className="anchor" rel="noopener noreferrer"> Southwest </Link> is the airport’s largest carrier by passengers carried. The airport is also a primary international gateway for the mid-Florida region, with over 850 daily flights on 44 airlines. The airport also serves 135 domestic and international destinations. At 11,609 acres (4,698 ha), MCO is one of the largest commercial airports in terms of land area in the US. Also, the airport is home to a maintenance base for United Airlines.</p>

                            <p>The airport code MCO stands for the airport’s former name, McCoy Air Force Base, a Strategic Air Command (SAC) installation that was closed in 1975 as part of a general military drawdown following the end of the Vietnam War.</p>

                            <p>In terms of commercial airline service, the Greater Orlando area served by Orlando Sanford International Airport (SFB), and more indirectly by Daytona Beach International Airport (DAB), Orlando Melbourne International Airport (MLB), Tampa International Airport (TPA), and St. Pete–Clearwater International <Link to={"/houston-sprinter-shuttle-services/"} className="anchor" rel="noopener noreferrer"> Airport </Link> (PIE).</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Orlandointernationalairport;