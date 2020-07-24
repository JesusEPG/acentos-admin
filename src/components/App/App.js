import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../../views/Login/Login';
import NotFound from '../../views/NotFound/NotFound';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#cfe8fc', height: '100vh', width: '100vw' }}>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
