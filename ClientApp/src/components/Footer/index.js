import React, { } from 'react';
import footer from '../../images/homeFooter.png'
import { CssBaseline, Typography, Container, Grid, Box, Link } from '@material-ui/core';

import "./stylesFooter.css"
const Footer = () => {

    return (
        <footer>
            <Box className="footbox"
            px={{xs:3 ,sm: 10}}
            py={{xs:5 ,sm: 10}}
            >
                <Container maxWidth="lg">
                    <Grid Container spacing={5} direction="row" >
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Temployee</Box>
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
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Support</Box>
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
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Community</Box>
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

                    </Grid>
                    <Box className="copyright"
                     borderTop={1} textAlign="center"
                      pt={{xs:5,sm:10 }} 
                      pb = {{xs: 5,sm: 0}}
                    > Temployee &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>

        </footer>
    );
}
export default Footer;