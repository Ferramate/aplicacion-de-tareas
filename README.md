# 📝 Lista de Tareas - React

Una aplicación sencilla y funcional para gestionar tus tareas diarias, desarrollada con React y diseñada para mantener tu productividad organizada.

## ✨ Características

- ➕ **Agregar tareas** - Crea nuevas tareas de forma rápida
- ✏️ **Editar tareas** - Modifica el texto de tus tareas existentes
- 🗑️ **Eliminar tareas** - Remueve tareas que ya no necesitas
- 💾 **Guardar cambios** - Sistema de edición inline con confirmación
- 📱 **Interfaz simple** - Diseño limpio y fácil de usar

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para interfaces de usuario
- **React Hooks** - useState para el manejo del estado
- **CSS** - Estilos personalizados
- **JavaScript ES6+** - Funciones modernas de JavaScript

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone https://github.com/tuusuario/lista-tareas-react.git
   cd lista-tareas-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:3000`

## 📖 Cómo usar la aplicación

### Agregar una nueva tarea
1. Escribe el texto de tu tarea en el campo "Nueva tarea..."
2. Haz clic en "Agregar" o presiona Enter
3. La tarea aparecerá en la lista

### Editar una tarea existente
1. Haz clic en el botón "Editar" junto a la tarea que quieres modificar
2. El campo de texto se volverá editable
3. Modifica el texto según necesites
4. Haz clic en "Guardar" para confirmar los cambios

### Eliminar una tarea
1. Haz clic en el botón "Eliminar" junto a la tarea que quieres remover
2. La tarea desaparecerá inmediatamente de la lista

## 🗂️ Estructura del Código

```
src/
├── App.js          # Componente principal con toda la lógica
├── App.css         # Estilos de la aplicación
└── index.js        # Punto de entrada de React
```

### Funciones principales

- `agregarTarea()` - Añade una nueva tarea a la lista
- `eliminarTarea(id)` - Remueve una tarea específica por ID
- `editarTarea(id)` - Activa/desactiva el modo de edición
- `actualizarTarea(id, nuevoTexto)` - Actualiza el contenido de una tarea

## 🎯 Funcionalidades del Código

### Estado de la aplicación
```javascript
const [tareas, setTareas] = useState([...])  // Lista de todas las tareas
const [nuevaTarea, setNuevaTarea] = useState("")  // Texto de la nueva tarea
```

### Estructura de una tarea
```javascript
{
  id: number,        // Identificador único (timestamp)
  texto: string,     // Contenido de la tarea
  editando: boolean  // Estado de edición
}
```

## 🎨 Personalización

### Estilos CSS
Los estilos se encuentran en `App.css` y puedes modificar:
- Colores de la interfaz
- Tamaños y fuentes
- Espaciado y layout
- Efectos hover y transiciones

### Agregar nuevas características
Puedes extender fácilmente la aplicación añadiendo:
- Fechas de vencimiento
- Categorías o etiquetas
- Filtros (completadas/pendientes)
- Almacenamiento local (localStorage)
- Animaciones

## 🖼️ Recursos incluidos

- `logo-ferra.jpg` - Logo de Ferracode mostrado en la aplicación

## 🔧 Estructura de Componentes

La aplicación utiliza un solo componente (`App`) que maneja:
- **Renderizado de lista** - Mapeo de tareas con condicionales para edición
- **Formulario de entrada** - Input controlado para nuevas tareas
- **Manejo de eventos** - onClick y onChange para interactividad
- **Estado local** - Gestión completa con React Hooks

## 💡 Conceptos de React Utilizados

- **Hooks (useState)** - Para el manejo del estado
- **Renderizado condicional** - Mostrar input editable o readonly
- **Listas y keys** - Renderizado eficiente de la lista de tareas
- **Event handling** - Manejo de eventos del formulario y botones
- **Controlled components** - Inputs controlados por el estado

## 🚀 Posibles Mejoras

- [ ] Persistencia de datos con localStorage
- [ ] Drag and drop para reordenar tareas
- [ ] Marcar tareas como completadas
- [ ] Filtros por estado
- [ ] Contador de tareas
- [ ] Validaciones mejoradas
- [ ] Animaciones de entrada/salida
- [ ] Responsive design
- [ ] Dark mode
- [ ] Exportar tareas

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ usando React

---

¿Tienes preguntas o sugerencias? ¡No dudes en crear un issue o contribuir al proyecto!