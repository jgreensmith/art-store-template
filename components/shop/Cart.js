import { Divider, Table, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Store } from '../../utils/Store';

function Cart(props) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    return (
        <div>
            <Toolbar>
                <Typography>Shopping Cart</Typography>
            </Toolbar>
            <Divider />
            <Table>
                <TableBody>
                        {cart.data.line_items.map((cartItem) => (
                            <TableRow key={cartItem}>
                                <TableCell>{cartItem.name}</TableCell>
                                <TableCell align='right'>{cartItem.price.formatted_with_symbol}</TableCell>

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
