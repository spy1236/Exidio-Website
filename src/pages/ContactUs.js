import React, { Component } from 'react';
import staked_layer from '../assets/stacked_layers.png';
import HubspotForm from 'react-hubspot-form'
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
                            <div className="col-lg-6">
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
            </React.Fragment>
        );
    }
}

export default ContactUs;