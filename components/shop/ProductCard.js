import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from '@mui/material';
import Link from 'next/link';
import { Box } from '@mui/system';


const ProductCard = ({ permalink, image, name, price }) => {
    return (
        <Slide direction="up" in={true}>
            <Card>
                <Link href={`/product/${permalink}`} passHref>
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
                </Link>
            </Card>
        </Slide>
        
    )
}

export default ProductCard;


