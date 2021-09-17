import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {

    height: 500,

  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30'
  },


  //slider



  //grid
  rootgrid:{

    flexFlow:1,
     height:600,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridcolor:{
    width: 600,
    height:600, 
    
  },
  boxOne:{
    height:200,
    width:200,
    background:' linear-gradient(62.98deg, #7710FF 46.52%, rgba(119, 16, 255, 0.104167) 111.11%, rgba(119, 16, 255, 0) 111.12%);',
    margin:20,
    borderRadius:'20px',
    padding:20,

  },
  boxTwo:{
    
    height:200,
    width:200,
    backgroundColor: '#F2F2F2',
    margin:20,
    padding:20,

  },
  boxthree:{
    
    height:200,
    width:200,
    backgroundColor: '#F2F2F2',
    margin:20,
    position: 'relative',
    left: 220,
    top:-440,
    padding:20,

  },
  boxfour:{
    
    height:200,
    width:200,
    background: ' linear-gradient(62.98deg, #7710FF 46.52%, rgba(119, 16, 255, 0.104167) 111.11%, rgba(119, 16, 255, 0) 111.12%);',
    margin:20,
    position: 'relative',
    left: 220,
    top:-440,
    padding:20,
    borderRadius:'20px'

  },
  paper: {
    height: 400,
    width: 320,
  },

}));

export default useStyles;