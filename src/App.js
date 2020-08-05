import React from 'react';
import {Home} from './components';
import {ThemeProvider} from '@material-ui/styles';
import PirateTheme from './Themes/PirateTheme';
import {makeStyles} from '@material-ui/core/styles';
import {blue, deepOrange} from '@material-ui/core/colors';

let useStyles = makeStyles(theme => ({
  root: {
    height:'100vh',
  },
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(to right bottom, #2c3e50, #82ffa1)',
    backgroundColor: 'transparent',
    height: '100vh',
    alignItems: 'center',
  },
  image: {
    backgroundImage: 'url("../images/6.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'100vh',
    padding: '6vh',
  },
  image2: {
    backgroundImage: 'url("../images/1.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  logo: {
    backgroundImage: 'url("../images/logo.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'100vh',
    padding: '6vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperContainer: {
    backgroundColor:'#303030',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  photo: {
    margin: 10,
    width: 100,
    height: 100,
  },
  bigPhoto: {
    margin: 10,
    width: 75,
    height: 75,
    background: theme.palette.background.paper,
    color: 'red',
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding:'5vh',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
  status: {
    danger: 'orange',
  },
  icon: {
    fontSize: 100,
    color:'#273c75'
  },
  dialogContent:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width:'50vw',
    maxWidth:400,
    minWidth:220,
    color: 'white',
  },
  DialogContentText:{
    color:blue[400],
  },
  Link: {
    color:blue[400],
  },
  NavLink: {
    textDecoration: 'none',
    color:'white',
    backgroundColor:'transparent',
    cursor:'pointer',
  },
  MadeBy: {
    color:'white',
    backgroundColor:'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
  ContainerFooter: {
    backgroundColor:'transparent',
  },
  bluredForm: {
    width: 'auto',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height:'53px',
    width: 200,
    margin:`-10px 0 0 ${theme.spacing(2)}px`,
    backgroundColor:theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `500px 0 0 ${theme.spacing(2)}px`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  botonSubir:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(1),
  }
}));


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={PirateTheme}>
      <Home classes={classes}/>
    </ThemeProvider>
  );
}

export default App;
