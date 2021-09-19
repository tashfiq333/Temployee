import React, { Component } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Grid,
  Link,
} from "@material-ui/core";

import useStyles from "./styles";
import "../../custom.css";

const NavMenu = () => {
  //static displayName = NavMenu.name;

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Link color="inherit" href="/">
            Home
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link color="inherit" href="/company-info">
            Find Work
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link color="inherit" href="/user-profile">
            Find Talent
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link color="inherit" href="#">
            About us
          </Link>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.nav} position="fixed">
        <div>
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={2}>
              {" "}
              <Toolbar>
                <Typography variant="h6">Temployee</Typography>
              </Toolbar>
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid container item xs={4} spacing={1}>
              <FormRow />
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid container item xs={3} spacing={1}>
              <Grid item xs={3}>
                <Link color="inherit" href="/sign-up">
                  Sign up
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link color="inherit" href="/sign-in">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </AppBar>

    </>
  );
};
export default NavMenu;
