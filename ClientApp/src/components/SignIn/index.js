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
import Link from "@material-ui/core/Link";
import { POST } from "../../api";

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
  const [form, setForm] = React.useState(null);
  const [alert, setAlert] = React.useState(null);
  const bull = <span className={classes.bullet}>•</span>;

  const handleChange = (event) => {
    const { value, name } = event.target;
    //console.log(value, name);
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(form);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await POST("user/login", {
        email: form.email,
        password: form.password,
      });
      console.log(data);
      if (data.statusCode === 200) {
        setAlert(null);
        localStorage.setItem("access_token", data.statusDescription);
        window.location.href = "/post_job";
      }
    } catch (e) {
      // if (e.response) {
      //   setAlert(errorHandling(e));
      // } else {
      //   console.log("server didnt respond");
      // }
    }
  };

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
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
                Sign In
              </Typography>
              <form
                className={(classes.root.anchor, "text")}
                noValidate
                autoComplete="on"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                />
              </form>

              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </CardActions>
              <Typography variant="subtitle2" component="p" align="center">
                Don't have an account?<Link href="/sign-up">Sign Up</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
