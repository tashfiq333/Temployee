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
import CompanyAppBar from "../NavbarCompany";
import { POST } from "../../api";

import "./inputcomp.css";
import { Input } from "@material-ui/core";
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

const InputCompany = (props) => {
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
  var name = document.getElementById("name");
    var bio = document.getElementById("bio");
    //var error_name = document.getElementById("error_name");

    if(name.value === null || name.value === "")
    {
      document.getElementById("error_name").innerHTML = "This field cannot be empty.";
    }else if( bio.value === null || bio.value === "")
    {
      document.getElementById("error_name").innerHTML = "";
      document.getElementById("error_bio").innerHTML = "This field cannot be empty.";
    }
    else{
  props.history.push({
    pathname: "/company-prof",
    state: input,
  });
}};




  return (
    <div className={classes.root}>
      <CompanyAppBar />
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
              Setup your Company Profile
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
                   Change Logo
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
                Company Profile Info
              </Typography>

              <form noValidate autoComplete="on">
                <TextField
                  id="name"
                  label="Company Name"
                  variant="outlined"
                  name="name"
                  style={{ width: "90%" }}
                  onChange={handleChange}
                  required
                />
                <p className="error" id="error_name"></p>
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
                  label="Facebook Page Link"
                  variant="outlined"
                  name="link"
                  style={{ width: "90%" }}
                  onChange={handleChange}
                />

                <TextField
                  id="bio"
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="outlined"
                  name="bio"
                  required
                  style={{ width: "90%" }}
                  onChange={handleChange}
                />
                <p className="error" id="error_bio"></p>
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

export default InputCompany;
