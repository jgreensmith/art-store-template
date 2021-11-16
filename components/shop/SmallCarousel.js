import { Button, Container } from '@mui/material';
import React from 'react';

const SmallCarousel = ({images}) => {
    return (
        <Container sx={{ display: { xs: 'none', sm: 'block' } }} >
            {Array.isArray(images) && (images.map((image, i) => (
                <Button 
                    key={i}
                    sx={{
                        background: `url("${image}") center center/cover`,
                        height: '56px',
                        width: '48px',
                        mb: 3,
                    }}
                    
                />
            )))}
        </Container>
    )
}

export default SmallCarousel;
