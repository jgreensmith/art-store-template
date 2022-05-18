import { Card, List, ListItem, Paper, Typography, Grid, Alert, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import getCommerce from '../../utils/commerce';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';
import { Store } from '../../utils/Store';
import  Router  from 'next/router';

const ProductDescription = ({name, description, price, inventory, commercePublicKey, product}) => {
    const [quantity, setQuantity] = useState(1);
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    console.log(cart);

    const addToCartHandler = async () => {
        const commerce = getCommerce(commercePublicKey);
        const lineItem = cart.data?.line_items.find(
            (x) => x.product_id === product.id
        );
        if (lineItem) {
            const cartData = await commerce.cart.update(lineItem.id, {
                quantity: quantity,
            });
            dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
            //Router.push('/cart');
        } else {
            const cartData = await commerce.cart.add(product.id, quantity);
            dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
            //Router.push('/cart');
        }
    }

    return (
        <Paper>
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
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography 
                                sx={{
                                fontWeight: 700,
                                fontSize: "1.7rem", 
                                }}
                            >
                              £{price}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {inventory > 0 ? (
                                <Alert icon={false} severity="success">
                                    In Stock
                                </Alert>
                            ) : (
                                <Alert icon={false} severity="error">
                                    Unavailable
                                </Alert>
                            )}
                        </Grid>
                    </Grid>
                </ListItem>
                {inventory > 0 && (
                    <>
                        <ListItem>
                            <FormControl fullWidth>
                                <InputLabel>Quantity</InputLabel>
                                <Select
                                    labelId="quanitity-label"
                                    label="Quantity"
                                    id="quanitity"
                                    fullWidth
                                    onChange={(e) => setQuantity(e.target.value)}
                                    value={quantity}
                                    inputProps={{MenuProps: {disableScrollLock: true}}}
                                >
                                    {[...Array(inventory).keys()].map((x) => (
                                        <MenuItem key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>     
                        </ListItem>
                        <ListItem>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={addToCartHandler}
                        >
                            Add to cart
                        </Button>
                        </ListItem>
                    </>
                )}
                <ListItem>
                    <Box
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></Box>
                </ListItem>
            </List>
        </Paper>
    )
}

export default ProductDescription;
