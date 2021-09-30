import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import bgpic from "../../images/abbg.jpg"
import { Box, Grid } from '@material-ui/core';


import dpn from "../../images/ndp.jpg"
import dpt from "../../images/tdp.jpg"
import dps from "../../images/sdp.jpg"

const useStyles = makeStyles({
  rootcard: {
    minWidth: 275,
    marginTop: '10%',
    backgroundColor: "#F2F2F2"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    marginTop: "10%",
    marginBottom: "10%",
    color: "#6C6FFF",
    fontWeight: "bolder"

  },
  img: {
    padding: '0 0 0 0'

  },
  det: {
    fontWeight: "normal"
  },
  team: {
    marginTop: '15%',

  },
  rootus: {
    maxWidth: 400,
    minHeight: 400,
  },
  cdmargin: {

    marginTop: '5%',
  },

});

const AboutUs = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Container>
        <div >
          <Typography variant="h3" component="h3" className={classes.heading}>
            About Us
          </Typography>
        </div>
      </Container>
      <div >
        <img src={bgpic} alt="image" width="100%" height="800px" className={classes.img} />
      </div>
      <Container>
        <div className={classes.rootcard} >
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h2" component="h2">
              Keep Your Business Safe & Ensure High Availability
            </Typography>

            <Typography variant="h6" component="h5" className={classes.det}>
              A business consulting agency is involved in the planning, implementation, and education of businesses. We work directly with business owners on developing a business plan, identifying marketing needs and developing the necessary skills for business ownership.
              Marketing consultant is an advisor who works with companies to create and implement marketing strategies.
              <br />
              <br />
              Marketing consultant is an advisor who works with companies to create and implement marketing strategies.

            </Typography>
            <Typography variant="p">
              {'"a platform to work with ease"'}

            </Typography>

            <Grid container justifyContent="center" spacing={10}>

              <Grid item sm={12} xs={12}>
                <Box borderBottom={1}></Box>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant="h6" component="h2">
                  Constant Improvement
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant="h6" component="h2">
                  Commited Customers
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant="h6" component="h2">
                  Best Quality you can get
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant="h6" component="h2">
                  Benefitial Offers
                </Typography>
              </Grid>
            </Grid>

          </CardContent>
        </div>

        <div className={classes.team}>

          <Typography variant="h2" component="h2">
            Meet Our Team
          </Typography>

          <Grid container justifyContent="center" spacing={10} className={classes.cdmargin}>


            <Grid item sm={4} xs={12}>
              <Card className={classes.rootus}>
                <CardMedia
                  component="img"
                  alt="picture"
                  height="350"
                  image={dpn}
                  title="Team"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nushrat Jahan Shorna
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Ahsanullah University of Science and Technology
                  </Typography>
                </CardContent>

              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card className={classes.rootus}>
                <CardMedia
                  component="img"
                  alt="picture"
                  height="350"
                  image={dps}
                  title="Team"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Md Mejbah Ur Rahman
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Ahsanullah University of Science and Technology
                  </Typography>
                </CardContent>

              </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card className={classes.rootus}>
                <CardMedia
                  component="img"
                  alt="picture"
                  height="350"
                  image={dpt}
                  title="Team"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tashfiq Khan
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Ahsanullah University of Science and Technology
                  </Typography>
                </CardContent>

              </Card>
            </Grid>

          </Grid>

        </div>

      </Container>
    </>
  );
}
export default AboutUs;
