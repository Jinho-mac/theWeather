import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './path/Detail';
import Home from './path/Home';
import News from './path/News';
import Weather from './path/Weather';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={Weather} />
      <Route exact path="/news" component={News} />
      <Route path="/news/:id" component={Detail} />
    </Router>
  );
};

export default App;