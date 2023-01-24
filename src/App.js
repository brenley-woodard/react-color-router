import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/237/184/139" />
        </Route>
        <Route path="/:r/:g/:b" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
