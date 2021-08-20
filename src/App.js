import './appStyle.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Head } from "./components/header";
import { News } from "./components/newsCard";
import { getNews } from './actions/news';
import { CircularProgress,Dialog,DialogActions,DialogTitle,DialogContent,Typography,Button } from '@material-ui/core';
import useStyles from './appStyle';

function App() {
  // Styles
  const classes = useStyles();
  // redux - dispatch
  const dispatch = useDispatch();
  // news initialization
  const state = useSelector((state) => state.news);

  // Popup window boolean value
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect for re rendering
  useEffect(() => {
    dispatch(getNews());
    console.log("Hello from useEffect in App");
  }, []);
  console.log("Hello from APP");
  console.log("newsFromApp : ", state.news);
  return (
    <div>
      <Head />
      {/* Check if error is true or not */}

      {(state.error) ?
        <div>
          <Typography>This site is closed</Typography>
          <Dialog aria-labelledby="customized-dialog-title" open={open} >
            <DialogTitle id="customized-dialog-title" >
              This website is closed
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Sorry to inform you that this site is closed. newsApi changed it's pricing model and
                being a student developer I couldn't afford it so henceforth this website is closed. 
              </Typography>
              <Typography gutterBottom>
                If you are a developer and wish to see my code you can do so by visiting my github repo.
              </Typography>
            </DialogContent>
            <DialogContent dividers>
              <a href="https://github.com/deepesh-01/react-news-app" target="_blank" rel="noopener noreferrer">
                <Button alignContent="center" onClick={handleClose}>
                  github repo link 
                </Button>
              </a>
            </DialogContent>
          </Dialog>
        </div>
        :
        /* check if loading is true or not */
        (state.load) ?
          <div className={classes.loader}> <CircularProgress /> </div>
          :
          <News>
            {/* Passing state to news component */}
            {state}
          </News>
      }
    </div>
  );
}

export default App;
