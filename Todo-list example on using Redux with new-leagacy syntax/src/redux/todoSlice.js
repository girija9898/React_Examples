
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filterType: "All",
    list: []   
}

let id = 105;

const todosSlice = createSlice({
    name: "todos",
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state, action) => {
            // state.list = [...state.list, {id: id++, todoName: action?.payload?.todoName, complete: false}];
            state.list.push({
                id: id++,
                todoName: action?.payload?.todoName,
                complete: false
            });
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((element) => {
                return element.id !== action?.payload?.id;
            });
        },
        todoStatusChanged: (state, action) => {
            state.list = state.list.map((element) => {
                return element.id === action?.payload?.id ? {...element, complete: action?.payload?.complete} : element;
            });
        },
        filterChanged: (state, action) => {
            state.filterType = action.payload.filterType;
        }
    }
});

export const todosReducer = todosSlice.reducer;
export const {addTodo, deleteTodo, todoStatusChanged, filterChanged} = todosSlice.actions;

/* 
STORE: {
        todos: { //slice name
            filterType: "All",
            list: [{id: 100, todoName: "Learn React", complete: false}]
        }
    }
    ACTIONS:
        * {type: todos/addTodo, taskName: "Todo input text"},
        * {type: todos/deleteTodo, id: todoId},
        * {type: todos/todoStatusChanged, id: todoId, complete: true/false}
        * {type: todos/filterChanged, filterType: All/Open/Complete}
*/
