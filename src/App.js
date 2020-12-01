import { Switch, Route } from 'react-router-dom';
import './App.css';

/* Basic Component Test */
import Home from './components/Home';
import TestPage from './components/Testpage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/test"><TestPage /></Route>
        <Route exact path="/"><Home testing="cat" /></Route>
      </Switch>
    </div>
  );
}

export default App;
