import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Oceandrive extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Ocean Drive (South Beach) </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> Ocean Drive </strong> is a major thoroughfare in the South Beach neighborhood of Miami Beach, on the east or Atlantic coast of the state of Florida, in the United States.  The road starts at South Pointe just south of 1st Street, near the southernmost end of the main barrier island of Miami Beach, about a quarter-mile west of the Atlantic Ocean. Ocean Drive continues <Link to={"/locations/miami/"} className="anchor" rel="noopener noreferrer"> north </Link> to 15th Street, immediately southeast of Lincoln Road.</p>
                            <p>Ocean Drive is known mostly for its Art Deco hotels and restaurants/bars, many of which have prominently featured in numerous movies and media. Among the most popular is the 1939 Colony Hotel, known as the most photographed art deco hotel. Renovated as a boutique hotel, it featured in cameos in scores of movies and TV shows, including the series Dexter. Another popular art deco hotel is the Clevelander Hotel; in addition to its standard hotel services, it has an indoor sports lounge, a dance floor and pool area on the ground floor, and a <Link to={"/locations/miami-party-bus/"} className="anchor" rel="noopener noreferrer">complementary </Link> roof-top bar. The exterior of the Carlyle Hotel was used for the Birdcage drag club in the 1996 comedy The <Link to={"/locations/miami-limousine/"} className="anchor" rel="noopener noreferrer">Birdcage</Link>.</p>
                    
                            <h4>Ocean Drive (South Beach) Miami</h4>
                            <p>The Sunray Apartments featured in the movie Scarface (1983). The 2002 video game, Grand Theft Auto: Vice City, based the look of its eponymous city on Miami. It has a replica of Ocean Drive with the same name.</p>
                            <p>Ocean Drive is also the location of the famed Casa Casuarina, the residence of the late Italian fashion designer Gianni Versace. Since his death, the house was sold and adapted for use as a <Link to={"/locations/houston-car-service/"} className="anchor" rel="noopener noreferrer">boutique</Link> hotel. It is one of the most photographed homes in North <Link to={"/locations/palm-beach/"} className="anchor" rel="noopener noreferrer">America</Link>. </p>
                            <p>One of the most famous restaurants on this strip is Mango’s <a href="https://www.crunchbase.com/organization/grand-limousine" target="_blank" className="anchor" rel="noopener noreferrer"> Tropical </a> Café, a Caribbean-inspired restaurant that also has live performances by dancers and singers.</p>
                            <p>Known for its cabaret and drag queen shows, the Palace Bar dedicated to the LGBTQ <Link to={"/miami-dolphins-football-limo/"} className="anchor" rel="noopener noreferrer">community</Link>.</p>


                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Oceandrive;