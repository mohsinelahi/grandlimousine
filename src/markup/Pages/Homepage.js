import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer	from './../Layout/Footer';
import Popcity from './../Element/popCity';
import Fromblog from './../Element/Fromblog';
import InnerBanner from '../Element/Innerbanner';
import DocumentMeta from 'react-document-meta';


class Homepage extends Component{
render(){
	const meta = {
		title: 'Grand Limousine - Book Direct Since 2007',
		description: 'Now, you can book Limousine or Airport Car Service Direct with us. Fast Booking Curbside Assist and Escort Chauffeurs from The Most Trusted Worldwide Name In Travel. Providing Direct Destination Ready Limousine and Airport Car Service. The World’s Leading Provider of High-Quality Chauffeur.',
		canonical: '',
		meta: {
		  charset: 'utf-8',
		  name: {
			keywords: 'react,meta,document,html,tags'
		  }
		}
	  };
return(
	<DocumentMeta {...meta}>

<main className="page-wraper">
   <Header />
   <div className="page-content bg-white">
      <InnerBanner />
      <div className="content-block">
         <div className="section-full home-about bg-img-fix most-visited content-inner" >
            <div className="container">
               <div className="section-head text-center">
                  <h2 className="box-title">GRAND LIMOUSINE – OFFICIAL WEBSITE</h2>
                  <div className="dlab-separator bg-white"></div>
                  <p>THE WORLD’S LEADING PROVIDER OF HIGH-QUALITY CHAUFFEURED CAR & LIMOUSINE SERVICES</p>
               </div>
               <div className="row">
                  <div className="col-md-7">
                     <div className="left">
                        <h4>GRAND LIMOUSINE</h4>
                        <h2>BOOK DIRECT SINCE 2007</h2>
                        <p>	Now, you can book Limousine or Airport Car Service Direct with us. Fast Booking Curbside Assist and Escort Chauffeurs from The Most Trusted Worldwide Name In Travel. Providing Direct Destination Ready Limousine and Airport Car Service. The World’s Leading Provider of High-Quality Chauffeur & Limousine Services. Car Service, and Party Bus. Book Direct Premium Limousine Service Since 2007.</p>
                        <p>If you require an Airport Car – SUV, Wedding, Bachelor Parties, Bachelorette Parties, Proms, Hotel pick up, Corporate transfer. Take a look at our fleet and let us know how we can help you with your special occasion. Our Luxury Mercedes Sprinter Limousine & Private Airport Car Service has Exceptional Trusted Professionalism. We serve a level of premium quality in the convenience of 5 Markets.</p>
                        <Link to={"/about-us/"} rel="noopener noreferrer">Learn More</Link>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="right"> 
                        <img src={require('./../../images/about-limo.jpg')} alt="Man in Limousine"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="section-full home-services bg-white content-inner">
            <div className="container">
               <div className="section-head text-black text-center">
                  <h2 className="box-title">WE CARE ABOUT YOUR SAFETY</h2>
                  <div className="dlab-separator bg-primary"></div>
                  <p>ENJOY LUXURY TRAVEL IN COMFORT AND ON TIME !</p>
               </div>
               <Fromblog />
            </div>
         </div>
         <div className="section-full home-top-cities bg-white content-inner">
            <div className="container">
               <div className="section-head text-black text-center">
                  <h2 className="box-title">Top Cities</h2>
                  <div className="dlab-separator bg-primary"></div>
               </div>
               <Popcity />
            </div>
         </div>
      </div>
   </div>
   <Footer />
</main>
</DocumentMeta>

)
}
}
export default Homepage;