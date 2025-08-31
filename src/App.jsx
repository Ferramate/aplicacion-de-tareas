import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Tarea de ejemplo", editando: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;
    setTareas([
      ...tareas,
      { id: Date.now(), texto: nuevaTarea, editando: false },
    ]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) =>
    setTareas(tareas.filter((t) => t.id !== id));

  const editarTarea = (id) =>
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, editando: !t.editando } : t
      )
    );

  const actualizarTarea = (id, nuevoTexto) =>
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      )
    );

  return (
    <div className="aplicacion-tareas">
      <h1>Mis Tareas</h1>
      <p>Aquí debajo puedes ver tus tareas</p>
      <img src="./logo-ferra.jpg" alt="Logo de Ferracode" />

      <div className="tareas-lista">
        {tareas.map((tarea) => (
          <div key={tarea.id} className="tarea">
            {tarea.editando ? (
              <input
                type="text"
                value={tarea.texto}
                onChange={(e) =>
                  actualizarTarea(tarea.id, e.target.value)
                }
              />
            ) : (
              <input type="text" value={tarea.texto} readOnly />
            )}

            <button onClick={() => editarTarea(tarea.id)}>
              {tarea.editando ? "Guardar" : "Editar"}
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={agregarTarea} className="nueva-tarea-form">
        <input
          type="text"
          value={nuevaTarea}
          placeholder="Nueva tarea..."
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default App;