import React, { Component, useEffect, useState } from 'react';

import { CssBaseline, Typography, Button, Card, CardContent, CardMedia, Container,Grid } from '@material-ui/core';
import homesecond from '../../images/homesecond.png';
import footer from '../../images/homeFooter.png'
import Carousel from "../carousel/index";



import itemData from './itemdata';


import useStyles from './homeStyles';

import "../../custom.css";

const Home = () => {

    const classes = useStyles();

    return (
        <> <CssBaseline />
            <div className="homebgimg"> </div>
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
                    <div>
                        <Carousel />
                    </div>

                    <div>
                        <Grid container spacing={1} justify = "center" alignItems = "center">
                            <Grid item xs= {4}></Grid>
                            <Grid item xs= {4}></Grid>
                            <Grid item xs= {4}>

                                <Grid item xs= {4}></Grid>
                                <Grid item xs= {4}></Grid>
                            </Grid>

                        </Grid>
                    </div>

                </Container>

                <div>
                    <img className="bgpic" src={footer} alt="" />
                </div>
            </div>
        </>
    );


}
export default Home;