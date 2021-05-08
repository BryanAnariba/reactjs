import deepFreeze from 'deep-freeze';
import { NoteReducer } from './NoteReducer';

describe('NoteReducer', () => {
    test('Return a new state with toggle important', () => {
        const state = [
            {
                _id: 3,
                content: 'Note 3',
                important: false
            },
            {
                _id: 4,
                content: 'Note 4',
                important: false
            },
            {
                _id: 5,
                content: 'Note 5',
                important: true
            }
        ];

        const action = {
            type: '@note/toggle_important',
            payload: {
                _id: 3
            }
        };

        // Deep freeze dev dependency, para verificar que no estemos mutanto el state
        deepFreeze(state);
        const newState = NoteReducer(state, action);

        // Se esperara al final del test que el tamanio del array sea de 3
        expect(newState).toHaveLength(3);

        // Que la nota 0 la cual veremos el id sea igual a la del array de arriba
        expect(newState).toContainEqual(state[1]);

        // Que el nuevo estado modifique la importancia en true
        expect(newState).toContainEqual({
            _id: 3,
            content: 'Note 3',
            important: true
        });
    });
});