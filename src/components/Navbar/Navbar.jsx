import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/nike-shoes-vector.jpg';
import useStyles from './styles';


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="50px" className={classes.image} />
                        Shoes
                    </Typography>
                    <div className={classes.grow} />
               
                    <IconButton aria-label="Show cart items" color="inherit" >
                    <ShoppingCart />
                        <Badge badgeContent={totalItems} color="secondary" anchorOrigin={{ vertical: "top", horizontal: "right" }}> `
                        <Typography>
                              
                        </Typography>
                        </Badge>
                        
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
