import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Largenumbers extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Large Numbers </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> Large numbers </strong> are numbers that are significantly larger than those ordinarily used in everyday life, for instance in simple counting or in monetary transactions. The term typically refers to large positive integers, or more generally, large positive real numbers, but it may also be used in other contexts. The study of nomenclature and properties of large numbers is sometimes called geology.</p>
                            <p>Very large numbers often occur in fields such as mathematics, cosmology, cryptography, and statistical mechanics. Sometimes people refer to numbers as being “astronomically large”. However, it is easy to mathematically define numbers that are much larger even than those used in astronomy.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Largenumbers;