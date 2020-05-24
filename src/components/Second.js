import React from 'react';
import 'date-fns';
import {Grid, Typography, Paper, CssBaseline} from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const Third = ({classes, mobile, mobile2, secondRef})=>{


    return(
            <Grid item container className={classes.root} justify='center' style={{padding:!mobile2?'1vh':'8vh'}} ref={secondRef}>
            <CssBaseline/>
                <Grid container item xs={12} sm={12} md={12} lg={12} component={Paper} elevation={7} justify='center'>
                        <Grid container style={{padding:!mobile?'5vh':'8vh'}} justify='center'>
                                <Grid item xs={12}>
                                    <Fade duration={1000}>
                                    <Typography component="h1" variant="h5" style={{color:'black'}}>
                                        Historia
                                    </Typography>
                                    </Fade>
                                </Grid>
                                <Fade duration={1100}>
                                <Grid item xs={12} style={{backgroundColor:'transparent',height:!mobile? '60vh':'500px', overflow:'auto'}}>
                                    <Typography variant={!mobile? "h5":"h5"} style={{color:'black', fontSize:'20px', textAlign:'justify'}}>
                                    Fundado por don Julio Abril Valdez a finales del siglo XIX, el Teatro Abril, antes con el nombre de Teatro Olimpia, estaba ubicado en la 11 Avenida y séptima calle esquina del actual Centro Histórico de Guatemala. Para 1912 se traslada toda la compañía al local que ocupa en la actualidad—la 9ave. y 14 calle con el nombre de Teatro Abril.
                                    Los terremotos de diciembre de 1917 y enero de 1918 dañaron el edificio muy seriamente y tuvo que ser reconstruido.
                                    En la década de 1920 el Teatro Abril vivió momentos estelares contando con espectáculos de innumerables compañías europeas de zarzuela, opereta y revistas musicales, como lo fueron la gran Compañía Santa Cruz, la Velasco, don Jacinto Benavente (Premio Nobel de Literatura 1922) y compañías de América como la Compañía Unda, doña Esperanza Iris, doña Virginia Fabregas, los Hermanos Soler, entre otros.
                                    Al palco presidencial acudieron galantemente todos los gobernantes con sus familias que se sucedieron en esos diez venturosos años de la vida Guatemalteca.
                                    Tras el terremoto de 1976, don Julio Rafael Abril Unda se vio forzado a derribar el antiguo edificio, el cual reconstruyo e inauguro el 30 de Junio de 1987 recibiendo la Orden del Quetzal en Grado de Gran Cruz por el entonces Presidente de la Republica de Guatemala Vinicio Cerezo Arévalo y la Orden del Merito Artístico por parte del Gobierno Municipal presidido por el entonces Alcalde Metropolitano Álvaro Arzú Irigoyen. Al fallecer don Julio Abril Unda en 1988 deja en manos de su tercer hijo don Luis Pedro Abril Soto la Dirección General del mismo. En 2010, don Luis Pedro Abril Soto asume el cargo de Presidente del Teatro Abril y Luis Pedro Abril Arana asume el cargo de Director Artístico del Teatro Abril. (ver biografía)
                                    El nuevo Teatro Abril fue inspiración de diversas obras arquitectónicas de Europa. En su interior podemos encontrar replicas del León de San Marcos de Florencia, la Venus de Milo, el Apolo de Belvedere, la escultura de la Venus de Botichelli, y en el romántico vestíbulo podemos disfrutar de la hermosa escultura de la Victoria de Samotracia (aportada por el Museo de Louvre, Paris).
                                    El 5 de Junio de 1991 la tragedia volvió hacer el actor principal en el Teatro Abril; un voraz incendio destruye sus instalaciones dañando por completo el área del escenario, luneta y camerinos.
                                    Hoy el Teatro Abril, considerado como centro de Interés Turístico Nacional y Monumento Histórico, se dedica a difundir el arte con espectáculos excepcionales que eleven el espíritu, inspiren a nuestra gente y demuestren la grandeza de nuestra cultura.
                                    Si quieres formar parte de nuestro equipo envía tu Currículum a {<a href="mailto:info@teatroabril.com" target='_blank' rel="noopener noreferrer" className={classes.NavLink} style={{color:'blue'}}>info@teatroabril.com</a>}
                                    </Typography>
                                </Grid>
                                </Fade>
                        </Grid>
                </Grid>
            </Grid>
    );
};

export default Third;