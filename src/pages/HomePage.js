import React, { Component } from 'react';
import Enquire from '../pages/components/Enquire';
import Header from '../pages/components/Header'
import proudctBg from '../assets/HomeBackground.png';
import Exidio from '../assets/Exidio.mp4';
import ExidioFeatureLines from '../assets/ExidioFeatureLines.png';
import DistributedImg from '../assets/DistributedImg.svg';
import HomeFeaturesHeader from '../assets/HomeFeaturesHeader.png';
import CustomImg from '../assets/CustomImg.svg';
import CrossImg from '../assets/CrossImg.svg';
import AffordableImg from '../assets/AffordableImg.svg';
import CosmosLogo from "../assets/CosmosLogo.svg";
import TendermintLogo from "../assets/TendermintLogo.svg";
import sentinel_ecosystem from '../assets/sentinel_ecosystem.png';
import cosmos_ecosystem from '../assets/sentinel_ecosystem1.png';
import SentinelLogo from "../assets/SentinelLogo.svg";
import LearnMoreBtn from "../assets/LearnMoreBtn.png";
import BuildingDAPPBtn from '../assets/BuildingDAPPBtn.png';
import BuildingDAPPPicture from '../assets/BuildingDAPPPicture.png';
import FirstDAPPBtn from '../assets/FirstDAPPBtn.png';
import FirstDAPPPicture from '../assets/FirstDAPPPicture.png';
import SentinelFull from '../assets/SentinelFull.png';
import BPSAALogo from '../assets/BPSAALogo.png';
import PIVXLogo from '../assets/PIVXLogo.png';
import KIRALogo from '../assets/KIRALogo.png';
import SpiderLogo from '../assets/SpiderLogo.png';
import SodioLogo from '../assets/SodioLogo.png'
import AlphatechLogo from '../assets/AlphatechLogo.png';
import giticon from '../assets/git-icon.svg';
import staked_layer from '../assets/stacked_layers.png';
import tick from '../assets/tick.svg';

class HomePage extends Component {

