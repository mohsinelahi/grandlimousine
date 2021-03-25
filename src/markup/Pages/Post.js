import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import DocumentMeta from 'react-document-meta';



class Post extends Component{
	render(){
        const meta = {
            title: 'Posts',
            description: "",
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
            </main>
        </DocumentMeta>
		)
	}
}

export default Post;