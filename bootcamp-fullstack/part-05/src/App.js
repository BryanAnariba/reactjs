import React, { useState, useEffect } from 'react';
import { Note } from './components/Note';
import { getAllNotes, saveNote } from './services/notes.service';

export const App = () => {
  
  // States
  const [ notes, setNotes ] = useState([]);
  const [ newNote, setNewNote ] = useState({
    title: '',
    body: ''
  });

  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  const handleChange = (event) => {
    setNewNote({ ...newNote, [event.target.name]: event.target.value });
    console.log(newNote);
  }

  // CRUD Operations
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('crear nota', newNote);

    const noteToAdd = {
      title: newNote.title,
      body: newNote.body,
      userId: 1
    };

    saveNote(noteToAdd)
    .then((newNote) => {
      // actualiza estado
      setNotes( (previusNotes) => [ newNote, ...previusNotes ]);
      setError(false);
    })
    .catch((error) => {
      console.error(error);
      setError(true);
    });

    // Reseteando formulario
    setNewNote({
      title: '',
      body: ''
    });
  }

  useEffect( () => {
    console.log('Se disparo el efecto');
    setLoading(true);

    getAllNotes()
    .then(data => {
      setNotes(data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
    });

  }, [  ] ); // El array de dependencias, si pones una, el efecto se ejecutara cuando dicho parametro en el arreglo se actualice

  return (
    <>
      <h2>Clase 4 BootCamp, Fetching y Mutación de Datos en React con el hook useEffect</h2> 
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          name="title"
          value={ newNote.title }
          placeholder="title"
          onChange={ handleChange }
        />
        <input 
          type="text"
          name="body"
          value={ newNote.body }
          placeholder="Description"
          onChange={ handleChange }
        />
        <button 
          type="submit"
        >
          Add Note
        </button>
      </form>
      <hr/>
      <h2>My Posts</h2>
      {
        (loading === true) 
        ?
          <h2>Loading...</h2>
        :
          notes.map((note) => {
            return <Note { ...note } key={ note.id } />
          })
      }

      {
        (error === true)
        ?
        <small>
          La API no responde
        </small>
        :
        <small>
          Peticion a la API realizada correctamente
        </small>
      }
    </>
  )
}
