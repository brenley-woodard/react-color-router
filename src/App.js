import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Nav from './components/Nav/Nav';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/237/184/139" />
        </Route>
        <Route exact path="/:r/:g/:b" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
