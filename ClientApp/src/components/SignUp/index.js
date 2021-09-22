import React, { PureComponent } from "react";
import signupbg from "../../images/Rectangle 25.svg";
import "./signup.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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

const SignUp = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState(null);
  const [alert, setAlert] = React.useState(null);

  const onInputChange = (event) => {
    const { value, name } = event.target;
    //console.log(value, name);
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(form);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(form);
    try {
      const { data } = await POST("user/register", {
        username: form.name,
        email: form.email,
        password: form.password,
        conpass: form.confirmpass,
      });

      console.log(data);
      if (data.statusCode === 200) {
        setAlert(null);
        window.location.href = "/sign-in";
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
    <div id="Signup" className="bgimg">
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
                Sign Up
              </Typography>
              <form
                className={(classes.root.anchor, "text")}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  name="name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="medium"
                  onChange={onInputChange}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={onInputChange}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  style={{ width: "100%" }}
                  type="password"
                  onChange={onInputChange}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  name="confirmpass"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="password"
                  onChange={onInputChange}
                  required
                />
              </form>
              <CardActions style={{ justifyContent: "center" }}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                  Sign Up
                </Button>
              </CardActions>
              <Typography variant="subtitle2" component="p" align="center">
                Already have an account?<Link href="/sign-in">Sign In</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
