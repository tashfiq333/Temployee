import React, { Component, useEffect, useState } from 'react';

import { CssBaseline, Typography, Button, Card, CardContent, CardMedia, Container, Grid, Paper, TextField,Avatar } from '@material-ui/core';
//import Avatar from '@mui/material/Avatar';
import homesecond from '../../images/homesecond.png';
import footer from '../../images/homeFooter.png'
import img from '../../images/golla.png'
import Carousel from "../carousel/index";
import Footer from '../Footer/index';



import useStyles from './homeStyles';

import "./homeCSS.css";

const Home = () => {

    const classes = useStyles();

    return (
        <> <CssBaseline />
            <div className="homebgimg">
                <div className="peptalk">
                    <Grid item xs={4} sm={4}>
                        <Typography component="h3" variant="h3">
                            hello welcome to temployee!!
                        </Typography>

                        <Typography component="h6" variant="h6" > making it look like readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in
                            their infancy.</Typography>
                    </Grid>
                </div>
            </div>
            <div >
                <Container fixed>

                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    quotes and why to work with uswhy isnt the image going left
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    quotes and why to work with us
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
                <Container >
                    <div >
                        <Carousel />
                    </div>

                    <div className={classes.rootgrid}>
                        <Grid container spacing={1} justify="center" alignItems="center">
                            <Grid item xs={6} sm={6}>
                                <div>
                                    <Card>
                                        <Typography component="h5" variant="h5">
                                            quotes and why to work with uswhy isnt the image going left
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            quotes and why to work with us
                                        </Typography>
                                        <Typography component="h6" variant="h6">
                                            quotes and why to work with uswhy isnt the image going leftquotes and why to work with uswhy isnt the image going left
                                            quotes and why to work with uswhy isnt the image going leftquotes and why to work with uswhy isnt the image going left
                                        </Typography>

                                    </Card>
                                </div>
                            </Grid>

                            <Grid item xs={4} sm={4}>
                                <div className={classes.gridcolor}>
                                    <Paper className={classes.boxOne}>hello quotes and why to work with uswhy isnt the image going left</Paper>
                                    <Paper className={classes.boxTwo}>hu quotes and why to work with uswhy isnt the image going left</Paper>
                                    <Paper className={classes.boxthree}>hi quotes and why to work with uswhy isnt the image going left</Paper>
                                    <Paper className={classes.boxfour}>mornin quotes and why to work with uswhy isnt the image going left</Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </div>


                </Container>

                <div className="bluebox" >
                    <Grid item xs={12} container spacing={1} justify="center" alignItems="center">
                        <Typography variant="h4">
                            some inspirational Quotes here
                        </Typography>
                    </Grid>

                </div>

                <Container fixed>

                    <Typography variant="h3" align="center">What People Says About Us</Typography>
                    <Grid container justifyContent="center" spacing={1}>

                        <Grid item>
                            <Paper className={classes.paper} >
                            <Avatar alt="Remy Sharp" src={img}/>
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
               {// <div className="bgpic">
               
                //</div>

               }
            </div>
        </>
    );


}
export default Home;