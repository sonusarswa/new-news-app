import React, {useEffect, useState} from 'react';
import {Grid,Card,CardHeader,CardMedia,CardContent,CardActions,Typography,Link} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import useStyles from './newsStyles';
import altImage from './googleNews.jpg';
import moment from 'moment';
export const News = (props) => {
    const classes = useStyles();
    const news = useSelector((props)=>props.news);
    
    console.log("Hello from News comp");
    console.log("newsFromNewsComp : ", news);
    return(
      <Grid container spacing={2} className={classes.grid}>
        {news.news.map((n)=>
          <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardTitle}
                title={
                  <Link className={classes.link} href={n.url} target="_blank">
                    {n.title}
                  </Link>
                }
                subheader={moment(n.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              ></CardHeader>
              <div className={classes.imageDiv}>
                <img className={classes.image} src={n.urlToImage || altImage} ></img>
              </div>
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