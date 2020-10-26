
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Vector from '../../assets/Vector.svg'


class Enquire extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

            <section className="contact-us">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="ContactUsPage">
                                <h1 className="HeadingContactUs"> Inquire to build custom decentralized VPN </h1>
                                <Link to="/contactus"> <div className="ContactUsBtnLarge">
                                   
                                        <div class="ContactText"> Contact Us </div>
                                        <img src={Vector} alt="vector"></img>
                                   
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Enquire;


