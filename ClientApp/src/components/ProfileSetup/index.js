import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";


import "./profset.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  slider: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#6C63FF",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



const ProfileSetup = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} display="flex" className="gridwid">
      <Card
        className={classes.root}
        elevation="10"
        style={{ margin: "8%", paddingLeft: "20%" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            align="start"
            style={{ marginTop: "40px", marginBottom: "15px" }}
          >
            Professional Info
          </Typography>

          <form noValidate autoComplete="on">
            <TextField
              id="outlined-basic"
              label="Skills"
              variant="outlined"
              required
              style={{ width: "60%" }}
            />

            <Typography
              variant="subtitle2"
              component="h6"
              align="start"
              style={{ marginTop: "40px", marginBottom: "15px" }}
            >
              Skill Expertise (%)
            </Typography>

            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={20}
              style={{ width: "60%", marginTop: "2.5%" }}
            />
            <CardActions>
              <Button
                className="button"
                variant="contained"
                color="primary"
                style={{
                  width: "150px",
                  marginBottom: "1%",
                  marginLeft: "22%",
                }}
              >
                Add Skill
              </Button>
            </CardActions>
            <TextField
              id="outlined-basic"
              label="Experience"
              variant="outlined"
              style={{ width: "60%" }}
            />

            <TextField
              id="outlined-basic"
              label="Qualifications"
              variant="outlined"
              style={{ width: "60%" }}
            />

            <TextField
              id="outlined-basic"
              label="Achievements"
              variant="outlined"
              style={{ width: "60%" }}
            />
          </form>
          <CardActions>
              <Button
                className="button"
                variant="contained"
                color="primary"
                style={{
                  width: "150px",
                  marginTop: "4%",
                  marginBottom: "3%",
                  marginLeft: "22%",
                }}
              >
                Done
              </Button>
            </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProfileSetup;
