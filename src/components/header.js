import React, {useState} from 'react';
import useStyles from "./headerStyles";
import {AppBar, Button, Toolbar, Typography, InputBase, useMediaQuery, MenuItem, Menu} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import {useSelector,useDispatch} from 'react-redux';
import {getNews,getNewsTech,getNewsEnt,getNewsSports,getNewsSearch,getNewsBusiness} from '.././actions/news';

export const Head = () => {

    const classes = useStyles();

    const [search,setSearch]=useState("Search . . .");
    const dispatch = useDispatch();
    const onSearch = () => {
      console.log("searchValue : ", search);
      dispatch(getNewsSearch(search));
      setSearch("Search . . .");
    }

    const isMobile = useMediaQuery("(min-width:600px)");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
          <AppBar position="static" className={classes.root}>
            {(isMobile) ?

              // For Tablet and Laptop Screens

              <Toolbar>
              <Button onClick={()=>{dispatch(getNews())}}>
                  <Typography className={classes.categories}> HOME </Typography>
                </Button>
                <Button onClick={()=>{dispatch(getNewsBusiness())}}>
                  <Typography className={classes.categories}> BUSINESS </Typography>
                </Button>
                <Button onClick={()=>{dispatch(getNewsTech())}}>
                  <Typography className={classes.categories}> TECHNOLOGY </Typography>
                </Button>
                <Button onClick={()=>{dispatch(getNewsEnt())}}>
                  <Typography className={classes.categories}> ENTERTAINMENT </Typography>
                </Button>
                <Button onClick={()=>{dispatch(getNewsSports())}}>
                  <Typography className={classes.categories}> SPORTS </Typography>
                </Button>

                {/* Search bar and Button */}

                <div className={classes.search}>
                  <InputBase
                    placeholder={search}
                    onChange={event => setSearch(event.target.value)}
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                  inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <Button onClick={()=>{onSearch()}} className={classes.button} >
                    <SearchIcon className={classes.searchIcon} />
                </Button>
              </Toolbar>
              :

              // For Mobile Devices

              <div>
              <Button onClick={handleClick} >
                <MenuIcon/>
              </Button>
              <Menu
              className={classes.menu}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
                
                <MenuItem onClick={handleClose}>
                  <Button onClick={()=>{dispatch(getNews())}}>
                    <Typography className={classes.menuItem}>HOME</Typography>
                  </Button>
                </MenuItem>
                
                <MenuItem onClick={handleClose}>
                  <Button onClick={()=>{dispatch(getNewsBusiness())}}>
                    <Typography className={classes.menuItem}> BUSINESS </Typography>
                  </Button>
                </MenuItem>
                
                <MenuItem onClick={handleClose}>
                  <Button onClick={()=>{dispatch(getNewsTech())}}>
                    <Typography className={classes.menuItem}> TECHNOLOGY </Typography>
                  </Button>
                </MenuItem>
                
                <MenuItem onClick={handleClose}>
                  <Button onClick={()=>{dispatch(getNewsEnt())}}>
                    <Typography className={classes.menuItem}> ENTERTAINMENT </Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={()=>{dispatch(getNewsSports())}}>
                    <Typography className={classes.menuItem}> SPORTS </Typography>
                  </Button>
                </MenuItem>
                
            </Menu>
              
              <InputBase
                className={classes.search}
                placeholder={search}
                onChange={event => setSearch(event.target.value)}
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
              inputProps={{ 'aria-label': 'search' }}
              />
              <Button onClick={()=>{onSearch()}} className={classes.button} >
                <SearchIcon className={classes.searchIcon} />
              </Button>
            </div>
            }

          </AppBar>
    );
}