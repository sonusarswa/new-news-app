import './appStyle.js';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Head} from "./components/header";
import {News} from "./components/newsCard";
import { getNews } from './actions/news';
import {CircularProgress} from '@material-ui/core';
import useStyles from './appStyle';

function App() {
  // Styles
  const classes = useStyles();
  // redux - dispatch
  const dispatch = useDispatch();
  // news initialization
  const state = useSelector((state)=>state.news);
  // useEffect for re rendering
  useEffect(()=>{
    dispatch(getNews());
    console.log("Hello from useEffect in App");
  },[]);
  console.log("Hello from APP");
  console.log("newsFromApp : ", state.news);
  return (
    <div>
      <Head/>
      {/* check if loading is true or not */}
      {(state.load) ? 
      <div className={classes.loader}> <CircularProgress/> </div> 
        :
      
      <News>
        {/* Passing state to news component */}
        {state}
      </News>}
    </div>
  );
}

export default App;
