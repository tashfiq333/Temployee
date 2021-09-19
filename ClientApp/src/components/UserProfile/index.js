import React from "react";
import { Box, Paper, styled, Chip, Avatar, Card, CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";



import CircularProgress, {
    circularProgressClasses,
} from '@material-ui/core/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@material-ui/core/LinearProgress';


import dp from '../../images/homeFooter.png'



import { makeStyles } from '@material-ui/core/styles';

import "./userstyles.css"


const useStyles = makeStyles((theme) => ({

    Boxes: {
        //  height: '100vh',
        //width: '100vw',
        paddingTop: '2%',
        display: 'flex',

    },
    BoxBio: {

        paddingTop: '2%',
        color: '#6C63FF'

    },
    BoxEm: {
        height: '36%'

    },

    smallboxOne: {
        paddingRight: '1%',
        //  height: '100px'
    },
    smallboxTwo: {
        paddingLeft: '1%',
        //height:'100px'
    },

}));

const Itemt = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    paddingTop: '2%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50vh',
    borderRadius: 20,
}));

const ItemName = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
   // padding: '5%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '20vh',
    borderRadius: 20,
}));
const ItemBio = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //padding: '5%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '20vh',
    borderRadius: 20,
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //textAlign: 'center',
    height: '5vh',
    backgroundColor: '#E3EDF9',
    marginTop: '4%',


}));

const ItemRate = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '30vh',
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

const UserProfile = () => {

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Box sx={{ flexGrow: 1, paddingTop: 10, marginTop: '10%', }}>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>

                            <Avatar className="userDp"
                                alt="Remy Sharp"
                                src={dp}
                               // sx={{ width: '500px', height: '500px' }}
                            />

                            <Grid item xs={12} className={classes.BoxBio}>
                                <Itemt elevation={6} >
                                    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                                    xs=4</Itemt>
                            </Grid>
                            <Grid item xs={12} className={classes.BoxBio}>
                                <Itemt elevation={6} >
                                    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                                    xs=4</Itemt>
                            </Grid>




                        </Grid>

                        <Grid item xs={9} spacing={2} Container  >
                            <Grid item xs={12} >
                                <ItemName elevation={6}>
                                    <Item elevation={0}><Typography varient="h6" component="h6">Raiden Shogan</Typography></Item>
                                </ItemName>
                            </Grid>

                            <Grid item xs={12} className={classes.BoxBio}>
                                <ItemBio elevation={6}>
                                    <div>
                                        <Typography color="textSecondary" variant="h5">Bio</Typography>
                                    </div>
                                </ItemBio>
                            </Grid>

                            <Grid item xs={12} className={classes.BoxEm}>

                            </Grid>

                            <Grid item xs={12} spacing={2} Container className={classes.Boxes}>
                                <Grid item xs={6} className={classes.smallboxOne}>
                                    <ItemRate elevation={6} >
                                        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                                        xs=4</ItemRate>
                                </Grid>
                                <Grid item xs={6} className={classes.smallboxTwo} >
                                    <ItemCmnt elevation={6} >
                                        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                                        xs=4</ItemCmnt>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </div >
    );


}
export default UserProfile;