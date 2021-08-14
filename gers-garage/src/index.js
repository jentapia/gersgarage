import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import ServicesPage from './components/servicesPage/ServicesPage';
import Contact from './components/contact/Contact';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Booking from './components/booking/Booking';
import Adm_login from './components/adminsite/admlogin/Adm_login';
import Admin_home from './components/adminsite/Admin_home';
//import Booking2 from './components/booking/Booking2';
//import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Adm_booking from './components/adminsite/Adm_booking';
import Admin_listInvoice from './components/adminsite/Admin_listInvoice';
import Admin_listService from './components/adminsite/Admin_listService';
import Admin_listStaff from './components/adminsite/Admin_listStaff';
import Admin_newServ from './components/adminsite/Adm_newServ';
import Adm_editStaff from './components/adminsite/Adm_editStaff';





ReactDOM.render(
  <BrowserRouter>
  <div>
    <Switch>

        {/* Pages */}
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/services' component={ServicesPage} /> 
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />  
        <Route path='/login' component={Login} /> 
        <Route path='/booking/:email' component={Booking} />
        <Route path='/editbooking/:id' component={Adm_booking} />
        <Route path='/admin' component={Adm_login} />
        <Route path='/homeadmin' component={Admin_home} />
        <Route path='/invoices' component={Admin_listInvoice} />
        <Route path='/listservices' component={Admin_listService} />
        <Route path='/liststaff' component={Admin_listStaff} />
        <Route path='/newservice' component={Admin_newServ} />
        <Route path='/editstaff/:id' component={Adm_editStaff} />
      </Switch>
  </div>
</BrowserRouter>,
  document.getElementById('root')
);


