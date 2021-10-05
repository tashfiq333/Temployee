import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyInfo from "./components/CompanyInfo";
// import { Layout } from "./components/Layout";
// import { Home } from "./components/Home";
// import { FetchData } from "./components/FetchData";
// import { Counter } from "./components/Counter";
// import NavMenu from "./components/navbar/index";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CompanyAppBar from "./components/NavbarCompany";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import JobPost from "./components/JobPost";
import CompanyProfile from "./components/CompanyProfile";
import DetailPost from "./components/DetailedWorkPost";
import Appbar from "./components/Appbar";
import UserAppBar from "./components/UserNavbar";
import AboutUs from "./components/AboutUs";
import FreelancerInfo from "./components/FreelancerInfo";
import Applied from "./components/ViewPost";
import CompanyUserProfile from "./components/CompanyUserProfile";

import "./custom.css";
import CompanyCard from "./components/CompanyInfo/";
import ProfileSetup from "./components/ProfileSetup";
import PersonInfo from "./components/PersonalInfo";
import Empty from "./components/Empty";
import ApplyJob from "./components/ApplyJob";
import ContactUs from "./components/ContactUs";
import InputCompany from "./components/InputCompanyInfo";
import InputCompProf from "./components/InputCompanyProf";

export default class App extends Component {
  static displayName = App.name;

  render() {
    if (localStorage.getItem("access_token") != null) {
      return (
        <Router>
          <Switch>
            <Route path="/" exact component={Empty} />
            <Route path="/company-info" exact component={CompanyCard} />
            <Route path="/user-profile/:id" exact component={UserProfile} />
            <Route path="/profile_setup" exact component={ProfileSetup} />
            <Route path="/personal_info" exact component={PersonInfo} />
            <Route path="/post_job" exact component={JobPost} />
            <Route
              path="/companyuser-profile/:id"
              exact
              component={CompanyUserProfile}
            />

            <Route path="/applied-job" exact component={ApplyJob} />
            <Route path="/detail-post/:id" exact component={DetailPost} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/input-company" exact component={InputCompany} />
            <Route path="/company-prof" exact component={InputCompProf} />
            <Route path="/applied/:id" exact component={Applied} />
            <Route path="/find-talent" exact component={FreelancerInfo} />
            <Route path="/company-profile" exact component={CompanyProfile} />
          </Switch>
          {<Footer />}
        </Router>
      );
    } else {
      return (
        // <Layout>
        //   {/* <Route exact path='/' component={Home} />
        //   <Route path='/counter' component={Counter} />
        //   <Route path='/fetch-data' component={FetchData} /> */}
        // </Layout>
        <Router>
          {<Appbar />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/find-talent" exact component={FreelancerInfo} />
            <Route path="/company-info" exact component={CompanyCard} />
            <Route path="/sign-in" exact component={SignIn} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/user-profile" exact component={UserProfile} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact-us" exact component={ContactUs} />
          </Switch>
          {<Footer />}
        </Router>
      );
    }
  }
}
