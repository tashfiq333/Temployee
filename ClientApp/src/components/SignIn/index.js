import React, { PureComponent } from "react";
import signupbg from "../../images/Rectangle 25.svg";
import "./signin.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: 650,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  "& > *": {
    margin: theme.spacing(1),
    width: "25ch",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div id="Signin" className="bgimg">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6} spacing={2}>
          <Card className={classes.root} variant="outlined" elevation="20" style={{padding: "20px"}}>
            <CardContent>
            <Typography
              className="txt-h4"
              variant="h4"
              component="h2"
              align="center"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              Sign In
            </Typography>
              <form
                className={(classes.root.anchor, "text")}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Username"
                  required
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="medium"
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  required
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  required
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                />
              </form>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  href="/profile_setup"
                  style={{
                    width: "150px",
                    
                  }}
                >
                  Sign in
                </Button>
              </CardActions>
              <Typography
                variant="subtitle2"
                component="h2"
                align="center"
                style={{ marginTop: "10px" }}
              >
                Dont have an account? 
                <Link className = {classes.bt} color="inherit" href="/sign-up" style={{marginLeft: "10px"}}>Sign Up</Link>
              </Typography>
              
              
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
