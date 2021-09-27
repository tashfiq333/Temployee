import React, { Component, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { POST_AUTH } from "../../api";
import UserAppBar from "../UserNavbar";

import "./profset.css";
import { Input, Link } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

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
}));

const PersonInfo = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const { value, name } = e.target;

      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      console.log(name + ": " + value);
    }
  };

  const addInfo = (e) => {
    props.history.push({
      pathname: "/profile_setup",
      state: input,
    });
  };

  return (
    <div className={classes.root}>
      <UserAppBar />
      <Grid container spacing={2} display="flex" className="gridwid">
        <Card className={classes.root} elevation="10" style={{ margin: "7%" }}>
          <CardContent>
            <Typography
              className="txt-h4"
              variant="h4"
              component="h2"
              align="center"
              style={{ marginTop: "100px", marginBottom: "80px" }}
            >
              Setup your Profile
            </Typography>
            <Grid item xs={6} style={{ float: "left" }}>
              <Avatar
                alt=""
                src="../../images/homesecond.png"
                className={(classes.large, "avatar")}
                style={{ alignSelf: "center" }}
              >
                <Button
                  className="avatar-button"
                  variant="contained"
                  color="#F0D9FF"
                  style={{ marginTop: "60%", zIndex: 1 }}
                >
                  Change Avatar
                </Button>
              </Avatar>
            </Grid>
            <Grid item xs={6} style={{ float: "right" }}>
              <Typography
                variant="h5"
                component="h2"
                align="start"
                style={{ marginBottom: "15px" }}
              >
                Personal Info
              </Typography>

              <form noValidate autoComplete="on">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                  required
                  style={{ width: "90%" }}
                  onChange={handleChange}
                />

                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  style={{ width: "90%" }}
                  onChange={handleChange}
                />

                <TextField
                  id="outlined-basic"
                  label="LinkedIn Profile Link"
                  variant="outlined"
                  name="linkin"
                  style={{ width: "90%" }}
                  onChange={handleChange}
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Bio"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="outlined"
                  name="bio"
                  required
                  style={{ width: "90%" }}
                  onChange={handleChange}
                />
              </form>

              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  onClick={addInfo}
                  style={{
                    width: "150px",
                    marginTop: "50px",
                    marginBottom: "50px",
                    marginRight: "20%",
                  }}
                >
                  Next
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default PersonInfo;
