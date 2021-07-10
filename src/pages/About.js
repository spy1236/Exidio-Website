import React, { Component } from 'react';
import Header from '../pages/components/Header'
import AboutPage2Img2 from '../assets/AboutPage2Img2.png'
import AboutPage2Img3 from '../assets/AboutPage2Img3.png'
import AboutPage2Img4 from '../assets/AboutPage2Img4.png'
import AboutPage2Img5 from '../assets/AboutPage2Img7.png'
import linkedin from '../assets/linkedin.svg'
class aboutUs extends Component {

    render() {

        return (
            <div>
                <Header />
                <section className="about AboutPage1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">

                                    <h1 className="AboutPage1Heading" data-aos="fade-up" data-aos-duration="1000"> Meet the team behind Exidio </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6 AboutPage2ContentBox" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="col-lg-12 AboutPage2ContentBoxImgTop" >
                                            <img src={AboutPage2Img2} alt="profile"></img>
                                            <p className="AboutPage2ContentHeading"> Dan Edlebeck </p>
                                        <p className="AboutPage2ContentPosition"> Cofounder & CEO </p>
                                        <p className="AboutPage2ContentSubHeading"> 
                                        For ten years Dan has led companies and nonprofits in their growth. Founding deedle connects, Dan worked to bring three blockchain projects to market and helped build four cryptocurrency company communities. Dan earned his MBA at Babson College and his bachelor's at UW-Madison. 
                                        <a className="about-linkedin" href="https://www.linkedin.com/in/danedlebeck" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="linkedin"/></a>
                                        
                                        </p>
                                      
                                      </div>
                                       
                                    </div>
                                    <div className="col-sm-12 col-lg-6 AboutPage2ContentBox" data-aos="fade-up" data-aos-duration="1500">
                                        <div className="col-lg-12 AboutPage2ContentBoxImgTop" >
                                            <img src={AboutPage2Img3} alt="profile"></img>
                                            <p className="AboutPage2ContentHeading"> Srinivas Baride </p>
                                        <p className="AboutPage2ContentPosition"> Cofounder & CTO </p>
                                        <p className="AboutPage2ContentSubHeading"> A full-stack and blockchain (Ethereum and Cosmos) developer, Srini specializes in the architecture and design of robust and scalable systems. A competitive programmer, Srini held the #1 rank on  the “HackerEarth” platform and was ranked in the top 400 globally on Codechef. 
                                        <a className="about-linkedin" href="https://www.linkedin.com/in/bsrinivas8687/" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="linkedin"/></a>
                                         </p>
                                        </div>
                                        

                                    </div>
                                    <div className="col-sm-12 col-lg-6 AboutPage2ContentBox" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="col-lg-12 AboutPage2ContentBoxImgTop" >
                                            <img src={AboutPage2Img4} alt="profile"></img>
                                            <p className="AboutPage2ContentHeading"> Peter Mancuso </p>
                                        <p className="AboutPage2ContentPosition"> COO </p>
                                        <p className="AboutPage2ContentSubHeading"> Over 12 years of experience leading diverse teams and bootstrapping companies. Peter worked for Charles Schwab & Co, Inc. launching new strategic products, training and implementing new procedures for staff, and assisting with a merger of four RIAs. Peter launched a series of companies from 2008 to 2016, one of which was sold. 
                                        <a className="about-linkedin" href="https://www.linkedin.com/in/pjmancuso/" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="linkedin"/></a>
                                        </p>

                                        </div>
                                      
                                    </div>
                                    <div className="col-sm-12 col-lg-6 AboutPage2ContentBox" data-aos="fade-up" data-aos-duration="1500">
                                        <div className="col-lg-12 AboutPage2ContentBoxImgTop" >
                                            <img src={AboutPage2Img5} alt="profile"></img>
                                            <p className="AboutPage2ContentHeading"> Adrianna Mendez </p>
                                        <p className="AboutPage2ContentPosition"> CMO</p>
                                        <p className="AboutPage2ContentSubHeading"> Adrianna’s passion for cryptocurrency and blockchain technology began after encountering bitcoin in 2015. Her experience leading Cypherglass, a blockchain hosting company, has given her unique insight to growing blockchain communities, products, and understanding of blockchain network governance. 
                                        <a className="about-linkedin" href="https://www.linkedin.com/in/adriannamendez" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="linkedin"/></a>
                                        </p>

                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default aboutUs;