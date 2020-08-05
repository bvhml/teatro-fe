import React from 'react';
import {Grid, Typography, Link} from '@material-ui/core';
import HamburgerMenu from 'react-hamburger-menu';
import Fade from 'react-reveal/Fade';


const Navbar = ({classes, mobile, mobile2, open, setOpen, refs}) =>{

    const onClickLink = (i)=>{
        window.scroll({top:refs[i], left:0,behavior: 'smooth'}) 
    };
    
    const handleClick = ()=>{
        setOpen(!open);
    };
    return(
        <Grid container item justify="center" alignContent='center'>
        {!mobile2 ? 
            <Grid xs={12} md={12} container item justify='space-between' style={{backgroundColor:'transparent'}}>
                <Grid container item xs={12} justify='flex-start' alignItems='center' style={{backgroundColor:'transparent'}}>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleClick}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </Grid>
                {open && 
                    (<Grid container spacing={4}>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={500}>
                            <Typography component={Link} to="/#" onClick={()=>onClickLink(0)} variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                Inicio 
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={700}>
                            <Typography component={Link} to="/#" onClick={()=>onClickLink(1)} variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                Acerca de nosotros
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={900}>
                            <Typography component={Link} to="/#" onClick={()=>onClickLink(2)} variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                Temporada
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={1100}>
                            <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                Academia
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={1300}>
                            <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                Servicios
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={1350}>
                            <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                English
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={1400}>
                            <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                Contáctenos
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid container item xs={12} justify='center' alignItems='center'>
                            <Fade duration={1450}>
                            <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '22px':'20px'}}>
                                ¡Donaciones!
                            </Typography>
                            </Fade>
                        </Grid>
                    </Grid>)}
            </Grid>
        :
            <Grid xs={12} md={12} container item justify='space-between' style={{backgroundColor:'transparent', zIndex:'99999'}}>
                <Grid item>
                    <Typography component={Link} to="/#" onClick={()=>onClickLink(0)} variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        Inicio 
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" onClick={()=>onClickLink(1)} variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        Acerca de nosotros
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" onClick={()=>onClickLink(2)} variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        Temporada
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        Academia
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        Servicios
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        English
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        Contáctenos
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component={Link} to="/#" variant="h5" className={classes.NavLink} style={{fontSize:!mobile? '16px':'20px'}}>
                        ¡Donaciones!
                    </Typography>
                </Grid>
            </Grid>}
        </Grid>
    );
}

export default Navbar;