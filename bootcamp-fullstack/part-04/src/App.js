import React, { useState } from 'react';
import { Note } from './components/Note';
import { data } from './data/data';

export const App = () => {
  const [ notes, setNotes ] = useState(data);
  const [ newNote, setNewNote ] = useState('');
  const [ showNotesByImportant, setShowNotesByImportant ] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
    console.log(newNote);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('crear nota', newNote);

    const noteToAdd = {
      id: (notes.length + 1),
      content: newNote,
      date: new Date().toISOString(),
      important: false
    };

    setNotes([noteToAdd,...notes]);
    setNewNote('');
  }

  const handleShowClick = () => {
    setShowNotesByImportant(!showNotesByImportant);
  }

  return (
    <>
      <h2>Clase 4 BootCamp, Renderizado de elementos y Formularios</h2> 
      <hr/>

      <button
        onClick={  
          handleShowClick
        }
      >
        <small>
          {
            ( showNotesByImportant === true )
            ?
              'Show Important Notes'
            :
              'Show All Notes'

          }
        </small>
      </button>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          value={ newNote }
          onChange={ handleChange }
        />
        <button 
          type="submit"
        >
          Add Note
        </button>
      </form>
      {
        (notes.length === 0) 
        ?
          <h2>No hay notas disponibles</h2>
        :
          notes
          .filter(
            (note) => {
              if (showNotesByImportant === true) {
                return true;
              } else {
                return note.important === true;
              }
            }
          )
          .map((note) => {
            return <Note { ...note } key={ note.id } />
          })
      }
    </>
  )
}
