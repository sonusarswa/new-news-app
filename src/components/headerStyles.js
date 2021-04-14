import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme)=>({
    root: {[theme.breakpoints.down('xs')]:{
        flexGrow:1,
        }
    },
    button:{
        fontWeight:"500",
        color : "white",
    },
}));