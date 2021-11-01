import { AppBar, CssBaseline, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';
import { FilterButton } from '../../utils/styles';

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


export default function CategoryFilter({ allCategories, filter }, props) {
    return (
        <React.Fragment>
            <CssBaseline />
            
                <Toolbar 
                    sx={{ 
                        display: { xs: 'none', sm: 'flex'}, 
                        justifyContent: 'space-between',
                    }}
                >
                    {allCategories.map((cat, i) => (
                        <FilterButton 
                            key={i}
                            onClick={() => filter(cat)}
                        >
                            {cat}
                        </FilterButton>
                    ))}
                </Toolbar>
            
                
            
            
        </React.Fragment>
        
        
    );
}