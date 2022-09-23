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
      filtered: [],
      category: '',
      tag: ''
}
}

handleTag = event => {
  this.setState({tag: event.target.id})
  if (this.state.filtered === []) {
    let filteredProducts = this.state.products.filter(product => product.tags.includes(event.target.id))
    return this.setState({ filtered: filteredProducts })
  }
  else {
    let filteredProducts = this.state.filtered.filter(product => product.tags.includes(event.target.id))
    return this.setState({ filtered: filteredProducts })
  }
}

handleType = event => {
  let filtered = this.state.products.filter(product => product.product_type === event.target.id)
    this.setState({ filtered: filtered, category: event.target.id})
}

componentDidMount() {
  fetchAllProducts()
    .then(data => this.setState({products: data }))
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
