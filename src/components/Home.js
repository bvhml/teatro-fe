import React, {useRef, useEffect} from 'react';
import {Grid, CssBaseline} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {First, Second, Third} from './';
import LanguageIcon from '@material-ui/icons/Language';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [])


const Home = ({classes}) =>{

    const mobile = useMediaQuery('(min-width:1025px)'); /* This hooks helps me to know if user's screen is from a mobile */
    const mobile2 = useMediaQuery('(min-width:840px)'); /* This hooks helps me to know if user's screen is from a mobile */
    const firstRef = useRef(null);
    const secondRef = useRef(null);
   // useMountEffect(() => scrollToRef(firstRef)) // Scroll on mount
    //.log(firstRef);
    return(
        <Grid container component="main" className={classes.root} fixed={'true'}>
        <CssBaseline/>
        <Grid container style={{backgroundColor: 'rgba(0,0,0,0.5)',height:'100vh', position:'absolute'}}/>
        <First mobile={mobile} mobile2={mobile2} classes={classes}/>
        <Second mobile={mobile} mobile2={mobile2} classes={classes}/>
        <Third mobile={mobile} mobile2={mobile2} classes={classes}/>    
        </Grid>
    );
}

export default Home;