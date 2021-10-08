import { AppBar, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React from 'react';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const Navbar = (props) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography sx={{ m: "auto" }} variant="h3" component="div">
                            Art Shop
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
        
    )
}

export default Navbar;
