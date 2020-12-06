import Swal from 'sweetalert2';


import { types }  from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { uiFinishedLoading, uiStartLoading } from './ui';


// Primer funcion asincrona, usando redux thunk para control de peticiones asincronas
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading()); // Desabilitamos el boton al realizar la peticion asincrona para que el usuario no clicke a lo pendejo
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            console.log(user);
            dispatch(uiFinishedLoading()); // si entro al then significa que tuvo exito y le volvemos a habilitar el boton
            dispatch(login(user.uid, user.displayName, user.email));
        })
        .catch((error) => {
            dispatch(uiFinishedLoading());
            console.log(error);
            Swal.fire('Error', error.message, 'error')
        });
        
    }
}

// Esta accion login ya manda la data a usar en el reducer, en conclusion esta funcion es llamada por medio del reducer en el login
export const login = (uid, displayName, displayEmail) =>  ({
        type: types.login,
        payload: {
        uid:uid,
        displayName:displayName,
        displayEmail:displayEmail
    }});

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => { // Si la promesa tuvo exito que ejecute el reducer ya que al retornar el user ya deja de ser asincrona
            dispatch(login(user.uid, user.email, user.displayName));// disparamos la accion de login funcion pura y sincrona
        });
    }
}

//  Funcion asincrona para registrar un usuario en firebase
export const registerWithEmailPassword = (email, password, name) => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            async ({ user }) => { // Modificamos y mandamos el displayName con el nombre
                await user.updateProfile({displayName: name})
                console.log(user);

                // Disparamos para actualizar el state auth con los valore { uid: valor, user: valor, email: valor }
                dispatch(login(user.uid, user.displayName, user.email));
        })
        .catch((error) => {
            console.log(error);
            Swal.fire('Error', error.message, 'error')
        });
    }
}

export const logOutFirebase = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logOut());
    }
}

export const logOut = () => ({
    type: types.logout
})
