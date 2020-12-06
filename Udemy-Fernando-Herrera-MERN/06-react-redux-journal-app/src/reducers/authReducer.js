import { types } from "../types/types";
/*
    Vision del reducer

    state
    {
        uid: 'asdkagdjgdha',
        name: 'bryan',
        email: 'saariel115@gmail.com'
    }
*/

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.displayEmail
            };
        case types.logout:
            return {

            };
        default:
            return state;
    }
}