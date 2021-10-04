import React from "react";
import { Paper, styled, Chip, Avatar, Card, CardMedia, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import LinearProgress from '@material-ui/core/LinearProgress';

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/More';



import dp from '../../images/slidera.png'



import { makeStyles, withStyles } from '@material-ui/core/styles';

import "./comProStyles.css"


const useStyles = makeStyles((theme) => ({



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


    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },

    listroot: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },

}));

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        flexFlow: 1,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#6C63FF',
    },
}))(LinearProgress);



const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const Itemt = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4),
    // color: '#6C63FF',
    height: '50vh',
    borderRadius: 20,
}));

const ItemName = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(8),
    // padding: '5%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '25vh',
    borderRadius: 20,
}));


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //textAlign: 'center',
    height: '5vh',
    backgroundColor: '#E3EDF9',
    //marginTop: '4%',


}));

const ItemBio = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    //padding: '5%',
    textAlign: 'left',
    height: '20vh',
    borderRadius: 20,


}));


const ItemRate = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '15vh',
    borderRadius: 20,
}));
const ItemCmnt = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '30vh',
    borderRadius: 20,
}));

const handleClick = () => {
    console.info('You clicked the Chip.');
};


function createData(Postname, Postdetails, Date) {
    return {
        Postname,
        Postdetails,
        Date,

    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow hover className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => {
                        setOpen(false);
                        window.window.location.href = "/applied";
                    }}>
                        <MoreIcon />
                    </IconButton>
                </TableCell>
                <TableCell scope="row">
                    {row.Postname}
                </TableCell>

                <TableCell >{row.Postdetails}</TableCell>
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
        Postname: PropTypes.number.isRequired,
        Postdetails: PropTypes.number.isRequired,
        Date: PropTypes.number.isRequired,

    }).isRequired,
};

const rows = [
    createData('Frozen yoghurt', 159, 3.99),
    createData('Ice cream sandwich', 7, 4.3),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 66),
    createData('Frozen yoghurt', 159, 3.99),
    createData('Ice cream sandwich', 7, 4.3),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 66),
    createData('Frozen yoghurt', 159, 3.99),
    createData('Ice cream sandwich', 7, 4.3),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 66),

];



