import { Button, Divider, Grid, IconButton, Table, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Store } from '../../utils/Store';
import { CartImg } from '../../utils/styles';
import getCommerce from '../../utils/commerce';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';

function Cart(props) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const { handleCartToggle } = props;

    const removeFromCartHandler = async (lineItem) => {
        const commerce = getCommerce(props.commercePublicKey);
        const cartData = await commerce.cart.remove(lineItem.id);
        dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
    };

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
        </div>
    )
}

export default dynamic(() => Promise.resolve(Cart), {
    ssr: false,
});
