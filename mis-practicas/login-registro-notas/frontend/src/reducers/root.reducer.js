import { combineReducers } from 'redux';
import { noteReducer } from './note.reducer';

export const rootReducer = combineReducers(
    noteReducer
);