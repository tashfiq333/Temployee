import React, { useEffect } from "react";
import {
  Paper,
  styled,
  Chip,
  Avatar,
  Card,
  CardMedia,
  Button,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import LinearProgress from "@material-ui/core/LinearProgress";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import UserAppBar from "../UserNavbar";
import { GET_AUTH } from "../../api";
import { useParams } from "react-router";
import CompanyAppBar from "../NavbarCompany";

import dp from "../../images/homesecond.png";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import "./userstyles.css";

const useStyles = makeStyles((theme) => ({
  //     Boxes: {
  //         //  height: '100vh',
  //         //width: '100vw',
  //         paddingTop: '2%',
  //         display: 'flex',

  //     },
  //     BoxBio: {

  //         paddingTop: '2%',
  //         color: '#6C63FF'

  //     },
  //     BoxEm: {
  //         height: '36%'

  //     },

  //     smallboxOne: {
  //         paddingRight: '1%',
  //         //  height: '100px'
  //     },
  //     smallboxTwo: {
  //         paddingLeft: '1%',
  //         //height:'100px'
  //     },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    //backgroundColor: '#6c63ff',
    backgroundColor: "#ffffff",
    width: 400,
    height: 300,
    alignItems: "center",

    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 6, 6),
  },

  chips: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },

  listroot: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    flexFlow: 1,
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

const Itemt = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  // color: '#6C63FF',
  height: "50vh",
  borderRadius: 20,
}));

const ItemName = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(8),
  // padding: '5%',
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: "25vh",
  borderRadius: 20,
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //textAlign: 'center',
  height: "5vh",
  backgroundColor: "#E3EDF9",
  //marginTop: '4%',
}));

const ItemBio = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  //padding: '5%',
  textAlign: "left",
  height: "20vh",
  borderRadius: 20,
}));

const ItemRate = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "15vh",
  borderRadius: 20,
}));
const ItemCmnt = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "30vh",
  borderRadius: 20,
}));

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const CompanyUserProfile = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [freelancer, setFreelancer] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET_AUTH(`freelancer/user/${id}`);
        console.log(data);
        setFreelancer(data);
        console.log(freelancer);
      } catch (e) {
        console.log(e);
      }
    };
    exe();
  }, []);

  return (
    <div>
      <UserAppBar />
      <Container className="contain">
        <Box sx={{ flexGrow: 1, paddingTop: 10, marginTop: "10%" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Grid item xs={12}>
                <div>
                  <Avatar className="userDp" alt="User Image" src={dp} />
                </div>
              </Grid>

              <Grid item xs={12} className="BoxBio">
                <Itemt elevation={6}>
                  <div>
                    <Grid container>
                      <Grid className="skillhead" item xs={8}>
                        <Typography variant="subtitle2" gutterBottom>
                          Other Accounts
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                  </div>
                  <div>
                    <Grid container>
                      <Grid className="skillname" item xs={4}>
                        <Typography variant="subtitle2" gutterBottom>
                          Email
                        </Typography>
                      </Grid>
                      <Grid className="skilltype" item xs={8}>
                        <Typography variant="subtitle2" gutterBottom>
                          {freelancer.email}
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                  </div>
                  <div>
                    <Grid container>
                      <Grid className="skillname" item xs={4}>
                        <Typography variant="subtitle2" gutterBottom>
                          LinkedIn
                        </Typography>
                      </Grid>
                      <Grid className="skilltype" item xs={8}>
                        <Typography variant="subtitle2" gutterBottom>
                          {freelancer.linkin}
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                  </div>
                  <div>
                    <Grid container>
                      <Grid className="skillname" item xs={4}>
                        <Typography variant="subtitle2" gutterBottom>
                          Phone
                        </Typography>
                      </Grid>
                      <Grid className="skilltype" item xs={8}>
                        <Typography variant="subtitle2" gutterBottom>
                          {freelancer.phone_No}
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                  </div>
                </Itemt>
              </Grid>
              <Grid item xs={12} className="BoxBio">
                <Itemt elevation={6}>
                  <div>
                    <Grid container>
                      <Grid className="skillhead" item xs={8}>
                        <Typography variant="subtitle2" gutterBottom>
                          Skills
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                  </div>
                  {freelancer.freelancerSkill
                    ? freelancer.freelancerSkill.map((h) => (
                        <div className="skillname">
                          <Typography variant="subtitle2" gutterBottom>
                            {h.skillName}
                          </Typography>

                          <BorderLinearProgress
                            className="skillbar"
                            variant="determinate"
                            value={h.rating}
                          />
                          <br />
                        </div>
                      ))
                    : ""}
                </Itemt>
              </Grid>
            </Grid>

            <Grid item xs={9} spacing={2} Container>
              <Grid item xs={12}>
                <ItemName elevation={6}>
                  <Item elevation={0}>
                    <Grid item xs={12} container className="hirebuttongrid">
                      <Grid item xs={11}>
                        <Typography varient="h6" component="h6">
                          {freelancer.name}
                        </Typography>{" "}
                      </Grid>
                    </Grid>
                    <br />
                  </Item>

                  <Grid item xs={12} container className="Boxes"></Grid>
                </ItemName>
              </Grid>

              <Grid item xs={12} className="BoxBio">
                <ItemBio elevation={6}>
                  <Grid container>
                    <Grid item xs={8}>
                      <div className="skillhead">
                        <Typography variant="h6">Bio</Typography>
                      </div>
                    </Grid>
                    <br /> <br />
                    <Grid className="skillname" item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        {freelancer.bio}
                      </Typography>
                    </Grid>
                  </Grid>
                </ItemBio>
              </Grid>

              <Grid item xs={12} className="BoxEm">
                {/* <div>
                                    <List className={classes.listroot} subheader={<li />}>
                                        {[0, 1, 2, 3, 4].map((sectionId) => (
                                            <li key={`section-${sectionId}`} className={classes.listSection}>
                                                <ul className={classes.ul}>
                                                    {[0, 1, 2].map((item) => (
                                                        <ListItem key={`item-${sectionId}-${item}`}>
                                                            <ListItemText primary={`Item u`} />
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </List>
                                </div> */}
              </Grid>

              {/* <Grid item xs={12} spacing={2} Container className="Boxes">
                                <Grid item xs={12} className="smallboxOne">
                                    <ItemRate elevation={6} >
                                    </ItemRate>
                                </Grid>
                                <Grid item xs={6} className="smallboxTwo" >
                                    <ItemCmnt elevation={6} >
                                        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                                        xs=4
                                        </ItemCmnt>
                                </Grid>
                            </Grid> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default CompanyUserProfile;
