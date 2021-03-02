import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';



class Post extends Component{
	render(){
		return(
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">

                <InnerBanner />

                <section className="section-full content-inner">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Posts</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>

                <Toplimousine />

            </div>
            <Footer  />
        </div>
		)
	}
}

export default Post;