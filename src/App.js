import Navbar from './Components/Navbar'
import { Component, useEffect } from 'react'
import CategoryContainer from './Components/Category/Category'
import {BrowserRouter as Router} from 'react-router-dom'
import { fetchByProductTag, fetchByProductType, fetchByProductTypeAndTag } from '/Users/mayakappen/turing/3module/happy-skin/src/apiCalls'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      category: '',
      tag: ''
}
}

handleTag = event => {
  this.setState({tag: event.target.id})
}

  handleType = event => {
    this.setState({ category: event.target.id })
    fetchByProductType(this.state.category)
      .then(data => this.setState({ products: data }))
  }

  render() {
  return (
    <Router>
      <Navbar handler={this.handleType}/>
      <CategoryContainer />
    </Router>
  );
}
}

export default App;
