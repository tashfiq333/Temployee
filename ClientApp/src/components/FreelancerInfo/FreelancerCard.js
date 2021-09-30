import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Chip from "@material-ui/core/Chip";

import "./freelancer.css";

const FreelancerCard = (props) => {
  const useStyles = makeStyles({
    root: {
      Width: 1000,
      borderRadius: 12,
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const useAvatar = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(3),
      },
    },

    large: {
      width: 150,
      height: 150,
    },
  }));

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      flexFlow: 1,
      width: "30vh",
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#6C63FF",
    },
  }))(LinearProgress);
  const classes = useStyles();
  const avatarClass = useAvatar();

  return (
    <div className="col-xl-4 col-md-6 col-sm-12 body_padding">
      <Card className={classes.root}>
        <CardActionArea onClick={props.oncardClick}>
          <CardContent className={classes.content}>
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/536/354"
              className={avatarClass.large}
            />
          </CardContent>
          <CardContent className={classes.content}>
            <Chip
              label="4.5★"
              color="primary"
              style={{ backgroundColor: "orange" }}
              size="medium"
            />
          </CardContent>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">Tashfiq Nahiyan Khan</Typography>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lorem ipsum dolor sit amet, consectetu
            </Typography>
          </CardContent>

          <CardContent className={classes.content}>
            <div className="skillname">
              <Typography variant="subtitle2" gutterBottom>
                Content Writing
              </Typography>

              <BorderLinearProgress
                className="skillbar"
                variant="determinate"
                value={80}
              />
              <br />
            </div>
          </CardContent>
          <CardContent className={classes.content}>
            <div className="skillname">
              <Typography variant="subtitle2" gutterBottom>
                Content Writing
              </Typography>

              <BorderLinearProgress
                className="skillbar"
                variant="determinate"
                value={80}
              />
              <br />
            </div>
          </CardContent>
          <CardContent className={classes.content}>
            <div className="skillname">
              <Typography variant="subtitle2" gutterBottom>
                Content Writing
              </Typography>

              <BorderLinearProgress
                className="skillbar"
                variant="determinate"
                value={80}
              />
              <br />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default FreelancerCard;
