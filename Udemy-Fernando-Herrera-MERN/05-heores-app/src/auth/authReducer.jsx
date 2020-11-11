import { types } from "../types/types";

export const authReducer = (state={}, action) => {
    switch (action.type) {

        // Si esta logueado, que mande el state con el contenido sieguiente, {nombre:"Bryan",email:"bryan@gmail.com",logged:true}
        case types.login: 
            return {
                ...action.payload,
                logged: true
            }
        
        // Si no esta logueado, que mande el state con el contenido sieguiente, {logged:false}
        case types.logout:
            return {
                user:'',
                email:'',
                logged: false
            }

        // Por default si no cae a ningun case que retorne el state {}
        default:
            return state;
    }
}