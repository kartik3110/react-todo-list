import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


const setInitialState = () => {
    const allTodos = localStorage.getItem('todos')
    if (!allTodos)
        return []
    return JSON.parse(allTodos)
}

export default function TodoList() {
    const [todos, setTodos] = useState(setInitialState)

    //re render the list each time todos state variable changes.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleToggle = (i) => {
        const newTodos = todos.map(todo => {
            if (todo.id === i) {
                return { ...todo, completed: !todo.completed }
            }
            else return todo;
        })
        setTodos(newTodos)
    }

    const handleRemove = (id) => {
        setTodos(oldTodos => {
            return oldTodos.filter(todo => todo.id !== id)
        })
    }

    const addTodo = (newTask) => {
        setTodos(oldTodos => {
            return ([...oldTodos, { task: newTask, id: crypto.randomUUID(), completed: false }])
        })
    }

    return (
        <Box sx={{
            m: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'


        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {

                    return (
                        <TodoItem key={todo.id}
                            toggler={() => handleToggle(todo.id)}
                            todo={todo}
                            remover={() => { handleRemove(todo.id) }}
                        />
                    );
                })}
                <TodoForm todoAdder={addTodo} />
            </List>
        </Box>
    );
}


