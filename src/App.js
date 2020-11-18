import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './pages/components/Footer';
import homePage from './pages/HomePage';
import dVPN from './pages/dVPN';
import cosmos from './pages/cosmos';
import sentinel from './pages/sentinel';
import about from './pages/About';
import contact from './pages/ContactUs';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    }
    this.openModal = this.openModal.bind(this)
}
openModal () {
    this.setState({isOpen: true})
  }

componentDidMount()
{
  AOS.init({
    duration : 2000
  })
  document.body.classList = "";
  document.getElementById('nav-bar').classList.add('navbar-white');
}

      render() {
        const routes = (
          <Switch>
             <React.Suspense fallback={<div>&nbsp;</div>}>
             <Route exact path="/" component={homePage} /> 
              <Route path="/dvpn" component={dVPN} /> 
              <Route path="/about" component={about} /> 
              <Route path="/sentinel" component={sentinel} /> 
              <Route path="/cosmos" component={cosmos} /> 
              <Route path="/contactus" component={contact} /> 
                </React.Suspense>
          </Switch>)
  
  
  
        return (
          <div className={window.location.pathname ?
            window.location.pathname.split('/')[1] :
            'App'}><React.Fragment>
              
                       {routes}
                       <Footer />
                       </React.Fragment>
                      
            </div>
        );
      }











    
}



export default App;



