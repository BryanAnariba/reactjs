import  React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { NoteReducer } from './reducers/NoteReducer';

const store = createStore(NoteReducer);

store.dispatch({
    type: '@note/add',
    payload: {
        _id: 1,
        content: 'Me encantan las clases de midudev',
        important: true
    }
});

store.dispatch({
    type: '@note/add',
    payload: {
        _id: 2,
        content: 'Me encantan las clases de midudev, pero tengo hambre',
        important: true
    }
});

const App = () => {
    const notes = store.getState();
    return (
        <>
            {
                notes.map((note) => {
                    return <li key={ note._id }>
                        { note.content } - <strong>{ (note.important === true) ? 'Important' : 'Not Important'}</strong>
                    </li>
                })
            }
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