import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
    AppBar,
    Badge,
    Button,
    CircularProgress,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Slide,
    Toolbar,
    Tooltip,
    Typography,
    useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import { MainButton } from '../../utils/styles';
import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS } from '../../utils/constants';
import getCommerce from '../../utils/commerce';
import { Store } from '../../utils/Store';
import Cart from '../shop/Cart';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}



const drawerWidth = 250;
const cartWidth = 500;

const Navbar = (props) => {

    const { window, commercePublicKey } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleCartToggle = () => {
        setCartOpen(!cartOpen);
    }

    const links = {
        about: "About",
        shop: "Shop",
        commissions: "Commissions",
        contact: "Contact",
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {Object.keys(links).map((link) => (
                    <NextLink key={link} href={`/${link}`} >
                        <ListItemButton href={`/${link}`}>
                            <ListItemText primary={links[link]} />
                        </ListItemButton>
                    </NextLink>
                ))}
            </List>
        </div>
    );
    

    const container = window !== undefined ? () => window().document.body : undefined;

    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    console.log(cart.data?.line_items);

    useEffect(() => {
        const fetchCart = async () => {
            const commerce = getCommerce(commercePublicKey);
            dispatch({ type: CART_RETRIEVE_REQUEST });
            const cartData = await commerce.cart.retrieve();
            dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
        };
        fetchCart();
    }, []);

    //update cart icon, props passed down from layout


    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{ bgcolor: 'primary.main' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, color: 'primary.text' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NextLink href="/">
                            <MainButton sx={{ color: 'primary.text' }} >
                                Art Shop
                            </MainButton>
                        </NextLink>
                        <List sx={{ display: { sm: "flex", xs: "none" }, ml: 'auto', mr: 3 }}>
                            {Object.keys(links).map((link) => (
                                <NextLink key={link} href={`/${link}`}>
                                    <ListItemButton href={`/${link}`} >
                                        <ListItemText 
                                            primary={links[link]} 
                                            disableTypography={true} 
                                            sx={{ fontSize: '1.2rem', color: 'primary.text' }}
                                        />
                                    </ListItemButton>
                                </NextLink>
                            ))}
                        </List>
                        {/* <NextLink href="/cart">
                                <Link 
                                        variant="button"
                                        color="textPrimary"
                                        href="/cart"
                                        sx={{ margin: '1rem' }}      
                                > */}
                                    {cart.loading ? (
                                        <CircularProgress />
                                    ) : cart.data.total_items > 0 ? (
                                        <Badge badgeContent={cart.data.total_items} color='primary'>
                                            <Tooltip title="View Cart">
                                                <IconButton                         
                                                    onClick={handleCartToggle}
                                                >
                                                    <ShoppingCartIcon sx={{ color: 'primary.text' }} />
                                                </IconButton>
                                            </Tooltip>
                                        </Badge>   
                                    ) : (
                                        <Tooltip title="View Cart">
                                            <IconButton                         
                                                onClick={handleCartToggle}
                                            >
                                                <ShoppingCartIcon sx={{ color: 'primary.text' }} />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                {/* </Link>
                        </NextLink> */}
                        

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="nav"
                sx={{ width: { xs: '80%', sm: cartWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    anchor='right'
                    variant="temporary"
                    open={cartOpen}
                    onClose={handleCartToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '80%', sm: cartWidth } },
                    }}
                >
                    <Cart cart={cart}/>
                </Drawer>
            </Box>
        </React.Fragment>

    )
}

export default Navbar;
