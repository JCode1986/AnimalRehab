import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import axios from 'axios';

import Home from './components/Home/Home';
import Dose from './components/Dose/Dose';
import Medicine from './components/Medicine/Medicine';
import AnimalProfile from './components/AnimalProfile/AnimalProfile';
import Animals from './components/Animals/Animals';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import Header from './components/Header/Header';

=======

import AnimalDetails from './components/AnimalDetails/AnimalDetails'
>>>>>>> dd0979f82dc289e3d10cf0aa1b1fcc03ffb9a0ce
import './App.scss';
import './components/Home/Home.scss';
import './components/Dose/Dose.scss';
import './components/Medicine/Medicine.scss';
import './components/Animals/Animals.scss';
import './components/Footer/Footer.scss';
<<<<<<< HEAD
import './components/Header/Header.scss';
=======
>>>>>>> dd0979f82dc289e3d10cf0aa1b1fcc03ffb9a0ce
import './components/LogIn/LogIn.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
      medicine: [],
      isLoggedIn: false
    };

    this.animalProfile = this.animalProfile.bind(this);
  }

  async componentDidMount() {
    const animalsResponse = await axios.get('/data/animals.json');
    const medicineResponse = await axios.get('/data/medicine.json');

    this.setState({
      animals: animalsResponse.data,
      medicine: medicineResponse.data
    });
  }

  animalProfile() {
    console.log('Animal profile');
  }

  async componentDidMount() {
    const animalsResponse = await axios.get('/data/animals.json');
    const medicineResponse = await axios.get('/data/medicine.json');

    this.setState({
      animals: animalsResponse.data,
      medicine: medicineResponse.data
    });
  }

  render() {
    return (
      <Router>
        <div>
            <Header />
            <Nav />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/dose">
                  <Dose />
                </Route>
                <Route path="/medicine">
                  <Medicine medicine={this.state.medicine} />
                </Route>
                <Route exact path="/animals">
                  <Animals animals={this.state.animals} />
                </Route>
                <Route path="/animals/:aid">
                  <AnimalProfile animals={this.state.animals} />
                </Route>
                <Route path="/animals/:aid" render={this.animalProfile} />
                <Route path="/log">
                  <LogIn />
                </Route>
              </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }
}

function Nav(props) {
  return (
      <nav>
          <ul id="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dose">Dose</NavLink></li>
          <li><NavLink to="/medicine">Medicine</NavLink></li>
          <li><NavLink to="/animals">Animals</NavLink></li>
          <li><NavLink to="/log">Log in</NavLink></li>
          </ul>
      </nav>
  )
}

export default App;