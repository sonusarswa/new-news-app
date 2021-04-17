import './App.css';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Head} from "./components/header";
import {News} from "./components/newsCard";
import { getNews } from './actions/news';
import {CircularProgress} from '@material-ui/core';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state)=>state.news);
  useEffect(()=>{
    dispatch(getNews());
    console.log("Hello from useEffect in App");
  },[]);
  console.log("Hello from APP");
  console.log("newsFromApp : ", news);
  return (
    <div>
      <Head/>
      <News>{news}</News>
    </div>
  );
}

export default App;
