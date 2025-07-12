import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import todosStore from "./todo-list-with-redux/todosStore";
/* Method-1
ReactDOM.createRoot(document.getElementById("root")).render(<h1>Hello</h1>);
*/

/* Method-2
let rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(<App/>);
*/

/* Method-3 */

let rootNode = ReactDOM.createRoot(document.getElementById("root"));
rootNode.render(
   <Provider store={todosStore}>
      <App />
   </Provider>
);
