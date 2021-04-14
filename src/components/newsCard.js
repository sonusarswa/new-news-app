import React, {useEffect, useState} from 'react';
import {Grid,Card,CardHeader,CardMedia,CardContent,CardActions,Typography} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import useStyles from './newsStyles';
import {getNews} from '../actions/news';
export const News = (props) => {
    const classes = useStyles();
    const news = useSelector((props)=>props.news);
    console.log("Hello from News comp");
    console.log("newsFromNewsComp : ", news);
    return(
      <Grid container spacing={2} className={classes.grid}>
        {news.map((n,index)=>
          <Grid item xs={12} sm={4} >
            <Card className={classes.card}>
              <CardHeader
            title={n.title}
            subheader={n.source.name}
              />
              <img src={n.urlToImage}></img>
              <CardContent>
                <Typography>
                  {n.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    );

}