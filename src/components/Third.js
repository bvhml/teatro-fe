import React from 'react';
import 'date-fns';
import {Grid, Typography, Paper, CssBaseline, TextField, Button} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Third = ({classes, mobile, mobile2})=>{

    const [selectedDate, setSelectedDate] = React.useState(null);
    const mobile3 = useMediaQuery('(min-width:1160px)'); /* This hooks helps me to know if user's screen is from a mobile */
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
            <Grid item container className={classes.root} justify='center' style={{padding:!mobile2?'1vh':'8vh'}} >
            <CssBaseline/>
                { mobile3 && (<Grid item xs={false} sm={false} md={false} lg={7} component={Paper} className={classes.image2} elevation={7} square></Grid>)}
                <Grid container item xs={12} sm={12} md={12} lg={5} component={Paper} elevation={7} justify='center' >
                    <Grid container style={{padding:!mobile?'5vh':'8vh', backgroundColor:'transparent'}} justify='center' spacing={!mobile?4:0}>
                        <Grid container item style={{padding:!mobile?'2.6vh':'4.6vh'}}justify='flex-start' spacing={!mobile?4:0}>
                            <Grid item>
                                <Fade duration={1000}>
                                <Typography component="h1" variant="h5" style={{color:'black'}}>
                                    Temporada Estudiantil
                                </Typography>
                                </Fade>
                            </Grid>
                            <Grid item>
                                <Fade bottom duration={2000}>
                                    <Typography variant="h5" style={{color:'black', fontSize:'16px'}}>
                                    Para más información y reservaciones solo ingrese sus datos:
                                    </Typography>
                                </Fade>
                            </Grid>
                        </Grid>
                        <Grid container item justify='center'>
                            <form noValidate>
                                <Fade bottom duration={2100}>
                                    <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="nombre"
                                    label="Nombre completo"
                                    name="nombre"
                                    />
                                </Fade>
                                <Fade bottom duration={2150}>
                                    <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    />
                                </Fade>
                                <Fade bottom duration={2200}>
                                    <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="telefono"
                                    label="Telefono"
                                    name="telefono"
                                    />
                                </Fade>
                                <Fade bottom duration={2250}>
                                    <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="direccion"
                                    label="Dirección"
                                    name="direccion"
                                    />
                                </Fade>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justify="space-around" spacing={!mobile?0:1}>
                                            <Grid item xs={12} md={6}>
                                                <Fade bottom duration={2300}>
                                                <KeyboardDatePicker
                                                disableToolbar
                                                fullWidth
                                                variant="dialog"
                                                format="MM/dd/yyyy"
                                                margin="dense"
                                                id="fecha"
                                                name="fecha"
                                                label="Fecha que desea asistir"
                                                value={selectedDate}
                                                inputVariant="outlined"
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                />
                                                </Fade>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                            <Fade bottom duration={2350}>
                                                <KeyboardTimePicker
                                                fullWidth
                                                margin="dense"
                                                id="hora"
                                                name="hora"
                                                variant="dialog"
                                                label="Hora que desea asistir"
                                                value={selectedDate}
                                                inputVariant="outlined"
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change time',
                                                }}
                                                />
                                                </Fade>
                                            </Grid>
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                <Fade bottom duration={2400}>
                                    <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="cantidad"
                                    label="Cantidad de alumnos"
                                    name="cantidad"
                                    />
                                </Fade>
                                <Fade bottom duration={2450}>
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    >
                                    Solicitar ahora!
                                    </Button>
                                </Fade>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
};

export default Third;