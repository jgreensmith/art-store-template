import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from '@mui/material';
import Link from 'next/link';
import { Box } from '@mui/system';


const ProductCard = ({ image, name, price }) => {
    return (
        
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={name}
                            image={image}
                        />
                        <CardContent>
                            <Typography
                            gutterBottom
                            variant="body2"
                            color="textPrimary"
                            component="p"
                            >
                            {name}
                            </Typography>
                            <Box>
                            <Typography
                                variant="body1"
                                color="textPrimary"
                                component="p"
                            >
                                {price}
                            </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                
        
    )
}

export default ProductCard;


