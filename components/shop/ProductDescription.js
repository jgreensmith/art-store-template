import { Card, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProductDescription = ({name, description}) => {
    return (
        <Card>
            <List>
                <ListItem>
                    <Typography
                        gutterBottom
                        variant="h6"
                        color="textPrimary"
                        component="h1"
                    >
                        {name}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Box
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></Box>
                </ListItem>
            </List>
        </Card>
    )
}

export default ProductDescription;
