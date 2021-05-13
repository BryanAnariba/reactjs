import  React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { NoteReducer, actionCreateNote, actionToggleImportant } from './reducers/NoteReducer';

const store = createStore(NoteReducer);

// store.dispatch({
//     type: '@note/add',
//     payload: {
//         _id: 1,
//         content: 'Me encantan las clases de midudev',
//         important: true
//     }
// });

// store.dispatch({
//     type: '@note/add',
//     payload: {
//         _id: 2,
//         content: 'Me encantan las clases de midudev, pero tengo hambre',
//         important: true
//     }
// });

const App = () => {
    const notes = store.getState();

    const addNote = (event) => {
        event.preventDefault();
        console.log('Works');
        const { target } = event;
        const content = target.content.value;
        target.content.value = '';
        store.dispatch(actionCreateNote(content));
    }

    const changeImportant = (_id) => {
        store.dispatch(actionToggleImportant(_id));
    }
    return (
        <>
            {
                notes.map((note) => {
                    return <li key={ note._id } onClick={ () => changeImportant(note._id) }>
                        { note.content } - <strong>{ (note.important === true) ? 'Important' : 'Not Important'}</strong>
                    </li>
                })
            }
            <form onSubmit={ addNote }>
                <input 
                    type="text" 
                    placeholder="Write a note"
                    name="content"
                    id="content"
                />
                <button type="submit">
                    Add Note
                </button>
            </form>
        </>
    )
}

const RenderApp = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

RenderApp()
store.subscribe(RenderApp)
export default App;