import Navbar from './Components/Navbar'
import ProductContainer from './Components/ProductContainer'
import { Component, useEffect } from 'react'
import CategoryContainer from './Components/Category/Category'
import {BrowserRouter as Router} from 'react-router-dom'
import {fetchAllProducts } from '/Users/mayakappen/turing/3module/happy-skin/src/apiCalls'




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
}

componentDidMount() {
  fetchAllProducts()
    .then(data => this.setState({ ... this.state, products: data }))
    .then(error => console.log(error))  
}
render() {
  return (
    <Router>
      <Navbar handler={this.handleType}/>
     <ProductContainer props={this.state.category} />
      <CategoryContainer />
    </Router>
  );
}
}

export default App;
