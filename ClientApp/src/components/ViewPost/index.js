import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import { 
  Container ,
  Button,
  Backdrop,
  Fade,
  Modal,
  Typography,
  Avatar,
  Grid,
} from '@material-ui/core';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },


    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      //backgroundColor: '#6c63ff',
      backgroundColor: '#ffffff',
      width: 400,
      height: 300,
      alignItems: 'center',
  
      boxShadow: theme.shadows[5],
      padding: theme.spacing(6, 6, 6),
    },
    bt:{
      margin:20,
      color: '#6C63FF',
      padding: '10px 10px',
    },
  

}));




function createData(name, email,details, Date) {
  return {
    name,
    email,
    details,
    Date,

  };
}

function Row(props) {
  const { row } = props;
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
      <TableRow hover className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleOpen}>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              //onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <Typography id="transition-modal-title" variant="h5" color="secondary">
                    Do you want to hire the User
                  </Typography>
                  <br /><br />
                  <Button variant="outlined"
                    className={classes.bt}
                    color="inherit"
                    onClick={() => {
                      setOpen(false);
                     // window.window.location.href = "/personal_info";
                    }}
                  >
                    Hire
                  </Button>
                  <Button variant="outlined"
                    className={classes.bt}
                    color="inherit"
                    onClick={() => {
                      setOpen(false);
                     window.window.location.href = "/applied";
                    }}
                  >
                    Cancel
                  </Button>

                </div>
              </Fade>
            </Modal>
            <CheckIcon></CheckIcon>
          </IconButton>
        </TableCell>
        <TableCell scope="row">
          <Grid Container>
            <Grid item lg={2}>
              <Avatar alt={row.name} src="." className={classes.ava}></Avatar>
            </Grid>
            <Grid item lg={10}>
              <Typography className={classes.type}>
              {row.name}
              </Typography>
              <Typography color="textSecondary" variant="body2" className={classes.type}>
              {row.email}
              </Typography>
            </Grid>
        
          </Grid>
        </TableCell>

        <TableCell >{row.details}</TableCell>
        <TableCell >{row.Date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>

          </Collapse>
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

const rows = [
  createData('Frozen yoghurt', 'abc@gmail.com','this job is about Performa we need 300 hand painted wallpapers and gloves masks etc', 3.99),
  createData('Ice cream sandwich', 'abc@gmail.com', 7, 4.3),
  createData('Eclair', 'abc@gmail.com',262, 16.0),
  createData('Cupcake','abc@gmail.com', 305, 3.7),
  createData('Gingerbread','abc@gmail.com', 356, 66),

];

const Applied = () => {


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell >Name</TableCell>
              <TableCell >Details</TableCell>
              <TableCell >Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default Applied;
