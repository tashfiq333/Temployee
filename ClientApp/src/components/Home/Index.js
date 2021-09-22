import React, { Component, useEffect, useState } from "react";

import {
  CssBaseline,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Avatar,
} from "@material-ui/core";
//import Avatar from '@mui/material/Avatar';
import homesecond from "../../images/homesecond.png";
import footer from "../../images/homeFooter.png";
import img from "../../images/golla.png";
import Carousel from "../carousel/index";
import Footer from "../Footer/index";

import useStyles from "./homeStyles";

import "./homeCSS.css";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      {" "}
      <CssBaseline />
      <div className="homebgimg">
        <div className="peptalk">
          <Grid item xs={4} sm={4}>
            <br />
            <br />

            <Typography component="h3" variant="h3">
              Temployee
            </Typography>
            <br />
            <Typography component="h6" variant="h6">
              Temployee is the nationwide freelancing platform that connects
              people from all over the country and opens up doors to immense
              number of opportunities.
            </Typography>
          </Grid>
        </div>
      </div>
      <div>
        <Container fixed>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                  <br/>
                  <br/>
                <Typography component="h5" variant="h5">
                  Reasons why you should be joining us
                </Typography>
                <br/>
                <Typography variant="subtitle1" color="textSecondary">
                  One Stop Solution
                </Typography>
                <br/>
                <Typography component="h6" variant="h6">
              
                  <ul>
                    <li>Post your jobs and get your job done in no time. There is always someone at your help.</li>
                    <br/>
                    <li>Choose your desired freelancer from a list of hundreds of qualified freelancers</li>
                    <br/>
                    <li>Theres something for the freelancers too. Complete the jobs posted by the users and earn from home.</li>
                  </ul>
              
            </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              component="img"
              image={homesecond}
              //image="http://source.unsplash.com/random"
              title="Live from space album cover"
            />
          </Card>
        </Container>
        <Container>
          <div>
            <Carousel />
          </div>

          <div className={classes.rootgrid}>
            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid item xs={6} sm={6}>
                <div>
                  <Card>
                    <Typography component="h4" variant="h4">
                      How we ensure you a better future
                    </Typography>
                    <br/>
                    <br/>
                    <Typography component="h6" variant="h6">
                    We think, mistakenly, that success is the result of the 
                    amount of time we put in at work, instead of the quality of time we put in. By completing the tasks posted
                    the freelancers are developing and improving newer skills. 
                    </Typography>
                    <Typography component="h6" variant="h6">
                    Temployee provides opportunity for people of all ager and profession. During this pandemic, temployee
                    provides job opportunities fo the people who have lost their jobs and are financially suffering. 
                    </Typography>
                  </Card>
                </div>
              </Grid>

              <Grid item xs={4} sm={4}>
                <div className={classes.gridcolor}>
                  <Paper className={classes.boxOne}>
                  It's not all about how you work hard but it's about how you manage your time, resources, mind 
                  to work together for a better output.
                  </Paper>
                  <Paper className={classes.boxTwo}>
                    hu quotes and why to work with uswhy isnt the image going
                    left
                  </Paper>
                  <Paper className={classes.boxthree}>
                    hi quotes and why to work with uswhy isnt the image going
                    left
                  </Paper>
                  <Paper className={classes.boxfour}>
                    mornin quotes and why to work with uswhy isnt the image
                    going left
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>

        <div className="bluebox">
          <Grid
            item
            xs={12}
            container
            spacing={1}
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4">some inspirational Quotes here</Typography>
          </Grid>
        </div>

        <Container fixed>
          <Typography variant="h3" align="center">
            What People Says About Us
          </Typography>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <Paper className={classes.paper}>
                <Avatar alt="Remy Sharp" src={img} />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </Container>
        {
          // <div className="bgpic">
          //</div>
        }
      </div>
    </>
  );
};
export default Home;
