import React , { Fragment } from 'react';
import { Button  , IconButton , Typography} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SaveIcon from '@material-ui/icons/Save';
const Examples = () => {
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
        </Fragment>
    );
}
export default Examples;