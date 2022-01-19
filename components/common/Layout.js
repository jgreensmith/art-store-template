import React from 'react';
import Head  from 'next/head';
import { Box, ThemeProvider } from '@mui/system';
import { Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import Navbar from './Navbar';
import { theme } from '../../utils/styles';

const Layout = ({ children, commercePublicKey, title }) => {

    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <title>{`${title} | Art Shop`}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <Container maxWidth="100%" disableGutters={true} sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} > */}

                    <Navbar commercePublicKey={commercePublicKey} />
                    <Toolbar />
                        {children}
                    
                    <Container maxWidth="100%" component="footer" 
                        sx={{ backgroundColor: 'background.dark' }}
                    >
                        <Box p={4}  >
                            <Typography variant="body2" color="background.default" align="center">
                                {'© '}
                                DuttyShop 2021
                                {'.'}
                            </Typography>
                        </Box>
                    </Container>
                {/* </Container > */}

            </ThemeProvider>
        </React.Fragment>
    )
}

export default Layout;
