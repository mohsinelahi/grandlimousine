import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import DocumentMeta from 'react-document-meta';
import Havequestion from '../Element/Havequestion';
import Miamibanner from '../Element/Miamibanner';



class Exploringatlanta extends Component {
    render() {
    return(
            <main className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Miamibanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Exploring Sites Where History Was Made in Atlanta</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Limousine & Car service</p>
                        </div>
                    </div>
                </section>


                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                        
                            <p>Exploring Sites Where History Was Made in Atlanta – The city of Atlanta has experienced many historic moments over the years. Guests to Atlanta can take in these interesting historic sites and see firsthand where history was made. History buffs should be sure to leave room in their travel itinerary for the following places of interest:</p>
                            
                            <h4>The King Center</h4>
                            <p>At the Martin Luther King Jr. National Historic site, The King Center is visited by more than a million people annually. It is the official living memorial dedicated to the advancement of Dr. Martin Luther King Jr.’s legacy. At The King Center, founded in 1968 by Coretta Scott King, you’ll find Freedom Hall, the Eternal Flame, Dr. King’s birth home, Dr. King’s crypt, and Ebenezer Baptist Church. The visitor center screens a 30-minute movie about Dr. King’s life and impacts on the Civil Rights Movement. It also includes a library and historical archives. The Center strives to provide education through <Link to={"/locations/atlanta-limousine/"} className="anchor" rel="noopener noreferrer"> exploration </Link>.</p>
              
                            <h4>Jimmy Carter Library and Museum at Carter Center</h4>
                            <p>This presidential library and museum consist of an archive holding 27 million pages of Carter White House material. Also, it houses a half-million photographs, hundreds of hours of film, audio, and video. Visitors can feel like they are part of U.S. history when they step inside the Oval Office replica or view Head of State <a href="https://www.facebook.com/grandhoustontx/" target="_blank" className="anchor" rel="noopener noreferrer"> gifts</a>.</p>
                            <p>A popular site for the city residents and visitors alike, at the Carter Center, you can stroll through its wooded 35-acre park. The grounds feature a Circle of Flags from all 50 states, Koi pond, formal gardens, cut flower gardens, a beautiful rose garden, a Japanese garden, cherry orchard, and waterfalls nestled between two small lakes.</p>

                            <h4>Margaret Mitchell House & Museum</h4>
                            <p>Visit where Pulitzer Prize-winning author Margaret Mitchell wrote her masterpiece Gone With the Wind at a historic two-acre site in midtown Atlanta. The Margaret Mitchell House and Museum include her house and apartment, which guests can tour, as well as a visitor center, exhibition gallery, Gone With the Wind movie museum, and museum shop.</p>
                            <p>Fans who want to experience more of the book and Academy Award-winning movie’s history can enjoy metro Atlanta’s other Gone With the Wind attractions. In Jonesboro, visit The Road to Tara Museum, which manages an extensive collection of memorabilia from the movie and book. Also, be sure to visit the Marietta Gone With the Wind Museum: Scarlett on the Square. It is a captivating site featuring the Bengali gown worn by Vivien Leigh as Scarlett during the honeymoon scene in the <Link to={"/benefits-of-an-airport-car-service/"} className="anchor" rel="noopener noreferrer"> movie</Link>. Lastly, if interested in paying respects to Mitchell, visit the Historic Oakland Cemetery.</p>


               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-two">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In Atlanta Georgia</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                                
                                <div className="car-services">
                                    <div className="row">
                                        <div className="col-md-4 border-right border-bottom">
                                            <h4> Grand Service</h4>
                                            <p>We offer premium Limousine Services and exceptional Car Service near you. Grand Limousine has employed the most professional and motivated personnel supported by the latest technological facilities. We provide all forms of Chauffeur service & Luxury Limousine, as well as a driver only service, for both families and business people who need to move from one meeting to the next.</p>
                                        </div>
                                        <div className="col-md-4 border-right border-bottom">
                                            <h4>Airport & Hotel Transfers</h4>
                                            <p>We offer reliable and affordable transfers to or from your hotel to any airport. Grand Limousine is your best choice for affordable chauffeur transfer services. Our experienced chauffeurs will drive you through the heavy daily traffic and make sure you arrive on time to board your flight.</p>
                                        </div>
                                        <div className="col-md-4 border-bottom">
                                            <h4>Corporate Transportation</h4>
                                            <p>We offer high-end transport solutions adapted to the constraints of your business needs. With Grand Limousine, you will arrive at that business meeting or corporate gala in style and get the confidence to sign that multi-million dollar deal. Our corporate cars are of VIP standards and will provide you with the best means of transport to your next business engagement.</p>
                                        </div>
                                        <div className="col-md-4 border-right ">
                                            <h4>Wedding</h4>
                                            <p>There is no more excellent way to arrive at your big day than in a grand limousine. The drive to your wedding venue will, in itself, be a special treat and will give you in the best mood as you say “I do.” For your wedding day, you deserve nothing short of the very best as your transportation service provider. We have a wide selection of limousines to make your wedding day great.</p>
                                        </div>
                                        <div className="col-md-4 border-right ">
                                            <h4>Prom</h4>
                                            <p>No day is more memorable in high school than your prom day. And what better way is it to make a statement than arriving in a posh limousine. With our car service, you will begin enjoying the night even before you get to the venue. With your limo or party bus, you will well be on the path to prom king or queen.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Bachelor / Bachelorette</h4>
                                            <p>Your last celebration with your friends before tying the knot should be an experience to remember for life. With our party buses, we make that possible by giving you the best way to travel around your different party spots no matter where you are. Grand Limousine offers the most awesome party buses in your area.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Miami</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Miami</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/kheqmApLCEujdrvSA" rel="noopener noreferrer">3225 NW 204th Terrace, Miami Gardens, FL 33056, USA</a> </li>
                                            <li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
                                            <li>Corporate: <a href="tel:4044244499"> (404) 424-4499</a> EXT. 4</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 </div>
            <Footer />  
            </main>
        )
    }
}

export default Exploringatlanta;