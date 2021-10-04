import React, { Component, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { POST } from "../../api";
import { POST_AUTH } from "../../api";


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





const InputCompProf = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const { state } = props.location;
  console.log(state);

  const handleChange = async (e) => {
    const { value, name } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name + ": " + value);
  };

  const addInfo = async (e) => {
    console.log(state);
    var spec = document.getElementById("spec");
    if(spec.value === null || spec.value === "")
    {
      document.getElementById("error_spec").innerHTML = "This field cannot be empty.";
    }else{

    try {
      const { data } = await POST_AUTH("compinfo/add_2", {
        name: state.name,
        phone_no: state.phone,
        link: state.link,
        bio: state.bio,
        speciality: input.speciality,
        address: input.address,
        achievement: input.achievement,
        
      });

      setInput("");

      if (data == "good") {
        window.location.href = "/find-talent";
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <CompanyAppBar />
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
              id="spec"
              label="Speciality"
              name="speciality"
              variant="outlined"
              onChange={handleChange}
              value={input && input.speciality}
              style={{ width: "60%" }}
              required
            />

            <p className="error" id="error_spec"></p>

            <TextField
              id="outlined-basic"
              label="Address"
              name="address"
              variant="outlined"
              onChange={handleChange}
              value={input && input.address}
              style={{ width: "60%" }}
            />

            <TextField
              id="outlined-basic"
              label="Achievements"
              name="achievement"
              onChange={handleChange}
              value={input && input.achievement}
              variant="outlined"
              style={{ width: "60%" }}
            />
          </form>
          <CardActions>
              <Button
                className="button"
                variant="contained"
                color="primary"
                onClick={addInfo}
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
    </div>
  );
};

export default InputCompProf;
