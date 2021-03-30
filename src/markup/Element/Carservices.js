import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Carservices extends Component{
	render(){
		return(

         
            <div className="car-services">
                <div className="row">
                    <div className="col-md-4 border-right border-bottom">
                        <h4> Limousine Service</h4>
                        <p>With us, you can enjoy premium quality Airport Limousine and exceptional premium Airport Car Service. We have a team of professional and responsible members and state-of-the-art technological facilities. Enjoy a complete range of Chauffeurs & Luxury Limousine with us. Our transport facilities are available for both families and business people with busy working schedules.</p>
                    </div>
                    <div className="col-md-4 border-right border-bottom">
                        <h4>Airport & Hotel Transfers</h4>
                        <p>Enjoy a reliable and affordable transfer with us to or from your hotel to any airport. Grand Car is the best choice for chauffeur transfer services accessible on the pocket. Our helpful team of experienced chauffeurs will smoothly drive you through daily traffic. We assure you that you will reach the airport on time and won’t miss the flight. We are on time, every time.</p>
                    </div>
                    <div className="col-md-4 border-bottom">
                        <h4>Corporate Transportation</h4>
                        <p>We offer high-end solutions for transport that we have designed to suit your business needs. You can rely on our strong business ethics. With us, you will arrive at your business meeting or corporate event in style. Also, you will get the confidence to sign that million dollar contract. All of our corporate cars are of high quality, and we provide you with an exclusive means of transport to your business deals.</p>
                    </div>
                    <div className="col-md-4 border-right ">
                        <h4>Wedding</h4>
                        <p>With our wedding limousine, you can arrive at your wedding venue in style and grandeur. The limo will be a special treat for you, and your guest will be in the best mood on that big day. For your wedding day, you want everything in the best condition and considering that we serve you accordingly. We offer a wide range of limousines and do our best to make your dream come true.</p>
                    </div>
                    <div className="col-md-4 border-right ">
                        <h4>Prom</h4>
                        <p>A prom day is something that every teenager wants to be unique. And nothing is better than making a statement entry in a luxury limousine. You can <Link to={"/locations/atlanta-car-service/"} className={"anchor"} rel="noopener noreferrer"> start </Link> enjoying the night <Link to={"/concert-limo/"} className={"anchor"} rel="noopener noreferrer"> even </Link> before the party begins. With your limo or party bus, you will enjoy the ride like a prom king or queen.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Bachelor / Bachelorette</h4>
                        <p>A bachelor party is the last celebration of a bachelor’s life, and you want to spend it with your friends. You want it to be a lifetime experience. Choose our party buses as this is the best means of <Link to={"/locations/orlando-car-service/"} className={"anchor"} rel="noopener noreferrer"> transport </Link> to travel around the different party spots no matter where you are. <Link to={"/locations/houston/"} className={"anchor"} rel="noopener noreferrer"> Houston </Link>  Limo offers the most awesome party buses in your <Link to={"/locations/houston-car-service/"} className={"anchor"} rel="noopener noreferrer"> area</Link>.</p>
                    </div>
                </div>
            </div>

            )
        }
    }
export default Carservices;