const UserProfile = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Container className="contain">
                <Box sx={{ flexGrow: 1, paddingTop: 10, marginTop: '10%', }}>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>
                            <Grid item xs={12}>

                                <div >
                                    <Avatar className="userDp" alt="User Image" src={dp} />
                                </div>
                            </Grid>

                            <Grid item xs={12} className="BoxBio">
                                <Itemt elevation={6} >
                                    <div>
                                        <Grid container >
                                            <Grid className="skillhead" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Language preferences
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link color="#AEAEAE" href="/company-info">Add New</Link>
                                            </Grid>
                                        </Grid>
                                        <br />
                                    </div >
                                    <div>
                                        <Grid container >
                                            <Grid className="skillname" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    English
                                                </Typography>
                                            </Grid>
                                            <Grid className="skilltype" item xs={4}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Fluent
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                    </div >
                                    <div>
                                        <Grid container >
                                            <Grid className="skillname" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    English
                                                </Typography>
                                            </Grid>
                                            <Grid className="skilltype" item xs={4}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Fluent
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                    </div >

                                    <div>
                                        <Grid container >
                                            <Grid className="skillhead" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Other Accounts
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link color="#AEAEAE" href="/company-info">Add New</Link>
                                            </Grid>
                                        </Grid>
                                        <br />
                                    </div >
                                    <div>
                                        <Grid container >
                                            <Grid className="skillname" item xs={4}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Email
                                                </Typography>
                                            </Grid>
                                            <Grid className="skilltype" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    abcdfg@gmail.com
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                    </div >
                                    <div>
                                        <Grid container >
                                            <Grid className="skillname" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    LinkedIn
                                                </Typography>
                                            </Grid>
                                            <Grid className="skilltype" item xs={4}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Add
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container >
                                            <Grid className="skillhead" item xs={4}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Address
                                                </Typography>
                                            </Grid>
                                            <Grid className="skillname" item xs={12}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    137/26 Dhanmondi,Dhaka
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container >
                                            <Grid className="skillhead" item xs={6}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Contact Info
                                                </Typography>
                                            </Grid>
                                            <Grid className="skillname" item xs={12}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    0172366728993
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div >


                                </Itemt>
                            </Grid>
                            <Grid item xs={12} className="BoxBio">
                                <Itemt elevation={6} >
                                    <div>
                                        <Grid container >
                                            <Grid className="skillhead" item xs={8}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    Achivements
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Link color="#AEAEAE" href="/company-info">Add New</Link>
                                            </Grid>
                                        </Grid>
                                        <br />
                                    </div >

                                    <div className="skillname">
                                        <Typography variant="subtitle2" gutterBottom>
                                            Completed mongo project successfully.
                                        </Typography>


                                        <br />
                                    </div>

                                    <div className="skillname">
                                        <Typography variant="subtitle2" gutterBottom>
                                            Content Writing Competetion held successfully.
                                        </Typography>


                                        <br />
                                    </div>

                                    <div className="skillname">
                                        <Typography variant="subtitle2" gutterBottom>
                                            IT fair top start up company award winner.
                                        </Typography>


                                        <br />
                                    </div>

                                    <div className="skillhead">
                                        <Typography variant="subtitle2" gutterBottom>
                                            Tags
                                        </Typography>
                                        <div className={classes.chips}>

                                            <Chip size="small" variant="outlined" label="Clickable" onClick={handleClick} />
                                            <Chip size="small" variant="outlined" label="Clickable" onClick={handleClick} />
                                            <Chip size="small" variant="outlined" label="Clickable" onClick={handleClick} />

                                        </div>
                                        <br />
                                    </div>

                                </Itemt>

                            </Grid>
                        </Grid>

                        <Grid item xs={9} spacing={2} Container  >
                            <Grid item xs={12} >
                                <ItemName elevation={6}>

                                    <Item elevation={0}>
                                        <Grid item xs={12} container className="hirebuttongrid">

                                            <Grid item xs={11}><Typography varient="h6" component="h6">Temployee Dot Com</Typography> </Grid>
                                            <Grid ></Grid>
                                        </Grid><br />
                                    </Item>

                                    <Grid item xs={12} container className="Boxes">

                                        <Grid item xs={10}>
                                            <div>

                                                <Box component="fieldset" mb={3} borderColor="transparent">
                                                    <Typography component="legend">Rating</Typography>
                                                    <Rating readOnly
                                                        name="hover-feedback"
                                                        value={value}
                                                        precision={0.5}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        onChangeActive={(event, newHover) => {
                                                            setHover(newHover);
                                                        }}
                                                    />
                                                </Box>

                                            </div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className="ratebutton">
                                                <Button type="button" variant="outlined" onClick={handleOpen}>
                                                    Rate Company
                                                </Button>
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
                                                            <div className="ratecss">
                                                                <Rating
                                                                    name="hover-feedback"
                                                                    value={value}
                                                                    precision={0.5}
                                                                    onChange={(event, newValue) => {
                                                                        setValue(newValue);
                                                                    }}
                                                                    onChangeActive={(event, newHover) => {
                                                                        setHover(newHover);
                                                                    }}
                                                                />
                                                                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                                                            </div>
                                                            <div>
                                                                <br /><br />
                                                                <Button type="button" variant="outlined" onClick={handleClose}>Save</Button>

                                                            </div>

                                                        </div>
                                                    </Fade>
                                                </Modal>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </ItemName>
                            </Grid>

                            <Grid item xs={12} className="BoxBio">
                                <ItemBio elevation={6}>
                                    <Grid container >
                                        <Grid item xs={8}>
                                            <div className="skillhead">
                                                <Typography variant="h6">What We Do</Typography>
                                            </div>
                                        </Grid>
                                        <br /> <br />

                                        <Grid className="skillname" item xs={12}>
                                            <Typography variant="subtitle2" gutterBottom>
                                                hi, i am a student.Currently doing undergraduation.I am very passionate about my work.
                                                hi, i am a student.Currently doing undergraduation.I am very passionate about my work.
                                                hi, i am a student.Currently doing undergraduation.I am very passionate about my work.
                                                hi, i am a student.Currently doing undergraduation.I am very passionate about my work.

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ItemBio>
                            </Grid>

                            <Grid item xs={12} className="BoxEm">

                                <TableContainer component={Paper}>
                                    <Table aria-label="collapsible table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell />
                                                <TableCell >Post Title</TableCell>
                                                <TableCell >Post Details</TableCell>
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

        </div >
    );


}
export default UserProfile;