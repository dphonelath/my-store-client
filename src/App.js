import React from "react"
import "./App.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Component imports
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import ProductsList from "./components/ProductsList"

function App() {
  return (
    <Router>
      <Route path="/" component={Navigation} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={ProductsList} />
      </Switch>
    </Router>
  )
}

export default App