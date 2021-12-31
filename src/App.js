import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ContextAPI from './ContextAPI/ContextAPI';

function App() {


  return (
    <ContextAPI>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/courses">
              <Home></Home>
            </Route>

            <Route exact path="/courses">
              <Home></Home>
            </Route>

            <Route exact path="/courses">
              <Home></Home>
            </Route>

            <Route exact path="/about_us">
              <Home></Home>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </ContextAPI>
  );
}

export default App;
