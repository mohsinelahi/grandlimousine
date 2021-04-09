import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';


class Luxuryvehicle extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Luxury Vehicle</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p>A luxury vehicle is to provide the driver and passengers with increased comfort, a higher level of equipment, and increased perception of quality than regular cars (such as economy cars, which provided as essential low-cost transportation devices) for an increased price. The term is subjective, and based on either the qualities of the vehicle itself or the brand image of its manufacturer Luxury brands are considered to have a higher status than premium brands. However, there is no fixed differentiation between the two.</p>
                            <p>Traditionally, luxury cars have been large vehicles, however, contemporary luxury cars range in size from <Link to={"/miami-dolphins-football-limo-service/"} className="anchor" rel="noopener noreferrer"> compact </Link> hatchbacks to large sedans and SUVs.  Some car manufacturers market their <Link to={"/houston-cruise-port-transportation/"} className="anchor" rel="noopener noreferrer"> luxury </Link> models using the same marque as the rest of their models. Other manufacturers sell their luxury models separately under a different marque, for example, Lexus (launched by Toyota in 1989) and Bentley (purchased by Volkswagen in 1998). Occasionally, a luxury car is initially sold under a mainstream marque and is later re-branded under a specific luxury marque (for example, the Hyundai Genesis / Genesis G80). For mass-produced luxury cars, sharing of platforms or components with other models is standard, as per modern automotive industry <Link to={"/tampa-bay-buccaneers-football-limo-service/"} className="anchor" rel="noopener noreferrer"> practice</Link>.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Luxuryvehicle;