import React,{useState} from 'react';
import 'date-fns';
import {Grid, Typography, Paper, CssBaseline, TextField, Button} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormValidator from '../helpers/FormValidator';
import validator from 'validator';

export const validatorArg = new FormValidator([

    { 
        field: 'nombre',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor ingrese un nombre.'
    },
    {
        field: 'email',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor escriba un email.'
    },
    { 
        field: 'email',
        method: validator.isEmail,
        validWhen: true,
        message: 'Por favor ingrese un email valido.'
    },
    { 
        field: 'telefono',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor ingrese un numero de telefono.'
    },
    { 
        field: 'telefono',
        method: validator.isNumeric,
        validWhen: true,
        message: 'Por favor ingrese solo numeros.'
    },
    { 
        field: 'telefono',
        method: validator.isLength,
        args:[{min:8,max:8}],
        validWhen: true,
        message: 'Por favor ingrese un 8 numeros.'
    },
    { 
        field: 'direccion',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor ingrese una dirección.'
    },
    { 
        field: 'fecha',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor ingrese una fecha para asistir.'
    },
    { 
        field: 'fecha',
        method: 'isAfter',
        validWhen: true,
        message: 'Por favor ingrese una fecha despues de hoy.'
    },
    { 
        field: 'hora',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor ingrese una hora para asistir.'
    },
    { 
        field: 'cantidad',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Por favor ingrese cantidad de alumnos.'
    },
    { 
        field: 'cantidad',
        method: validator.isNumeric,
        validWhen: true,
        message: 'Por favor ingrese solo numeros.'
    },
    
    
  ]);

let validationResponse =  {};  
const Third = ({classes, mobile, mobile2})=>{

    const [selectedDate, setSelectedDate] = React.useState(null);
    const mobile3 = useMediaQuery('(min-width:1160px)'); /* This hooks helps me to know if user's screen is from a mobile */

    const [formState,setFormState] = useState({
        nombre:{value:'',errorMessage:''},
        email:{value:'',errorMessage:''},
        telefono:{value:'',errorMessage:''},
        direccion:{value:'',errorMessage:''},
        fecha:{value:'',errorMessage:''},
        hora:{value:'',errorMessage:''},
        cantidad:{value:'',errorMessage:''},
        messageDialog:'',
        showDialog:false,
      });
    
      function handleSubmit(event){
     
        event.preventDefault();
  
        const nombre = event.target.nombre.value;
        const email = event.target.email.value;
        const telefono = event.target.telefono.value;
        const direccion = event.target.direccion.value;
        const fecha = event.target.fecha.value;
        const hora = event.target.hora.value;
        const cantidad = event.target.cantidad.value;
        const validation = validatorArg.validate({nombre:nombre,email:email,telefono:telefono,direccion:direccion,fecha:String(fecha),hora:hora,cantidad:cantidad});
        setFormState({nombre:{value:nombre,errorMessage:validation.nombre.message},email:{value:email,errorMessage:validation.email.message},telefono:{value:telefono,errorMessage:validation.telefono.message},direccion:{value:direccion,errorMessage:validation.direccion.message},fecha:{value:fecha,errorMessage:validation.fecha.message},hora:{value:hora,errorMessage:validation.hora.message},cantidad:{value:cantidad,errorMessage:validation.cantidad.message}});
        validationResponse = {nombre:validation.nombre.isInvalid,email: validation.email.isInvalid,telefono:validation.telefono.isInvalid,direccion:validation.direccion.isInvalid,fecha:validation.fecha.isInvalid,hora:validation.hora.isInvalid,cantidad:validation.cantidad.isInvalid};
        
        //console.log(validator.isAfter(fecha.toString()));
        if (validation.isValid) {
          console.log("TODO BIEN");
  
        }
        else{
          //if is Invalid
          
        }
        
        return;
  
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    function formatDate(date) {
        let fecha = new Date(date)
        return fecha.getFullYear() + '/' + 
          (fecha.getMonth() + 1) + '/' + 
          fecha.getDate() + ' ' 
      }

    return(
            <Grid item container className={classes.root} justify='center' style={{padding:!mobile2?'1vh':'8vh', height:!mobile?'130vh':'100vh'}} >
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
                            <form onSubmit={handleSubmit} noValidate>
                                <Fade bottom duration={2100}>
                                    <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="nombre"
                                    label="Nombre completo"
                                    name="nombre"
                                    error={validationResponse.nombre}
                                    helperText={formState.nombre.errorMessage}
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
                                    error={validationResponse.email}
                                    helperText={formState.email.errorMessage}
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
                                    error={validationResponse.telefono}
                                    helperText={formState.telefono.errorMessage}
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
                                    error={validationResponse.direccion}
                                    helperText={formState.direccion.errorMessage}
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
                                                error={validationResponse.fecha}
                                                helperText={formState.fecha.errorMessage}
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
                                                error={validationResponse.hora}
                                                helperText={formState.hora.errorMessage}
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
                                    error={validationResponse.cantidad}
                                    helperText={formState.cantidad.errorMessage}
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