import React, { Component, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { useParams } from "react-router";
import { POST_AUTH } from "../../api";
import Chip from "@material-ui/core/Chip";
import UserAppBar from "../UserNavbar";

import "./profset.css";
import { Input } from "@material-ui/core";

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
const chipStyle = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

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

const ProfileSetup = (props) => {
  const classes = useStyles();
  const chipClass = chipStyle();

  const [input, setInput] = useState("");
  const { state } = props.location;
  const [value, setValue] = useState(0);
  const [numberOfSkills, setNumberOfSkills] = useState(0);

  const [object, setObject] = useState([]);

  const DeleteTags = (h, i) => () => {
    console.log("Clicked Delete: " + i);
    setObject((arrayOfTags) => arrayOfTags.filter((input, idx) => idx !== i));
  };
  const SkillTags = object.map((h, i) => (
    <Chip
      label={h.skillname + " | " + h.rating + " %"}
      color="primary"
      size="medium"
      onDelete={DeleteTags(h, i)}
    />
  ));

  const AddTags = () => {
    // setNumberOfTags(numberOfTags + 1);
    // addTag((arrayOfTags) => arrayOfTags.concat(input.skills));
    // setInput("");
    // console.log(arrayOfTags);

    setObject((object) =>
      object.concat({
        skillname: input.skills,
        rating: value,
      })
    );

    setNumberOfSkills(numberOfSkills + 1);

    console.log(object);
  };

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

    try {
      const { data } = await POST_AUTH("info/add_2", {
        name: state.name,
        phone_no: state.phone,
        linkin: state.linkin,
        bio: state.bio,
        experience: input.experience,
        qualification: input.qualification,
        achievement: input.achievement,
        freelancerskill: object,
      });

      setInput("");

      if (data == "good") {
        window.location.href = "/company-info";
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <UserAppBar />
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

            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Skills"
                name="skills"
                value={input && input.skills}
                onChange={handleChange}
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
                // value={value}
                onChange={(e, val) => {
                  setValue(val);
                  console.log("Slider value: " + val);
                }}
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
                  onClick={AddTags}
                >
                  Add Skill
                </Button>
              </CardActions>
              <div className={chipClass.root}>
                {numberOfSkills > 0 ? SkillTags : ""}
              </div>
              <TextField
                id="outlined-basic"
                label="Experience"
                name="experience"
                value={input && input.experience}
                onChange={handleChange}
                variant="outlined"
                style={{ width: "60%" }}
              />

              <TextField
                id="outlined-basic"
                label="Qualifications"
                onChange={handleChange}
                name="qualification"
                value={input && input.qualification}
                variant="outlined"
                style={{ width: "60%" }}
              />

              <TextField
                id="outlined-basic"
                label="Achievements"
                name="achievement"
                value={input && input.achievement}
                onChange={handleChange}
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
                onClick={addInfo}
              >
                Done
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </section>
  );
};

export default ProfileSetup;
