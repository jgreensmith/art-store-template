import { AppBar, Card, CssBaseline, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';
import { shadows } from '@mui/system';
import { FilterBox, FilterButton, FilterCard } from '../../utils/styles';




export default function CategoryFilter({ allCategories, filter }) {
    return (
        <React.Fragment>
            <CssBaseline />
            
                <Toolbar 
                    sx={{ 
                        display: { xs: 'none', sm: 'flex'}, 
                        justifyContent: 'space-between',
                        margin: 3,
                    }}
                >
                    {allCategories.map((obj) => (
                        <FilterButton 
                            key={obj.name}
                            onClick={() => filter(obj.name)}
                            sx={{  
                                backgroundImage: `url("${obj.img}")`,
                            }}
                        >
                            <FilterBox >
                                {obj.name}
                            </FilterBox>
                        </FilterButton>
                        
                    ))}
                </Toolbar>
            
                
            
            
        </React.Fragment>
        
        
    );
}