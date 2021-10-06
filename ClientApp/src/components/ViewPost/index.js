import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import CompanyAppBar from "../NavbarCompany";
import { GET, GET_AUTH } from "../../api";
import { useParams } from "react-router";
import { POST_AUTH } from "../../api";
import {
  Container,
  Button,
  Backdrop,
  Fade,
  Modal,
  Typography,
  Avatar,
  Grid,
} from "@material-ui/core";

const useRowStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      borderBottom: "unset",
    },
  },

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
  bt: {
    margin: 20,
    color: "#6C63FF",
    padding: "10px 10px",
  },
}));

function Row(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CompanyAppBar />
      <TableRow hover className={classes.root}>
        <TableCell>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={props.onHireClick}
            >
              <CheckIcon />
            </IconButton>
          </TableCell>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              color="secondary"
              onClick={props.onCancleClick}
            >
              <CloseIcon />
            </IconButton>
          </TableCell>
        </TableCell>

        <TableCell onClick={props.OnRowClick} scope="row">
          <Grid Container>
            <Grid item lg={2}>
              <Avatar alt={props.name} src="." className={classes.ava}></Avatar>
            </Grid>
            <Grid item lg={10}>
              <Typography className={classes.type}>{props.name}</Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.type}
              >
                {props.email}
              </Typography>
            </Grid>
          </Grid>
        </TableCell>

        <TableCell>{props.details}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 20 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.number.isRequired,
    details: PropTypes.number.isRequired,
    Date: PropTypes.number.isRequired,
  }).isRequired,
};

const Applied = () => {
  const { id } = useParams();
  const [project, setProject] = React.useState([]);

  const CheckClicked = (fid) => async () => {
    console.log("CLICKED");
    console.log(fid);
    try {
      const { job } = await POST_AUTH("project/applicant/hire", {
        jobid: id,
        freelancerid: fid,
      });
      const { data } = await POST_AUTH("project/applicant/delete", {
        jobid: id,
        freelancerid: fid,
      });

      if (data == "delete") {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const crossClicked = (fid) => async () => {
    console.log("CLICKED");
    console.log(fid);
    try {
      const { data } = await POST_AUTH("project/applicant/delete", {
        jobid: id,
        freelancerid: fid,
      });

      if (data == "delete") {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET_AUTH(`project/applicant/${id}`);
        console.log(data);
        setProject(data);
        console.log("tjdf" + project);
      } catch (e) {
        console.log(e);
      }
    };
    exe();
  }, []);
  return (
    <Container style={{ marginTop: 100 }}>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {project.map((pro) => (
              <Row
                id={pro.uid}
                name={pro.name}
                email={pro.email}
                details={pro.bio}
                OnRowClick={() => {
                  window.location.href = `/user-profile/${pro.uid}`;
                }}
                onHireClick={CheckClicked(pro.uid)}
                onCancleClick={crossClicked(pro.uid)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Applied;
