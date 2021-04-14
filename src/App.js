import './App.css';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Head} from "./components/header";
import {News} from "./components/newsCard";
import {Trial} from "./components/justForTrial";
import { getNews } from './actions/news';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state)=>state.news)
  useEffect(()=>{
    dispatch(getNews());
    console.log("Hello from useEffect in App")
  },[]);
  console.log("Hello from APP");
  console.log("newsFromApp : ", news);
  return (
    <div>
      <Head/>
      <News>{news}</News>
      {/* <Trial></Trial> */}
    </div>
  );
}

export default App;
