import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';


class Mountpleasant extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Mount Pleasant Municipal Airport (Michigan)</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> Mount Pleasant Municipal Airport </strong>  (IATA: <strong> MOP </strong>, ICAO: <strong> KMOP </strong>, FAA LID: <strong> MOP </strong> ) is a city-owned public-use airport located two miles (3 km) northeast of the central business district of Mount Pleasant, a city in Isabella County, Michigan, United States. The airport became active in 1940. It serves general aviation for Mount Pleasant and the surrounding area. It includes the Federal Aviation Administration (FAA) <Link to={"/houston-texans-football-limo-service/"} className="anchor" rel="noopener noreferrer"> National Plan of Integrated Airport Systems </Link> for 2017–2021, in which it <Link to={"/vocabulary/greater-houston/"} className="anchor" rel="noopener noreferrer"> categorized </Link> as a local <Link to={"/vocabulary/houston/"} className="anchor" rel="noopener noreferrer"> general aviation </Link> facility.</p>
                            
                            <p>Mount Pleasant Municipal Airport covers an area of 344 <Link to={"/houston-cruise-port-transportation/"} className="anchor" rel="noopener noreferrer"> acres </Link>  (139 ha) which contains two runways:</p>

                            <ul>
                                <li>Runway 9/27: 5,000 x 100 ft (1,524 x 30 m), Surface: Asphalt</li>
                                <li>Runway 5/23: 2,500 x 160 ft (762 x 49 m), Surface: <Link to={"/tampa-bay-buccaneers-football-limo-service/"} className="anchor" rel="noopener noreferrer"> Turf </Link></li>
                            </ul>

                            <p>For the 12 months ending December 31, 2014, the airport had 7,935 aircraft operations — an average of 22 per day — all of which was <Link to={"/miami-dolphins-football-limo/"} className="anchor" rel="noopener noreferrer"> general aviation </Link>. There are 28 aircraft based at this airport: 22 single-engine, three multi-engine, one jet, and two ultralights.</p>
                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Mountpleasant;