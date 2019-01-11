import React, { Component } from 'react'
import NavBar from './common/navbar'
import { Route } from 'react-router-dom'

import Restaurants from './pages/restaurants/components/restaurantsList'
import Menu from './pages/restaurants/components/menu'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path={this.props.match.path} component={Restaurants} />
        <Route path="/:id" component={Menu} />
      </div>
    );
  }
}

export default App
