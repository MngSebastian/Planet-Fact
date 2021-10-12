import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Mercury/Home';
import Venus from './Components/Venus/Venus';
import Earth from './Components/Earth/Earth';
import Mars from './Components/Mars/Mars';
import Jupiter from './Components/Jupiter/Jupiter';
import Uranus from './Components/Uranus/Uranus';
import Saturn from './Components/Saturn/Saturn';
import Neptune from './Components/Neptune/Neptune';
import MercuryInternal from './Components/Mercury/MercuryInternal'
import MercuryGeology from './Components/Mercury/MercuryGeology'
import VenusInternal from './Components/Venus/VenusInternal'
import VenusGeology from './Components/Venus/VenusGeology'
import EarthInternal from './Components/Earth/EarthInternal'
import EarthGeology from './Components/Earth/EarthGeology'
import MarsInternal from './Components/Mars/MarsInternal'
import MarsGeology from './Components/Mars/MarsGeology'
import JupiterInternal from './Components/Jupiter/JupiterInternal'
import JupiterGeology from './Components/Jupiter/JupiterGeology'
import SaturnInternal from './Components/Saturn/SaturnInternal'
import SaturnGeology from './Components/Saturn/SaturnGeology'
import UranusInternal from './Components/Uranus/UranusInternal'
import UranusGeology from './Components/Uranus/UranusGeology'
import NeptuneInternal from './Components/Neptune/NeptuneInternal'
import NeptuneGeology from './Components/Neptune/NeptuneGeology'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Switch>
          <Route path="/neptune" component={Neptune}></Route>
          <Route path="/neptune-internal" component={NeptuneInternal}></Route>
          <Route path="/neptune-geology" component={NeptuneGeology}></Route>

          <Route path="/uranus" component={Uranus}></Route>
          <Route path="/uranus-internal" component={UranusInternal}></Route>
          <Route path="/uranus-geology" component={UranusGeology}></Route>



          <Route path="/saturn" component={Saturn}></Route>
          <Route path="/saturn-internal" component={SaturnInternal}></Route>
          <Route path="/saturn-geology" component={SaturnGeology}></Route>

          <Route path="/jupiter" component={Jupiter}></Route>
          <Route path="/jupiter-internal" component={JupiterInternal}></Route>
          <Route path="/jupiter-geology" component={JupiterGeology}></Route>


          <Route path="/mars" component={Mars}></Route>
          <Route path="/mars-internal" component={MarsInternal}></Route>
          <Route path="/mars-geology" component={MarsGeology}></Route>

          <Route path="/earth" component={Earth}></Route>
          <Route path="/earth-internal" component={EarthInternal}></Route>
          <Route path="/earth-geology" component={EarthGeology}></Route>




          <Route path="/venus" component={Venus}></Route>
          <Route path="/venus-internal" component={VenusInternal}></Route>
          <Route path="/venus-geology" component={VenusGeology}></Route>


          <Route path="/mercury-internal" component={MercuryInternal}></Route>
          <Route path="/mercury-geology" component={MercuryGeology}></Route>





          <Route path="/" component={Home}></Route>
        </Switch>


        \
        ]
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path='/venus' component='Venus' /> */}

      </div>
    </Router>

  );
}

export default App;
