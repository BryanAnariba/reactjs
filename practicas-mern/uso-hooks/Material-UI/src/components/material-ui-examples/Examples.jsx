import React , { Fragment } from 'react';
import { Button  , IconButton , Typography} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles , ThemeProvider} from '@material-ui/core/Styles';
import Theme  from '../../temas-configurados';


const useStyle = makeStyles({
    botonPersonalizado: {
        background: 'linear-gradient(45deg , #FE6B8B 30% , #FF8E53 90%)' ,
        border: '2px solid blue' ,
        borderRadius: 5 ,
        boxShadow: '0 3px 5px 2px rgba(255,105,135,0.3)' ,
        color: 'white' ,
        height: 50 ,
        padding: '0 30px'
    } , 
    btn_Log: {
        borderRadius: 12 ,
        background: 'rgba(0,36,132)' ,
        color: 'white' ,
        boxShadow: '0 3px 5px 2px rgba(255,105,135,0.3)'  ,
        padding: '0 30px' ,
        height: 50 
    }
})
const Examples = () => {
    const classes = useStyle();
    return ( 
        <Fragment>
            <h2>--------------------------------------Botones e iconos--------------------------------------</h2>
            { /*Boton Basico con Material UI*/ }
            <Button variant="outlined" color="secondary">
            Boton con Material UI
            </Button>

            <p></p>

            { /*Iconos en MUI*/ }
            <DeleteForeverSharpIcon color="secondary"/>

            <p></p>

            { /* Boton con un icon dentro*/ }
            <Button variant="contained" color="secondary">
                <DeleteForeverSharpIcon />
            </Button>
            
            <p></p>

            { /*Botones final*/ }
            <Button variant="contained" color="primary" startIcon = { <SaveIcon/> }>
                Guardar Usuario
            </Button>

            <p></p>
            <Button variant="contained" color="secondary" startIcon = { <DeleteForeverSharpIcon /> }>
                Eliminar Usuario
            </Button>

            <p></p>

            <Button variant="contained" color="primary" endIcon = { <SaveIcon/> }>
                Guardar Usuario
            </Button>

            <p></p>
            <Button variant="contained" color="secondary" endIcon = { <DeleteForeverSharpIcon /> }>
                Eliminar Usuario
            </Button>

            <p>Boton icono</p>
            <IconButton variant="contained" color="secondary">
                <DeleteForeverSharpIcon /> 
            </IconButton>

            <h2>---------------------------------------Typografias---------------------------------------</h2>
            <Typography variant="h1" color="initial">Este es un titulo h 1</Typography>
            <Typography variant="h6" color="secondary" align="center">Este es un titulo h6</Typography>
            <Typography variant="h6" color="secondary" align="left" paragraph>Este es un titulo h6</Typography>
            <Typography variant="h6" color="secondary" align="right">Este es un titulo h6</Typography>

            {  /* Haciedo estilos css en un boton */ }
            <p></p>
            
            <h2>Estilos Personalizados con CSS</h2>
            <Button className={ classes.botonPersonalizado }>
                Boton con estilos hechos en css
            </Button>

            <Button className={ classes.botonPersonalizado }>
                Boton Personalizado 2
            </Button>
            <Button className={ classes.btn_Log }>
                Boton Personalizado 2
            </Button>

            <p></p>
            <h2>Globals ---- hacer efecto :hover a botones con Material UI</h2>
            <ThemeProvider theme={ Theme }>
                <Button variant="contained" color="primary">
                    Boton Primario
                </Button>

                <Button variant="contained" color="secondary">
                    Boton Secundario
                </Button>
            </ThemeProvider>
        </Fragment>
    );
}
export default Examples;