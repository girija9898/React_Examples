
import AddTodo from "./AddTodo"
import FiltersForTodos from "./FiltersForTodos"
import TodoList from "./TodoList"

export default function TodoListFiltersExample () {
    return(
        <>
            <h2>To-do list with Filters, Delete & Checked options using Latest Redux Syntax</h2> 
            <AddTodo />
            <FiltersForTodos />
            <TodoList />
        </>
    ) 
}



/*
* Create View (UI) - Components
* Design store and actions
    STORE: {
        todos: {
            filterType: "All",
            todos: [{id: 100, todoName: "Learn React", complete: false}]
        }
    }
    ACTIONS:
        * {type: todos/addTodo, taskName: "Todo input text"},
        * {type: todos/deleteTodo, id: todoId},
        * {type: todos/todoStatusChanged, id: todoId, complete: true/false}
        * {type: todos/filterChanged, filterType: All/Open/Complet}
* Create reducers with initial state - filterReducer function
* Create store - creating filterStore from configureStore
* Create action creators - filter, binding root component in Provider of react-redux
* Bind store to UI - using useSelector hook
* Test binding using redux devtools
* Dispatch actions and test the full functionality - using useDispatch()
*/