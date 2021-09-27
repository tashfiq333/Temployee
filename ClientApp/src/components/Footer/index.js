import React, { } from 'react';
import footimg from '../../images/homeFooter.png'
import { CssBaseline, Typography, Container, Grid, Box, Link, Paper } from '@material-ui/core';

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
                                <Link color="inherit" herf="#">Home</Link>
                            </Box>
                            <Box>
                                <Link color="inherit" herf="#">Find Work</Link>
                            </Box>
                            <Box>
                                <Link color="inherit" herf="#">Find Talent</Link>
                            </Box>
                        </Grid>
                        <Grid item  sm={4} xs={8}>
                            <Box borderBottom={1}><h5>Support</h5></Box>
                            <Box>
                                <Link color="inherit" herf="#">About Us</Link>
                            </Box>
                            <Box>
                                <Link color="inherit" herf="#">Contact Us</Link>
                            </Box>
                            {/* <Box>
                                <Link color="inherit" herf="#">Find Talent</Link>
                            </Box> */}
                        </Grid>
                        <Grid item  sm={4} xs={8}>
                            <Box borderBottom={1}><h5>Community</h5></Box>
                            <Box>
                                <Link color="inherit" herf="#"><FacebookIcon/>FaceBook</Link>
                            </Box>
                            <Box>
                                <Link color="inherit" herf="#"><TwitterIcon/>Twitter</Link>
                            </Box>
                            <Box>
                                <Link color="inherit" herf="#"><LinkedInIcon/>LinkedIn</Link>
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