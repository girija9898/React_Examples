import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
/* Method-1
ReactDOM.createRoot(document.getElementById("root")).render(<h1>Hello</h1>);
*/

/* Method-2
let rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(<App/>);
*/

/* Method-3 */

let rootNode = ReactDOM.createRoot(document.getElementById('root'));
rootNode.render(
    
        <App/> 
    
);