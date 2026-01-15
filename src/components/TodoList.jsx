
import { useState, useEffect } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import svg from '../assets/delete_red.svg';
import svg2 from '../assets/lapiz_green.svg';

//Funcion principal
const TodoList = () => {
    // Tareas
    const [todoArray, setTodoArray] = useState([])

    // Formulario
    const [formData, setFormData] = useState({ titulo: "" })
    const [todoEdit, setTodoEdit] = useState(null)

    // Cargar tareas
    useEffect(() => {
        const data = window.localStorage.getItem("todos")
        if (data !== null) setTodoArray(JSON.parse(data))

    }, [])

    // Guardar en localStorage
    useEffect(() => {
        const data = JSON.stringify(todoArray)
        window.localStorage.setItem("todos", data)
    }, [todoArray])

    // Contador de tareas pendientes
    useEffect(() => {
        const newTodo = todoArray.filter(todo => todo.isComplete === false)
        document.title = `Tienes ${newTodo.length} tareas pendientes`

    }, [todoArray])

    // Enter para agregar tarea

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTodo();
        }
    }

    // Cambiar valor del input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Agregar y editar tarea
    const addTodo = () => {

        if (todoEdit != null) {
            const newTodo = [...todoArray]
            let todo = newTodo.find((todo) => todo.id === todoEdit)
            todo.titulo = formData.titulo
            setTodoArray(newTodo)
            setTodoEdit(null)
            setFormData({ titulo: "" })

        } else {
            if (formData.titulo != "") {
                const newTodo = formData
                newTodo.id = Date.now()
                newTodo.isComplete = false

                setTodoArray([...todoArray, newTodo])
                setFormData({ titulo: "" })
            }
        }
    }

    // Eliminar Tarea
    const deleteTodo = (id) => {
        const newTodoArray = todoArray.filter((todo) => todo.id !== id)
        setTodoArray(newTodoArray)
    }
    //Marcar Tarea completada
    const toggleTodo = (id) => {
        const newTodo = [...todoArray]
        let todo = newTodo.find((todo) => todo.id === id)
        todo.isComplete = !todo.isComplete
        setTodoArray(newTodo)
    }
    //Eliminar Tareas Completadas
    const deleteCompletedTodos = () => {
        const newTodo = todoArray.filter(todo => todo.isComplete === false)
        setTodoArray(newTodo)
    }

    //Editar Tarea
    const editTodo = (id) => {
        const todo = todoArray.find((todo) => todo.id === id)
        setFormData({ titulo: todo.titulo })
        setTodoEdit(id)
    }

    return (
        <div className='todo-list'>

            <div className='input-div'>
                <input type="text" name='titulo' placeholder='Añadir Tarea' value={formData.titulo} onChange={handleChange} onKeyDown={onKeyDown} autocomplete="off" />

                <PrimaryButton className="btn4" text="Añadir" onMyClick={addTodo} />
            </div>
            <div>
                <PrimaryButton className="btn" text="Eliminar Tareas Completadas" onMyClick={deleteCompletedTodos} />
            </div>

            {
                todoArray.map((todo) => (
                    <div key={todo.id} className='lista-dinamica'>
                        <div className='checkbox'>
                            <input className="input-checkbox" type="checkbox" checked={todo.isComplete} onChange={() => toggleTodo(todo.id)} />
                            <p className="todo-p">
                                {todo.titulo}
                            </p>
                        </div>
                        <div className='checkbox-button'>
                            {todo.isComplete && <span className='complited-text'>Completada</span>}
                            {!todo.isComplete && <span className='unComplited-text'>No Completada</span>}

                            <PrimaryButton className='edit-button' img={<img src={svg2} alt="Editar" />} onMyClick={() => editTodo(todo.id)} />
                            <PrimaryButton className='delete-button' img={<img src={svg} alt="Eliminar" />} onMyClick={() => deleteTodo(todo.id)} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList
