
import { connect } from "react-redux";
import { addTodo } from "./redux/todoSlice";

function LegacyReduxConnect({filterType, todos, addRandomTodoFunction}) {
    // console.log("props: ", props);
    const addRandomTodo = () => {
        addRandomTodoFunction(`Random todo # ${Number(Math.round(Math.random() * 100))}`);
    }
    let filteredTodos = todos.filter((element) => {
        return filterType === "All" ? true : filterType === 'Complete' ? element.complete : !element.complete;
    });
    return(
        <>
            <h4>Legacy Redux Connect</h4>
            <p>Filter Type: {filterType} </p>
            <ul>
                {
                    filteredTodos.map(function(item) {
                        return <li key={item.id}>{item.todoName}</li>
                    })
                }
            </ul>
            <button onClick={addRandomTodo}>Add Random Todo</button>
        </>
    )
}

export default connect( // connect will connect the component to redux
    function mapStateToProps(state) {
        console.log("state: ", state)
        return { // these properties will get in the component as props
            filterType: state.todos.filterType,
            todos: state.todos.list
        }
    },
    function mapsDispatchToProps(dispatch) {
        return {
            addRandomTodoFunction: (text) => {
                dispatch(addTodo({todoName: text}));
            }
        }
    }
)(LegacyReduxConnect);