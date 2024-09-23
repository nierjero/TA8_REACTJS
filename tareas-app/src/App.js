import React, { useState } from 'react';

function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);

  const agregarTarea = () => {
    if (tarea.trim()) {
      setListaTareas([...listaTareas, tarea]);
      setTarea(''); 
    }
  };

  const borrarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_, i) => i !== index);
    setListaTareas(nuevasTareas);
  };

  const iniciarEdicion = (index) => {
    setTarea(listaTareas[index]);
    setEditandoIndex(index);
  };

  const guardarEdicion = () => {
    const nuevasTareas = [...listaTareas];
    nuevasTareas[editandoIndex] = tarea; 
    setListaTareas(nuevasTareas);
    setTarea('');
    setEditandoIndex(null); 
  };

  return (
    <div style={styles.container}>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        style={styles.input}
        placeholder="Añadir nueva tarea"
      />
      <button onClick={editandoIndex !== null ? guardarEdicion : agregarTarea} style={styles.button}>
        {editandoIndex !== null ? 'Guardar Edición' : 'Agregar Tarea'}
      </button>
      <ul style={styles.lista}>
        {listaTareas.map((tarea, index) => (
          <li key={index} style={styles.item}>
            {tarea}
            <button onClick={() => iniciarEdicion(index)} style={styles.botonEditar}>Editar</button>
            <button onClick={() => borrarTarea(index)} style={styles.botonBorrar}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    width: '300px',
    margin: 'auto',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
  },
  button: {
    padding: '10px',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  lista: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '5px',
    borderRadius: '5px',
  },
  botonEditar: {
    marginLeft: '10px',
    color: 'blue',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
  },
  botonBorrar: {
    marginLeft: '10px',
    color: 'red',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
  },
};

export default App;



