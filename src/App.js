import Navbar from './Components/Navbar'
import { Component } from 'react'
import Category from './Components/Category/Category'
import {BrowserRouter as Router} from 'react-router-dom'
import {fetchByProductTag, fetchByProductType, fetchByProductTypeAndTag} from './apiCalls'


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  render() {
  return (
    <Router>
      <Navbar />
      <Category />
    </Router>
  );
}
}

export default App;
