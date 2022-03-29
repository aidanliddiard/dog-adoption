import Home from './Views/DogList';
import DogDetail from './Views/DogDetail';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewDogPage from './Views/NewDogPage';
import EditDogPage from './Views/EditDogPage';

function App() {
  return (
    <div className="App">
      <h1>Adopt a Dog!</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dog/:id">
            <DogDetail />
          </Route>
          <Route path="/new-dog">
            <NewDogPage />
          </Route>
          <Route path="/dog/:id/edit">
            <EditDogPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
