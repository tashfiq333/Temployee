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

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: 550,
    
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

  return (
    <div className="bgimg">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6} spacing={2}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
                Sign In
              </Typography>
              <form className={classes.root.anchor,"text"} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  style ={{width: '100%'}}
                  margin = "medium"
                                
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  style ={{width: '100%'}}
                  
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  style ={{width: '100%'}}
                  
                />
                
              </form>
              <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" color="primary">
                  Sign In
              </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

     
    </div>
  );
};

export default SignIn;
