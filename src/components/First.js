import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Navbar} from './';
import Fade from 'react-reveal/Fade';



const First = ({classes, mobile, mobile2, firstRef, refs})=>{
    const [ open, setOpen ] = useState(false);
    return(
            <Grid item container className={classes.image} justify='center' ref={firstRef}>
                <Grid xs={12} item>
                    <Navbar classes={classes} mobile={mobile} mobile2={mobile2} open={open} setOpen={setOpen} refs={refs}/>
                </Grid>
                {!open ? <Grid item container xs={12} justify='center'>
                    <Grid container item xs={!mobile? 12:6} style={{backgroundColor:'transparent'}}>
                        <Grid item xs={12}>
                        <Fade bottom duration={500}>
                            <Typography variant={!mobile? "caption":"body1"} style={{color:'white', fontSize:'20px', textAlign:'justify'}}>
                            La misión del Teatro Abril es ser el lugar de entretenimiento de la región con las producciones teatrales más excepcionales que eleven el espíritu y examinen las preguntas universales de nuestra condición humana.
                            </Typography>
                        </Fade>
                        </Grid>
                        <Grid item xs={12}>
                        <Fade duration={1500}>
                            <Typography variant={"caption"} style={{color:'white', fontSize:'16px', textAlign:'justify'}}> 
                                Luis Pedro Abril
                            </Typography>
                            <Typography variant={"caption"} className={classes.NavLink} style={{color:'white', fontSize:'16px', textAlign:'justify'}}>
                               <a href="mailto:lpabril@teatroabril.com" target='_blank' rel="noopener noreferrer" className={classes.NavLink}>Director Artístico</a> 
                            </Typography>
                        </Fade>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} justify='center'>
                        <Fade duration={2500}>
                            <img src="../../images/logo.png" alt="logo" style={{height:'200px', width:'200px'}}/>
                        </Fade>
                    </Grid>
                </Grid>:null}
            </Grid>
    );
};

export default First;