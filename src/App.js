import Navbar from './Components/Navbar'
import ProductContainer from './Components/ProductContainer'
import { Component, useEffect } from 'react'
import CategoryContainer from './Components/Category/Category'
import {BrowserRouter as Router} from 'react-router-dom'
import {fetchAllProducts, fetchByProductTag, fetchByProductType } from '/Users/mayakappen/turing/3module/happy-skin/src/apiCalls'




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
  fetchByProductTag(event.target.id)
  .then(data => this.setState({ products: data }))
  .catch(err => console.log(err))
  // if (this.state.filtered === []) {
  //   let filteredProducts = this.state.products
  //   filteredProducts.filter(product => product['tag_list'].includes(event.target.id))
  // this.setState({tag: event.target.id, filtered: filteredProducts })
  // }
  // else {
  //   let filteredProducts = this.state.filtered.map(product => product.tag_list.filter(tag => tag === event.target.id))
  //   this.setState({tag: event.target.id, filtered: filteredProducts })
  // }
}

handleType = event => {
  let match = this.state.products.find(product => product.product_type === event.target.id)
  if (match !== undefined) {
    let filtered = this.state.products.filter(product => product.product_type === event.target.id)
    this.setState({filtered: filtered, category: event.target.id })
  } 
  else {
    fetchByProductType(event.target.id)
      .then(data => this.setState({products: this.state.products.concat(data)}))
  }
}
render() {
  return (
    <Router>
      <Navbar typeHandler={this.handleType} tagHandler={this.handleTag} category={this.state.category}/>
     <ProductContainer props={this.state.category} />
      <CategoryContainer />
    </Router>
  );
}
}

export default App;
