import React from 'react';
import {useNavigate} from "react-router-dom";

const TodoCard = (props) => {
    const navigate = useNavigate();
    const {todo} = props;
    const { id, title, completed} = todo;
    return (
        <div style={{ 
            backgroundColor: "grey",
             margin: "10px", 
             padding: "10px", 
             width: "150px" 
             }}
             onClick={() => navigate(`/todo/${id}`)}
             >
            <h4> {title} </h4>
            <h6> {`Completed: ${completed}`} </h6>
        </div>
    );
};

export default TodoCard;