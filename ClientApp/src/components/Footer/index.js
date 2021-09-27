import React, { } from 'react';
import footimg from '../../images/homeFooter.png'
import { CssBaseline, Typography, Container, Grid, Box, Button, Paper } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./stylesFooter.css"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const Footer = () => {

    const classes = useStyles();

    return (
        <>
            <Box className="footbox"
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
            >
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" spacing={10}>

                        <Grid item sm={4} xs={8}>
                            <Box borderBottom={1}><h5>Temployee</h5></Box>
                            <Box>
                                <Button color="inherit" herf="#">Home</Button>
                            </Box>
                            <Box>
                                <Button color="inherit" herf="#">Find Work</Button>
                            </Box>
                            <Box>
                                <Button color="inherit" herf="#">Find Talent</Button>
                            </Box>
                        </Grid>
                        <Grid item  sm={4} xs={8}>
                            <Box borderBottom={1}><h5>Support</h5></Box>
                            <Box>
                                <Button color="inherit" herf="#">About Us</Button>
                            </Box>
                            <Box>
                                <Button color="inherit" herf="#">Contact Us</Button>
                            </Box>
                            {/* <Box>
                                <Button color="inherit" herf="#">Find Talent</Button>
                            </Box> */}
                        </Grid>
                        <Grid item  sm={4} xs={8}>
                            <Box borderBottom={1}><h5>Community</h5></Box>
                            <Box>
                                <Button color="inherit" herf="#"><FacebookIcon/>FaceBook</Button>
                            </Box>
                            <Box>
                                <Button color="inherit" herf="#"><TwitterIcon/>Twitter</Button>
                            </Box>
                            <Box>
                                <Button color="inherit" herf="#"><LinkedInIcon/>LinkedIn</Button>
                            </Box>
                        </Grid>

                    </Grid>
                    <Box className="copyright"
                        borderTop={1} textAlign="center"
                        pt={{ xs: 5, sm: 10 }}
                        pb={{ xs: 5, sm: 0 }}
                    > Temployee &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>

        </>
    );
}
export default Footer;