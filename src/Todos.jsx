import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import TodoCard from './TodoCard';

const Todos = () => {
    const [todos, setTodos] = useState(); 

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    }, []);

    console.log(todos);
    return (
    <>
       { todos ?
        (
            <div style={{display: "flex", flexWrap: "wrap" }}>
                {todos.slice(0, 10).map((todo) => (
                    <TodoCard todo={todo} />
                ))}
            </div>
            ) : ( 
            <Spinner animation="border" variant="dark"/>
            )}
    </>
    );
};
export default Todos;