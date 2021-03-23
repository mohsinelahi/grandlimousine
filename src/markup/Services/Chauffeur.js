import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Booknowtable from '../Element/Booknowtable';


class Chauffeur extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Chauffeur</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Service </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">
                            <p> A <strong> chauffeur </strong> is a person employed to drive a passenger motor vehicle, especially a luxury vehicles such as a large sedan or limousine. A woman used to drive a passenger motor vehicle is a chauffeuse. Initially, such drivers were often personal employees of the vehicle owner, but now in many cases, specialist chauffeur service companies or individual drivers provide both driver and vehicle for hire, although there are service companies that give the driver</p>
                            <p>The term chauffeur comes from the French term for stoker because the earliest automobiles, like their railroad and sea vessel counterparts, were steam-powered and required the driver to stoke the engine. Old petrol/gasoline-powered motor cars, before the advent of electric ignition, were ignited by ‘hot tubes’ in the cylinder head, which had to be pre-heated before the engine would start. Hence the term chauffeur, which, in this context, means something like “heater-upper.” The chauffeur would prime the hot tubes at the start of a journey, after which the natural compression cycle of the engine would keep them at the correct temperature. The chauffeur also maintained the car, including routine maintenance and cleaning, and had to be a skilled mechanic to deal with breakdowns and tire punctures en route, which was very common in the earliest years of the automobile.</p>
                        
                        </div>
                    </div>
                </section>
                <Toplimousine /> </div>
            <Footer /> </div>
        )
    }
}

export default Chauffeur;