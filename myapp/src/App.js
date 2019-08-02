import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import TodoItem from './component/TodoItem';

function App() {
  return (
      <div className="jumbotron jumbotron-fluid" style = {{margintop: "100px"}}>
        <div className="container">
          <h1 className="display-4">Funny Screen</h1>
          <p className="lead">A list of pages to be looped.</p>
          <TodoItem show={'todo'}></TodoItem>
        </div>
      </div>
  );
}

export default App;
