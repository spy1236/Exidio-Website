import React, { Component } from 'react';
import HubspotForm from 'react-hubspot-form'
import staked_layer from '../assets/stacked_layers.png';
import SentinelFull from '../assets/SentinelFull.png';
import BPSAALogo from '../assets/BPSAALogo.png';
import PIVXLogo from '../assets/PIVXLogo.png';
import KIRALogo from '../assets/KIRALogo.png';
import SpiderLogo from '../assets/SpiderLogo.png';
import SodioLogo from '../assets/SodioLogo.png'
import AlphatechLogo from '../assets/AlphatechLogo.png';
class ContactUs extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="contactus section bg-home home-half">
                    <div className="container">
                        <div className="row">
                            <div class="text-white home-div text-center col-lg-6">
                                <h1 data-aos="fade-up" data-aos-duration="1000" class="home-title">Empowering secure access to <span>Web 3.0</span></h1>
                                <p data-aos="fade-up" data-aos-duration="1000" className="subtitle">Building decentralized and distributed networking solutions and contributing to the Cosmos open source community</p>
                                <div className="home-right">
                                    <img data-aos="zoom-in" src={staked_layer} alt="layer" className="layer-img" />
                                </div>
                            </div>
                            <div className="col-lg-6 contact-aside">
                                <HubspotForm
                                    portalId='8626507'
                                    formId='8ee8d51e-a83a-4a7b-bcac-d5bf50a2b465'
                                    onSubmit={() => console.log('Submit!')}
                                    onReady={(form) => console.log('Form ready!')}
                                    loading={<div>Loading...</div>}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="CompaniesPage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <h1 className="TitleCompanies text-center"> Companies and projects we work with </h1>
                                <div className="row">
                                   
                                    <div className="col-lg-12">
                                        <div className="row companies-row">
                                            <div className="CompaniesPictureBox">
                                               <a href="https://sentinel.co/" target="blank_"> <img src={SentinelFull} alt="sentinel"></img></a>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                            <a href="https://dvpn-alliance.github.io/" target="blank_"><img src={BPSAALogo} alt="BPSAALogo"></img></a>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                            <a href="https://pivx.org/" target="blank_"><img src={PIVXLogo} alt="PIVXLogo"></img></a>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                            <a href="https://kiracore.com/" target="blank_"><img src={KIRALogo} alt="KIRALogo"></img></a>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                            <a href="https://sodio.tech/" target="blank_"> <img src={SodioLogo} alt="SodioLogo"></img></a>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                            <a href="https://spidervpn.org/" target="blank_"> <img src={SpiderLogo} alt="SpiderLogo"></img></a>
                                            </div>
                                           
                                            <div className="CompaniesPictureBox">
                                            <a href="https://www.alphatechit.co.uk/index.html" target="blank_"> <img src={AlphatechLogo} alt="AlphatechLogo"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        );
    }
}

export default ContactUs;