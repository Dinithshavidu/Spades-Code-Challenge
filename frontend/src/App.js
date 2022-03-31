import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodosList from "./components/TodosList";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import Login from "./components/Login";
import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Nav />
      <div className="container border border-secondary" style={{ bprder:"#000"}}>
      
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <footer className="navbar navbar-dark bg-primary mb-3" >
        <a style={{ color:"#fff"}}
          href="https://dinithshavidu.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' : dinith shavindu '}
         
        </a>
      </footer>
      </div>
      
    </Router>
  );
}

export default App;