    render() {

        return (
            <div>
                <Header />
                <section className="section bg-home home-half" id="home" data-image-src={proudctBg}>
                    <div className="container">
                        <div className="row">
                            <div class="text-white home-div text-center col-lg-6">
                                <h1 data-aos="fade-up" data-aos-duration="1000" class="home-title">Empowering secure access to <span>Web 3.0</span></h1>
                                <p data-aos="fade-up" data-aos-duration="1000" className="subtitle">Building decentralized and distributed networking solutions and contributing to the Cosmos open source community</p>
                            </div>
                            <div className="col-lg-6 home-right">
                            <img data-aos="zoom-in" src={staked_layer} alt="layer" className="layer-img" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 HomeFeaturesPage">
                                <h1 className="HomeFeaturesTitle"> Create a resilient and robust decentralized VPN with Exidio </h1>
                                <div  data-aos="fade-up" data-aos-duration="1000" className="col-lg-12 video-section">
                                    <video loop autoPlay muted>
                                        <source src={Exidio} type="video/mp4" style={{ zIndex: -10 }} />
                                    </video>
                                    <img src={ExidioFeatureLines} alt="lines" className="HomeFeaturesLines" />
                                </div>
                                <div className="col-lg-12" style={{ zIndex: 5 }}>
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img className="head-line" src={HomeFeaturesHeader} alt="header"></img>
                                                <div className="head-section">
                                                    <img src={DistributedImg} alt="Distributed" className="HomeFeaturesContentLogo"></img>
                                                    <p className="HomeFeaturesHeading"> Distributed and Resilient Architecture </p>
                                                    <p className="HomeFeaturesSubHeading"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img className="head-line" src={HomeFeaturesHeader} alt="header"></img>
                                                <div className="head-section">
                                                    <img src={CustomImg} alt="icon" className="HomeFeaturesContentLogo"></img>
                                                    <p className="HomeFeaturesHeading"> Custom Application Branding and UI </p>
                                                    <p className="HomeFeaturesSubHeading"> In-house team to implement custom branding designs and corresponding UI layouts </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img className="head-line" src={HomeFeaturesHeader} alt="header"></img>
                                                <div className="head-section">
                                                    <img src={CrossImg} alt="icon" className="HomeFeaturesContentLogo"></img>
                                                    <p className="HomeFeaturesHeading"> Cross Platform Applications </p>
                                                    <p className="HomeFeaturesSubHeading"> Availability on all major desktop and mobile operating systems to ensure that no user is left out  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img className="head-line" src={HomeFeaturesHeader} alt="Feactures"></img>
                                                <div className="head-section">
                                                    <img src={AffordableImg} alt="affordable" className="HomeFeaturesContentLogo"></img>
                                                    <p className="HomeFeaturesHeading"> Affordable Pricing and Partnership </p>
                                                    <p className="HomeFeaturesSubHeading"> Most competitive terms of engagement in the industry as well as a partnership program </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contribute-section">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="row">

                                    <div className="col-lg-6 layer-texure">
                                        <div className="box2">
                                            <div className="LogoPortion">
                                                <img src={CosmosLogo} alt="logo" className="Logo"></img>
                                                <img src={TendermintLogo} alt="logo" className="Logo"></img>
                                                
                                            </div>
                                            <p className="Text1">Contribution to the Cosmos Ecosystem</p>
                                           
                                            <img data-aos="zoom-in"  src={cosmos_ecosystem} className="ecosystem" alt="Sentinel EcoSytem"/>
                                            <div className="opensource">
                                          <a href="https://github.com/ExidioCo/modules" target="_blank"  rel="noopener noreferrer"><span>open sourced <img src={giticon} alt="git"></img></span></a>
                                            <a href="https://cosmos.network/" rel="noopener noreferrer" target="_blank" ><div className="LearnMoreCosmos">Learn More
                                                <img src={LearnMoreBtn} alt="learmore"></img>
                                            </div></a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 layer-texure">
                                        <div className="box2">
                                            <div className="LogoPortion">
                                               
                                                <img src={SentinelLogo} className="Logo" alt="logo"></img>
                                            </div>
                                            <p className="Text1">Contribution to the Sentinel Ecosystem</p>
                                           
                                           <img data-aos="zoom-in" src={sentinel_ecosystem} className="ecosystem" alt="Sentinel EcoSytem"/>
                                           <div className="opensource">
                                           <span>To be open sourced <img src={giticon} alt="git"></img></span>
                                            <a href="https://sentinel.co/" rel="noopener noreferrer" target="_blank" ><div className="LearnMoreCosmos">Learn More
                                                <img src={LearnMoreBtn} alt="learmore"></img>
                                            </div></a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="first-app">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row first-app-row">
                                    <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-7">


                                        <div className="TitleFirstDAPP">

                                            <img src={FirstDAPPBtn} alt="dapp"></img>
                                            <p className="TitleFirstDAPPText">Dapp Development </p>
                                        </div>

                                        <p className="HeadingFirstDAPP">Exidio is a core contributor to the Sentinel dVPN client which has seen significant adoption</p>
                                        <div className="col-lg-8">
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP">425+ TB of data transmitted </p>
                                            </div>
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP"> 1,000+ 5-star reviews on Google Play, average rating of 4.8 stars </p>
                                            </div>
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP">With over 100,000 users across all plaforms, Exidio's flagship dVPN application has seen significant growth. </p>
                                            </div>
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP"> Over 10,000 average daily sessions </p>
                                            </div>
                                        </div>
                                        <p className="stats-sentinel">
                                            <a href="https://stats.sentinel.co/" rel="noopener noreferrer" target="_blank">Click here</a> to see real-time stats for the Sentinel dVPN network</p>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="PictureFirstDAPP" alt="dapp">
                                            <img data-aos="fade-up" src={FirstDAPPPicture} alt="firstapp"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="building-dapp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row building-app-row">
                                    <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-7">

                                        <div className="TitleFirstDAPP">
                                            <img src={BuildingDAPPBtn} alt="dAPP"></img>
                                            <p className="TitleFirstDAPPText"> DaPP Implementation Services </p>
                                        </div>
                                        <h2 className="HeadingFirstDAPP"> Effortlessly setup and monetize on your own dVPN application with Exidio</h2>
                                        <div className="col-lg-8">
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP"> Set up your own dVPN company </p>
                                            </div>
                                           
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP"> Decentralize your existing VPN service </p>
                                            </div>
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP"> Save time and cut costs eliminating node hosting and maintenance </p>
                                            </div>
                                            <div className="line-tick">
                                                <img src={tick} alt="tick" />
                                                <p className="SubHeadingFirstDAPP">Open source code ensuring full user trust </p>
                                            </div>
                                            
                                        </div>
                                      
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="PictureBuildingDAPP">
                                            <img data-aos="fade-up" src={BuildingDAPPPicture} alt="dAPP"></img>
                                        </div>
                                    </div>
                                </div>
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
                <Enquire />
            </div>
        );
    }
}

export default HomePage;