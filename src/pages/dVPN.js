import React, { Component } from 'react';
import Enquire from '../pages/components/Enquire'
import DVPNHomePage from '../assets/DVPNHomePicture.svg';
import LearnMoreBtn from "../assets/LearnMoreBtn.png";
import SentinelPicture from "../assets/SentinelPicture.png"
import EncryptedDataImg from "../assets/EncryptedDataImg.png";
import OpenSourceImg from "../assets/OpenSourceImg.png";
import NoLogsImg from "../assets/NoLogsImg.png";
import UniversalImg from "../assets/UniversalImg.png";
import tick from '../assets/tick.svg';
class dVPN extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="dvpn">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row">
                                <div class="text-white home-div text-center col-lg-12 ">
                                    <h1 class="home-title" data-aos="zoom-in">Create your own decentralized and distributed VPN network <span>with Exidio today!</span></h1>
                                </div>
                                <img data-aos="fade-up" data-aos-duration="1000" className="dvpn-img" src={DVPNHomePage} alt="dvpn"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sentinel-dvpn-section">
                    <div className="container">
                        <div className="row">
                            <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-7">
                                <div className="ContentSentinel">
                                    <h1 className="HeadingSentinel"> Exidio is a core contributor to the Sentinel dVPN, try it out today! </h1>
                                    <div className="line-tick">
                                        <img src={tick} alt="tick" />
                                        <p className="SubHeadingSentinel"> Fully open-source and transparent. </p>
                                    </div>
                                    <div className="line-tick">
                                        <img src={tick} alt="tick" />
                                        <p className="SubHeadingSentinel"> Provable end to end encryption. </p>
                                    </div>
                                    <div className="line-tick">
                                        <img src={tick} alt="tick" />
                                        <p className="SubHeadingSentinel"> Cross Platform and Available on iOS and Android as well </p>
                                    </div>
                                    <div className="line-tick">
                                        <img src={tick} alt="tick" />
                                        <p className="SubHeadingSentinel">10s of thousands of active users. </p>
                                    </div>
                                    <p className="web-sentinel">
                                           Learn more at  <a href="https://sentinel.co/" rel="noopener noreferrer" target="_blank">sentiel.co</a></p>
                                    
                                    <a href="https://sentinel.co/downloads" rel="noopener noreferrer" target="_blank"><div className="DownloadsPageSentinel">Downloads Page
                                        <img src={LearnMoreBtn} alt="learnmore"></img>
                                    </div></a>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000"  className="SentinelPicture col-lg-5">

                                <img src={SentinelPicture} alt="sentinel"></img>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="industry-leading">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="TitleTextDVPNFeatures"> Industry leading dVPN technology <span>ensuring customer trust and satisfaction </span> </h1>
                                <div className="row">



                                    <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures" data-aos="fade-up" data-aos-duration="1000">

                                        <img src={EncryptedDataImg} alt="Encrypted"></img>
                                        <p class="HeadingDVPNFeatures"> Encrypted Data </p>
                                        <p class="SubHeadingDVPNFeatures"> Implementation of cutting edge encrypted data tunneling protocols ensuring privacy and security of data </p>
                                    </div>

                                    <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures" data-aos="fade-up" data-aos-duration="1500">

                                        <img src={OpenSourceImg} alt="OpenSource"></img>
                                        <p class="HeadingDVPNFeatures"> Open Source </p>
                                        <p class="SubHeadingDVPNFeatures"> Back-end architecture that is resilient and constantly reviewed so users don't have any fear of a hack </p>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures" data-aos="fade-up" data-aos-duration="2000">

                                        <img src={NoLogsImg} alt="NoLogs"></img>
                                        <p class="HeadingDVPNFeatures"> No Logs </p>
                                        <p class="SubHeadingDVPNFeatures"> Users have the assurance that none of their browsing history or search information is being stored and logged </p>

                                    </div>
                                    <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures" data-aos="fade-up" data-aos-duration="2500">

                                        <img src={UniversalImg} alt="Universal"></img>
                                        <p class="HeadingDVPNFeatures feature4DVPNFeatures"> Universal Accessibility </p>
                                        <p class="SubHeadingDVPNFeatures"> The ability for users to connect and consume content available in different regions across the globe </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <Enquire />
            </React.Fragment >
        );
    }
}

export default dVPN;