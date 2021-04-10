import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Museumofarts extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Museum of Arts and Sciences (Macon, Georgia) </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p> <strong> Museum of Arts and Sciences</strong>  in Macon is a community museum in the U.S. state of Georgia. The facility includes four galleries with frequently changing exhibitions, the Discovery House with hands-on activities, live animal habitats, the Mark Smith Planetarium, nature trail, garden, store, auditorium, and classrooms. New exhibitions on fine arts, science topics, and the humanities presented for periods of four to six months. The museum is open to the public daily and offers programs to schools and groups. The museum is a member of the American Alliance of Museums as of July 2019.</p>

                        <h4>Macon</h4>
                        <p>The museum first opened in 1956 and started as a room in the Wesleyan Conservatory with a few activities for children. In 1964, the museum moved locations with the construction of a gallery and workshop. A year later, a planetarium would add as a new wing of the museum. A 1980 addition included most of the museum’s infrastructure. The Discovery House, a new lobby, and classrooms added in 2001. In 2018, an additional building was added which provides a view of the peach orchard behind the <Link to={"/locations/augusta-party-bus/"} className="anchor" rel="noopener noreferrer"> building</Link>. Planned additions to the museum, including a bat cave and amphitheater, <a href="https://www.augustacarservice.com/" target="_blank" className="anchor" rel="noopener noreferrer"> were </a> approved in March 2019 and are expected to be complete by the end of the year.</p>


                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Museumofarts;