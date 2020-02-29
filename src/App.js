import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg'
import CreateTodo from "./component/CreateTodo";
import  EditTodo from "./component/EditTodo";
import TodosList from "./component/TodosList";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="#">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
          <Link to="/" className="navbar-brand">MERN-Stack Todo Application</Link> 
          <div className="collapse navbar-collapse"></div>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/"className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}
export default App;