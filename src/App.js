import Navbar from './Components/Navbar'
import ProductContainer from './Components/ProductContainer'
import { Component} from 'react'
import CategoryContainer from './Components/CategoryContainer'
import {BrowserRouter as Router} from 'react-router-dom'
import {fetchAllProducts, fetchByProductTag, fetchByProductType, fetchByProductTypeAndTag } from '/Users/mayakappen/turing/3module/happy-skin/src/apiCalls'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filtered: [],
      temp: [],
      category: '',
      currentTag: '',
      tags: [],
      error: false,
}
}

handleTag = event => {
  let tag = event.target.id.split('+').join(' ')
  let category = this.state.category.substring(1)
  console.log(category)
  let filterdd = []
  this.state.products.length === 0 && 
   fetchByProductTag(tag)
    .then(data => this.setState({filtered: data, tags: [...this.state.tags, tag], currentTag: '/' + event.target.id}))
    .catch(err => console.log(err))
  
  
  this.state.filtered.length === 0 ? 
     filterdd = this.state.products.filter(product =>
      product.tag_list.includes(event.target.id.split('+').join(' '))
    ):
    filterdd = this.state.filtered.filter(product => product.tag_list.includes(event.target.id.split('+').join(' ')))
  
  !this.state.tags.includes(tag) && 
    this.setState({ tags: [...this.state.tags, tag] })
    return (
      this.setState({ filtered: filterdd, currentTag: '/' + event.target.id })
    )
  
  }
componentDidMount() {
  fetchAllProducts()
    .then(data => this.setState({products: data}))
    .catch(error => console.log(error))
  }


handleType = event => {
event.preventDefault()
let filteredd = this.state.filtered.filter(product => product.product_type === event.target.id)
let category = this.state.category.substring(1)
let products = this.state.products
let filtered = this.state.filtered
let matchh = this.state.products.find(product => product.product_type === event.target.id)

 if (category === event.target.id &&
  products.length > 1 ) {
  this.setState({ category: `/${event.target.id}`, filtered: this.state.products.filter(product => product.tag_list.includes(this.state.currentTag.substring(1))) })
}
else if (filtered.length === 0 && products.length > 0) {
  this.setState({ filtered: products.filter(product => product.product_type === event.target.id) })
}
else if (filtered.length > 0) {
  filteredd = filtered.filter(product => product.product_type === event.target.id)
  this.setState({ filtered: filteredd }) 
}
else if (
filtered.length === 0 &&
products.length === 0) 
{
products = fetchByProductType(event.target.id)
  .then(data => this.setState({
  filtered: data
  }))
.catch(error => console.log(error))
}
else {
  this.setState({error: true})
}
}

  resetFilters = () => {
    this.setState({ filtered: [], tags: [], category: '', currentTag: '', })
  }
  render() {
    return (
      <Router>
        <Navbar goHome={this.resetFilters} typeHandler={this.handleType} tagHandler={this.handleTag} category={this.state.category} handlePath={this.handlePath} tag={this.state.currentTag} />
        <ProductContainer products={this.state.filtered} tagss={this.state.tags} categoryy={this.state.category.substring(1)}/>
        <CategoryContainer />
      </Router>
    )
  }
}

export default App;
