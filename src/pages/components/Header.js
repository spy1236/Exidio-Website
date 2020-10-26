import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/ExidioLogo.svg';
import hamberger from '../../assets/menu.svg';
import ContactUsBtn from '../../assets/ContactUsBtn.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.openModal = this.openModal.bind(this)
    }
    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    handleClose = () => {
        this.setState({ show: false });
    };
    handleModel = () => {
        this.setState({ show: true });
    };
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }

    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }
    render() {

        return (

            <div id="is-sticky">
                <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                    <div className="container">
                        <Link className="navbar-brand logo text-uppercase" to="/">
                            <img src={logo} alt="logo" /></Link>
                        <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                            <img src={hamberger} alt="hamberger" />
                        </button>
                        <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">
                            <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                <li className="nav-item active"><NavLink className="nav-link" to="/dvpn">dVPN</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/cosmos">Cosmos</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                            </ul>
                            <div className={this.state.isOpen ? "nav-button" : "nav-button ml-auto"}>
                                <ul className="nav navbar-nav navbar-left">
                                    <li>
                                   
                                    <NavLink to="/contactus"><button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Contact Us<span><img src={ContactUsBtn} alt="icon"></img></span></button></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
               
            </div>

        );
    }
}

export default Header;


