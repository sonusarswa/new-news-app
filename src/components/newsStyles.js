import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    grid:{
        flexGrow:1,
        paddingLeft:"16px",
        width:'100%'
    },
    link:{
        color:"black"
    },
    card:{
        marginTop:"10px",
        height:"563px",
        // overflow:"auto",
    },
    imageDiv:{
        display:"flex",
        justifyContent:"center",
    },
    image:{
        height:"250px",
        width:"380px"
    },
    cardTitle:{
        position:"",
    },
    cardCaption:{},
}));