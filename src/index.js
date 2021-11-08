import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./screens/home/Home";

ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  </BrowserRouter>,document.getElementById('root'));