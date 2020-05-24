import React, {useRef, useEffect, useState} from 'react';
import {Grid, CssBaseline} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {First, Second, Third} from './';
//import LanguageIcon from '@material-ui/icons/Language';

const Home = ({classes}) =>{

    const mobile = useMediaQuery('(min-width:1025px)'); /* This hooks helps me to know if user's screen is from a mobile */
    const mobile2 = useMediaQuery('(min-width:840px)'); /* This hooks helps me to know if user's screen is from a mobile */
    const [ refs, setRefs ] = useState({}); /* This hooks helps me to know offsetTop of each block in page */
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    useEffect(() => {
        setRefs({0:firstRef.current.offsetTop,1:secondRef.current.offsetTop,2:thirdRef.current.offsetTop});
      }, [firstRef, secondRef, thirdRef]);

    return(
        <Grid container component="main" className={classes.root} fixed={'true'}>
        <CssBaseline/>
        <Grid container style={{backgroundColor: 'rgba(0,0,0,0.5)',height:'100vh', position:'absolute'}}/>
        <First mobile={mobile} mobile2={mobile2} classes={classes} firstRef={firstRef} refs={refs}/>
        <Second mobile={mobile} mobile2={mobile2} classes={classes} secondRef={secondRef}/>
        <Third mobile={mobile} mobile2={mobile2} classes={classes} thirdRef={thirdRef}/>    
        </Grid>
    );
}

export default Home;