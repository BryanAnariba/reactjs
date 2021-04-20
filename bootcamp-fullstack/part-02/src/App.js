import { Courses } from './components/Courses';
import { MiComponente } from './components/MiComponente';

function App() {
  const a = 1;
  const b = 2;
  const suma = a + b;

  const data = [
    {
      courseName: 'Excel',
      part: 'Conditionals',
      excercice: 1
    },
    {
      courseName: 'React',
      part: 'Context Excersise',
      excercice: 10
    },
    {
      courseName: 'Angular',
      part: 'Best Practices using services',
      excercice: 1
    },
    {
      courseName: 'Laravel',
      part: 'Build a first api with Laravel & Mysql',
      excercice: 15
    }
  ];
  return (
    <>
      <h2>Suma de los numeros: { suma }</h2>
      <hr/>
      <MiComponente
        data = 
          {
            {
              nombre: 'Bryan Ariel',
              apellido: 'Sanchez Anariba',
              edad: 24,
              carrera: 'Systems Enginner',
              color: '#73E5FD' 
            }
          }
        />

        <h2>Courses List: </h2>
        {
          data.map( ( course ) => {
            return <Courses course = { course } />
          })
        }
    </>
  );
}

export default App;
