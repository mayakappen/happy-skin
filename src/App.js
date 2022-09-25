import Navbar from './Components/Navbar'
import ProductContainer from './Components/ProductContainer'
import { Component, useEffect } from 'react'
import CategoryContainer from './Components/CategoryContainer'
import {BrowserRouter as Router} from 'react-router-dom'
import {fetchAllProducts, fetchByProductTag, fetchByProductType } from '/Users/mayakappen/turing/3module/happy-skin/src/apiCalls'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filtered: [],
      temp: [],
      category: '',
      currentTag: '',
      tags: []
}
}

handleTag = event => {
  let filtered = []
  if (this.state.products.length === 0) {
   fetchByProductTag(event.target.id)
    .then(data => this.setState({filtered: data, tags: [...this.state.tags, event.target.id], currentTag: '/' + event.target.id}))
    .catch(err => console.log(err))
  } 
  else {
      this.state.products.forEach(product => {
       if (product.tag_list.includes(event.target.id)) {
       filtered.push(product)
       }
    })
    this.setState({filtered: filtered, currentTag: '/' + event.target.id, tags: [...this.state.tags, event.target.id] })}
}


componentDidMount() {
  fetchAllProducts()
    .then(data => this.setState({products: data}))
    .catch(error => console.log(error))
  }

handleType = event => {
  this.setState({category: `/${event.target.id}`})
  if  (this.state.products.length === 0) {
    fetchByProductType(event.target.id)
    .then(data => this.setState({
    filtered: data
    }))
    .catch(error => console.log(error))
  }
  else {
  let match = this.state.products.find(product => product.product_type === event.target.id)
  if (match !== undefined) {
    let filtered = this.state.products.filter(product => product.product_type === event.target.id)
    this.setState({filtered: filtered, category: `/${event.target.id}`})
  } 
}
}
render() {
  return (
    <Router>
      <Navbar typeHandler={this.handleType} tagHandler={this.handleTag} category={this.state.category} handlePath={this.handlePath} tag={this.state.currentTag}/>
     <ProductContainer products={this.state.filtered} />
      <CategoryContainer />
    </Router>
  );
}
}

export default App;
