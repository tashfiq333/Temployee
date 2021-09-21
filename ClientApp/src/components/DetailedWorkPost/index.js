import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import img from "../../images/slidera.png"

import "./postStyle.css"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    cardroot: {
        display: "flex",
        marginTop: 100,
        minWidth: 345,
        borderRadius: 30,
        boxShadow: '2px 3px 3px 2px rgba(0, 0, 0, 0.25)',
        minHeight: '80vh',
    },
    details: {
        display: "flex",
        flexDirection: "column",
        marginTop: 100,
        minWidth: 345,
        minHeight: '80vh'
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        width: 151
    },
    bt: {
       minWidth: '10vw',

    },

    media: {
        height: '35vh',
    },

    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },

}));

const handleClick = () => {
    console.info('You clicked the Chip.');
};


const DetailPost = () => {

    const classes = useStyles();

    return (
        <>
        <div className="bgpost">  </div>
            <Container>
                <CssBaseline />

                {/* <Card className={classes.cardroot}> */}
                <div className={classes.details}>
                    <CardActionArea href="/user-profile" >
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5" className="skillhead">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <Link href="#">Company Name</Link>
                        </Typography><br/>
                        <Typography component="h6" variant="h6" className="skillhead">
                            Duration
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            1000hr
                        </Typography><br/>
                        <Typography component="h6" variant="h6" className="skillhead">
                            Expert Level
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            None
                        </Typography><br/>
                        <Typography component="h6" variant="h6" className="skillhead">
                           Price
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            12$
                        </Typography><br/>
                        <Typography component="h6" variant="h6" className="skillhead">
                            Deadline
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            13 october 2021
                        </Typography><br/>
                        <Typography component="h6" variant="h6" className="skillhead">
                            Job Description
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            By default, we use the combination of a
                            element and a background image to display the
                            media. It can be problematic in some situations.
                            For instance, you might want to display a video or
                            a responsive image. Use the component property for
                            these use cases.
                        </Typography><br/>
                        <Typography component="h6" variant="h6" className="skillhead">
                            Tags
                        </Typography>
                        <div className={classes.chips}>

                            <Chip size="large" variant="outlined" label="Photography" onClick={handleClick} />
                            <Chip size="large" variant="outlined" label="Video Editing" onClick={handleClick} />
                            <Chip size="large" variant="outlined" label="Photoshop" onClick={handleClick} />

                        </div>
                        <br/><br/>
                        
                    </CardContent>

                    {/* <CardActions > */}

                    <div >
                        <Grid container>
                            <Grid item xs={5}></Grid>
                            <Grid justifyContent="center" item xs={4}>
                                <Button className={classes.bt} variant="outlined" size="large" color="primary">
                                    Apply
                                </Button>
                            </Grid>
                            {/* <Grid item xs={4}></Grid> */}
                        </Grid>
                    </div>
                    {/* </CardActions> */}

                </div>
                {/* </Card> */}
            </Container>
          
        </>
    )


}
export default DetailPost;