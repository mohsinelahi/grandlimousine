import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Notfound extends Component{
	render(){
        return(
            <main className="page-wraper">
                <section class="error-404 not-found">
                    <div class="not_found_inner">
                   
                    <div class="cont">
         <div class="logo">
            <Link to={"/"} rel="noopener noreferrer"> 
                <img src={require("../../images/logo-grand-black.png")} alt="Logo Grand Limousine" />
            </Link>
         </div>
         <header class="page-header">
            <h1 class="page-title">4<span>0</span>4</h1>
            <h3>Oops!</h3>
            <p>The Page you are looking for does not exist</p>
         </header>
         <div class=" b-trans">
            <Link to={"/"} rel="noopener noreferrer"> Return to Home </Link>
         </div>
      </div>
                    </div>
                </section>
            </main>
        )
	}
}

export default Notfound;