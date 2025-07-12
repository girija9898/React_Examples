
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import "./css/styles.css";

export default function TodoList () {

    const todos = useSelector(state => state.todos);
    const filterType = todos.filterType;
    let filteredTodos = todos.list.filter((element) => {
        return filterType === "All" ? true : filterType === 'Complete' ? element.complete : !element.complete;
    });
    return(
        <ul className="todo-list">
            {
                filteredTodos?.map(element => (
                    <ListItem key={element.id} todo={element} />
                ))
            }
        </ul>
    )
}


