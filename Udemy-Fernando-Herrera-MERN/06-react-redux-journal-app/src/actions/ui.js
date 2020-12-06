import { types } from '../types/types';

export const setErrorAction = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeErrorAction = () => ({
    type: types.uiRemoveError
});

export const uiStartLoading = () => ({
    type: types.uiStartLoading
})

export const uiFinishedLoading = () => ({
    type:  types.uiFinishLoading
})