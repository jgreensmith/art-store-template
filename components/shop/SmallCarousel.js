import { Button, Container } from '@mui/material';
import React from 'react';
import { ThumbnailButton } from '../../utils/styles';

const SmallCarousel = ({images}) => {
    return (
        <React.Fragment>
            {Array.isArray(images) && (images.map((image, i) => (
                <ThumbnailButton 
                    key={i}
                    sx={{
                        background: `url("${image}") center center/cover`,
                        display: { xs: 'none', sm: 'block' },
                    }}
                    
                />
            )))}
        </React.Fragment>
    )
}

export default SmallCarousel;
