// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import ChatScreen from './components/ChatScreen';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={LoginScreen} />
          <Route path="/chat" render={() => <ChatScreen username="Usuário" />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
