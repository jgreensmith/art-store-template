import { Button, Divider, Table, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Store } from '../../utils/Store';
import { CartImg } from '../../utils/styles';
import getCommerce from '../../utils/commerce';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';

function Cart(props) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    const removeFromCartHandler = async (lineItem) => {
        const commerce = getCommerce(props.commercePublicKey);
        const cartData = await commerce.cart.remove(lineItem.id);
        dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
    };

    return (
        <div>
            <Toolbar>
                <Typography>Shopping Cart</Typography>
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
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left' >{cartItem.name}</TableCell>
                                            <TableCell align='right' >{cartItem.price.formatted_with_symbol}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left' >{cartItem.name}</TableCell>
                                            <TableCell align='right' >
                                                <Button
                                                    onClick={() => removeFromCartHandler(cartItem)}
                                                    variant="text"
                                                    color="secondary"
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
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
