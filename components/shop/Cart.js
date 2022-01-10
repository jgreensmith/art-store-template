import { Button, Divider, Grid, IconButton, Paper, Table, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Store } from '../../utils/Store';
import { CartImg } from '../../utils/styles';
import getCommerce from '../../utils/commerce';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';
import NextLink from 'next/link';
import { Box } from '@mui/system';


function Cart(props) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const { handleCartToggle } = props;

    const removeFromCartHandler = async (lineItem) => {
        const commerce = getCommerce(props.commercePublicKey);
        const cartData = await commerce.cart.remove(lineItem.id);
        dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
    };

    const procceedToCheckoutHandler = () => {

    }

    return (
        <div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Shopping Cart</Typography>
                <IconButton onClick={handleCartToggle} >
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Table>
                <TableBody>
                    {cart.data?.line_items.map((cartItem) => (
                        <TableRow key={cartItem}>
                            <TableCell 
                                align='left' 
                                sx={{ width: '80px', padding: '5px' }} 
                            >
                                <CartImg src={cartItem.image.url} />
                            </TableCell>
                            <TableCell>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>{cartItem.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>{cartItem.price.formatted_with_symbol}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Quantity: {cartItem.quantity}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>
                                            <Button
                                                onClick={() => removeFromCartHandler(cartItem)}
                                                variant="text"
                                                color="secondary"
                                                sx={{padding: 0}}
                                            >
                                                Remove
                                            </Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
            
                <Paper sx={{ position: 'absolute', bottom: 0, right: 0, left: 0, padding: 3 }} elevation={3}>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Subtotal: {cart.data?.subtotal.formatted_with_symbol}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {cart.data?.total_items > 0 && (
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    onClick={procceedToCheckoutHandler}
                                >
                                    Proceed to checkout
                                </Button>
                            )}
                        </Grid>
                        <Grid item xs={6}>
                            <NextLink href='/shop'>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="text"
                                    color="secondary"
                                >
                                    Continue Shopping
                                </Button> 
                            </NextLink>
                            
                        </Grid>

                    </Grid>
                    
                </Paper>
            
            

        </div>
    )
}

export default dynamic(() => Promise.resolve(Cart), {
    ssr: false,
});
