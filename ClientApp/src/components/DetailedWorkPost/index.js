import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useParams } from "react-router";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import UserAppBar from "../UserNavbar";

import img from "../../images/slidera.png";

import "./postStyle.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { GET_AUTH, POST_AUTH } from "../../api";

const useStyles = makeStyles((theme) => ({
  cardroot: {
    display: "flex",
    marginTop: 100,
    minWidth: 345,
    borderRadius: 30,
    boxShadow: "2px 3px 3px 2px rgba(0, 0, 0, 0.25)",
    minHeight: "80vh",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    minWidth: 345,
    minHeight: "80vh",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  bt: {
    minWidth: "10vw",
  },

  media: {
    height: "35vh",
  },

  chips: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const DetailPost = () => {
  const [project, setProject] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  console.log(id);

  const classes = useStyles();

  const ApplyJob = async () => {
    const { data } = await POST_AUTH("project/applied", {
      jobid: id,
    });

    if (data === "applied") setOpen(true);
    console.log(data);
  };

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET_AUTH(`project/auth/${id}`);

        console.log(data);
        setProject(data);
        console.log(project.name);
      } catch (e) {
        console.log(e);
        // if (e.response) {
        //   setAlert(errorHandling(e));
        // } else {
        //   console.log("server didnt respond");
        // }
      }
    };
    exe();
  }, []);

  return (
    <section>
      <UserAppBar />
      <div className="bgpost"> </div>
      <Container>
        <CssBaseline />

        {/* <Card className={classes.cardroot}> */}
        <div className={classes.details}>
          <CardActionArea href="/user-profile">
            <CardMedia
              className={classes.media}
              image="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              title="Image"
            />
          </CardActionArea>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className="skillhead">
              {project.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <Link href="#">Company Name</Link>
            </Typography>
            <br />
            <Typography component="h6" variant="h6" className="skillhead">
              Duration
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {project.duration} months
            </Typography>
            <br />
            <Typography component="h6" variant="h6" className="skillhead">
              {project.level}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              None
            </Typography>
            <br />
            <Typography component="h6" variant="h6" className="skillhead">
              Price
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {project.price}$
            </Typography>
            <br />
            <Typography component="h6" variant="h6" className="skillhead">
              Job Description
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {project.description}
            </Typography>
            <br />
            <Typography component="h6" variant="h6" className="skillhead">
              Tags
            </Typography>
            <div className={classes.chips}>
              {project.tags &&
                project.tags.map((h) => (
                  <Chip label={h} color="primary" size="medium" />
                ))}
            </div>
            <br />
            <br />
          </CardContent>

          {/* <CardActions > */}

          <div>
            <Grid container>
              <Grid item xs={5}></Grid>
              <Grid justifyContent="center" item xs={4}>
                <Button
                  className={classes.bt}
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={ApplyJob}
                >
                  Apply
                </Button>
              </Grid>
              {/* <Grid item xs={4}></Grid> */}
            </Grid>
          </div>
          {/* </CardActions> */}
        </div>
        <Snackbar
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Applied to the Job!
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
};
export default DetailPost;
