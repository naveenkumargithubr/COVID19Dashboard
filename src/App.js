import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import AboutItem from './components/AboutItem'
import StateSpecificDetailsItemCard from './components/StateSpecificDetailsItemCard'
import VaccinationCard from './components/VaccinationCard'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/state/:stateCode"
      component={StateSpecificDetailsItemCard}
    />
    <Route exact path="/about" component={AboutItem} />
    <Route exact path="/vaccination" component={VaccinationCard} />
    <Route component={NotFoundRoute} />
  </Switch>
)

export default App
