import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';


var covidimg = require('../../images/Covid19.jpg');

class Covid19 extends Component {
    render() {
    return(
            <main className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Covid 19 The Current End Game </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Grand Limousine Savannah</h4>
                                        <p>Covid 19 – Projections about how COVID-19 will play out are speculative. Still, the end game will most likely involve a mix of everything that checked past pandemics: Continued social-control measures to buy time, new antiviral medications to ease symptoms, and a vaccine. The exact formula—how long control measures such as social distancing must stay in place, for instance—depends in large part on how strictly people obey restrictions and how effectively governments respond. For example, containment measures that worked for COVID-19 in places such as Hong Kong and South Korea came far too late in Europe and the U.S. “The question of how the pandemic plays out is at least 50 percent social and political,” Cobey says.</p>
                               
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={covidimg} alt="Covid 19"></img>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-two">
                    <div className="cities-content heading">
                        <div className="container">

                        <p>The other 50 percent will probably come from science. Researchers have banded together like never before and are working on multiple fronts to develop remedies. If any of the several antiviral medications currently in development prove useful, they will improve treatment options and lower the numbers who get seriously ill or die. A technique to screen for SARS-CoV-2 neutralizing antibodies, an indicator of immunity in recovered patients, could also prove very useful. Krammer and his colleagues have developed one such test, and there are others. Previously used only in local epidemics, these new serological assays won’t end the pandemic, but they could make it possible to spot and use antibody-rich blood as a treatment for critically ill patients; more positively, the tests will also get people back to work faster if those who fought off the virus and are immune can be identified.</p>

                        <p>It will take a vaccine to stop transmission. That will take a few more weeks from now. Still, there is reason to think the vaccine will work effectively. Compared with flu viruses, coronaviruses don’t have as many ways to interact with host cells. “If that interaction goes away, [the virus] can’t replicate anymore,” Krammer says. “That’s the advantage we have here.” It is not clear whether a vaccine will confer long-term immunity as with measles or short-term protection as with flu shots. But “any vaccine at all would be helpful at this point,” says epidemiologist Aubree Gordon of the University of Michigan.</p>

                        <p>Unless a vaccine is administered to all of the world’s eight billion inhabitants who are not currently sick or recovered, COVID-19 is likely to be around a while. It will circulate and make people seasonally ill—sometimes very ill. But if the virus stays in the human population long enough, it will start to infect children when they are young. Those cases are typically, though not always, quite mild, and so far, the children appear less likely to develop the severe disease if they get reinfected as adults. The combination of vaccination and natural immunity will protect many of us. The coronavirus, like most viruses, will live on—but not as a planetary plague.</p>

                        <p>Read more about the coronavirus <a href="https://www.scientificamerican.com/article/nine-important-things-weve-learned-about-the-coronavirus-pandemic-so-far/" target="_blank" className="anchor" rel="noopener noreferrer"> outbreak </a> from Scientific American here. And read coverage about our limousine <Link to={"/locations/houston-limousine/"} className="anchor" rel="noopener noreferrer"> services </Link> here.</p>

                        <p><a href="https://www.scientificamerican.com/magazine/sa/2020/06-01/" target="_blank" className="anchor" rel="noopener noreferrer">https://www.scientificamerican.com/magazine/sa/2020/06-01/</a></p>

                        <p>This article was originally published with the title “What Comes Next” in Scientific American 322, 6, 44-45 (June 2020)</p>

                        <p>doi:10.1038/scientificamerican0620-44</p>

                        <p>How the COVID-19 Pandemic Could End – Scientific American. <a href="https://scientificamerican.com/article/how-the-covid-19-pandemic-could-end1/" target="_blank" className="anchor" rel="noopener noreferrer"> https://scientificamerican.com/article/how-the-covid-19-pandemic-could-end1/ </a></p>
                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> 
            </main>
        )
    }
}

export default Covid19;