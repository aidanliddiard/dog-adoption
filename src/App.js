import Home from './Views/DogList';
import DogDetail from './Views/DogDetail';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewDogPage from './Views/NewDogPage';
import EditDogPage from './Views/EditDogPage';
import { getUser } from './services/users';
import { useState } from 'react';
import SignInPage from './Views/SignInPage';
import Header from './components/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  console.log(currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Adopt a Dog!</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignInPage setCurrentUser={setCurrentUser} />
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
