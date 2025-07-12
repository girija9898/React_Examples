
import { useDispatch } from "react-redux";
import { todoStatusChanged, deleteTodo } from "./redux/todoSlice";

export default function ListItem ({todo}) {
    let dispatch = useDispatch();
    const statusChanged = (e) => {
        dispatch(todoStatusChanged({id: todo.id, complete: e.target.checked}));
    }
    const deleteItem = () => {
        dispatch(deleteTodo({id: todo.id}));
    }
    return(
        <li>
            <input type="checkbox" checked={todo.complete} onChange={statusChanged} /> &nbsp;&nbsp;
            {todo.todoName} &nbsp;&nbsp;
            <button onClick={deleteItem}>X</button> &nbsp;&nbsp;
        </li>
    )
}