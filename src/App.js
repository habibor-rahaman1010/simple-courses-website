import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ContextAPI from './ContextAPI/ContextAPI';
import Courses from './Components/Courses/Courses';
import BestSeller from './Components/BestSeller/BestSeller';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Details from './Components/Courses/Details/Details';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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

            <PrivateRoute exact path="/our/courses">
              <Courses></Courses>
            </PrivateRoute>

            <PrivateRoute exact path="/our/courses/details/:id">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute exact path="/our/courses/best_seller">
              <BestSeller></BestSeller>
            </PrivateRoute>

            <Route exact path="/our/contact_us">
              <Contact></Contact>
            </Route>

            <Route exact path="/our/about_us">
              <About></About>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/registration'>
              <Register></Register>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </ContextAPI>
  );
}

export default App;
