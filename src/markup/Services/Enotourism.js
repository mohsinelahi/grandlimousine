import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Enotourism extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Enotourism </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> Enotourism</strong>, ecotourism, <strong> wine tourism</strong>, or mini tourism refers to tourism whose purpose is or includes the tasting, consumption or purchase of wine, often at or near the source. Where other types of tourism are often passive, ecotourism can consist of visits to wineries, tasting wines, vineyard walks, or even taking an active part in the harvest.  Enotourism is a relatively new form of tourism. Its history varies significantly from region to region. Still, in places such as the Napa Valley AVA and Wine Country, it saw substantial growth once a concerted marketing effort implemented in 1975 that was given a further boost by the 1976 Judgment of Paris.</p>

                            <p>Other regions, such as Catalonia, Spain have only started marketing ecotourism starting in the mid-2000s, primarily focusing on how it is an alternative form of tourism to the beach for which Spain is overall known. There was also a rise in the profile of ecotourism among English speakers with the 2004 release of the film, Sideways whose two central characters visit wineries and wine in the Santa Barbara region of Southern <Link to={"/wine-tour/"} className="anchor" rel="noopener noreferrer"> California</Link>.</p>


                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Enotourism;