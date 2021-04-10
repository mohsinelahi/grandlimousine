import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Guestappearance extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Seat </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p>In show business, a <strong> guest appearance </strong> is the participation of an outsider performer (such as a musician or actor) in an event such as a music record or concert, show, etc., when the performer does not belong to the regular cast, band or another performing group. In music, such an outside performer often referred to as a <strong> guest artist </strong>. In performance art, the terms <strong> guest role </strong> or <strong> guest star </strong> are also typical, the latter term explicitly indicating the guest appearance of a celebrity. The second is often also credited as a <strong> special guest star </strong> or <strong> special musical guest star  </strong>by some production companies.</p>

                        <p>In pop music, guest appearances described with a feat. (abbr. as ft.) or with (abbr. as w/).</p>

                        <p>In a TV series, a guest star is an actor who appears in one or a few episodes (sometimes an entire story arc).</p>

                        <p>In radio and television shows, a guest star is a guest on the show who is a celebrity.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Guestappearance;