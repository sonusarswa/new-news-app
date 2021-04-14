import React from 'react';
import useStyles from "./headerStyles";
import {AppBar, Button, Toolbar, InputBase} from "@material-ui/core";

export const Head = () => {

    const classes = useStyles();

    return(
          <AppBar position="static" className={classes.root}>
            <Toolbar>
              <Button>ENTERTAINMENT</Button>
              <Button>TECHNOLOGY</Button>
              <Button>SPORTS</Button>
            </Toolbar>
          </AppBar>
    );
}