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
import CompanyProfile from "./components/CompanyProfile"


import "./custom.css";
import CompanyCard from "./components/CompanyInfo/";
import ProfileSetup from "./components/ProfileSetup";
import PersonInfo from "./components/PersonalInfo";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      // <Layout>
      //   {/* <Route exact path='/' component={Home} />
      //   <Route path='/counter' component={Counter} />
      //   <Route path='/fetch-data' component={FetchData} /> */}
      // </Layout>
      <Router>
        {<CompanyAppBar />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/company-info" exact component={CompanyCard} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/user-profile" exact component={UserProfile} />
          <Route path="/post_job" exact component={JobPost} />
          <Route path="/profile_setup" exact component={ProfileSetup} />
          <Route path="/person_info" exact component={PersonInfo} />
          <Route path="/company-profile" exact component={CompanyProfile} />

        </Switch>
        {<Footer />}
      </Router>
    );
  }
}
