import { AppBar, Card, CssBaseline, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';
import { FilterButton, FilterCard } from '../../utils/styles';




export default function CategoryFilter({ allCategories, filter }) {
    return (
        <React.Fragment>
            <CssBaseline />
            
                <Toolbar 
                    sx={{ 
                        display: { xs: 'none', sm: 'flex'}, 
                        justifyContent: 'space-between',
                    }}
                >
                    {allCategories.map((obj) => (
                        <FilterButton 
                            key={obj.name}
                            onClick={() => filter(obj.name)}
                            style={{  
                                backgroundImage: `url("${obj.img}")`    
                            }} 
                        >
                            <FilterCard >
                                {obj.name}
                            </FilterCard>
                        </FilterButton>
                        
                    ))}
                </Toolbar>
            
                
            
            
        </React.Fragment>
        
        
    );
}