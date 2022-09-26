import Navbar from './Components/Navbar'
import ProductContainer from './Components/ProductContainer'
import { Component} from 'react'
import {fetchAllProducts, fetchByProductTag, fetchByProductType, fetchByProductTypeAndTag } from '/Users/mayakappen/turing/3module/happy-skin/src/apiCalls'
import {Routes, Route, useParams} from 'react-router-dom'
import Favorites from './Components/Favorites'
import PropTypes from'prop-types'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        products: [],
        filtered: [],
        favorites: [],
        category: '',
        currentTag: '',
        tags: [],
        error: false,
        currentProduct:  
          {
          id: 0,
          name: '', 
          brand: '',
          price: '',
          rating: '',
          price_sign: '',
          api_image: '',
          category: '',
          tag_list: '',
          description: '',
        },
        
    }
}

handleFavorite = id => {
  let fav = this.state.products.find(product => product.id === id)
  this.setState({favorites: [...this.state.favorites, fav]})
}

handleTag = event => {
event.preventDefault()
  let tag = event.target.id.split('+').join(' ')
  let category = this.state.category.substring(0)
  let filterdd = this.state.filtered
  this.state.products.length === 0 ?
    fetchByProductTag(tag)
      .then(data => this.setState({filtered: data, tags: [tag], currentTag: '/' + event.target.id}))
      .catch(err => console.log(err))
  :
  this.state.filtered.length === 0 ? 
    filterdd = this.state.products.filter(product =>
    product.tag_list.includes(event.target.id.split('+').join(' '))
     ):
    filterdd = this.state.filtered.filter(product => product.tag_list.includes(event.target.id.split('+').join(' ')))
  
  !this.state.tags.includes(tag) && 
    this.setState({ tags: [...this.state.tags, tag], filtered: filterdd.filter(product => product.tag_list.includes(tag)), currentTag: '/' + event.target.id, 
    currentProduct: {id: 0,
    name: '',
    brand: '',
    price: '',
    rating: '',
    price_sign: '',
    api_image: '',
    category: '',
    tag_list: '',
    description: ''
    } 
  })
    
}

componentDidMount() {
  fetchAllProducts()
    .then(data => this.setState({products: data}))
    .catch(error => console.log(error))
  }

selectProduct = id => {
  const matching = this.state.filtered.find(product => product.id === id)
  console.log(matching)
  this.setState({currentProduct: matching})
}

handleType = event => {
  event.preventDefault()
  let products = this.state.products
  let filtered = this.state.filtered
if (filtered.length === 0 && products.length > 0) {
  this.setState({filtered: products.filter(product => product.product_type === event.target.id.toLowerCase())})
}
else if (filtered.length > 0 && products.length > 0 ) {
  this.setState({filtered: products.filter(product => product.product_type === event.target.id.toLowerCase())}) 

}

else if (
  filtered.length === 0 &&
  products.length === 0) 
{
    products = fetchByProductType(event.target.id)
    .then(data => this.setState({
    filtered: data }))
    .catch(error => console.log(error))
}
else {
  this.setState({error: true})
}
  this.setState({
    category: `/${event.target.id}`, currentProduct: {
    id: 0,
    name: '',
    brand: '',
    price: '',
    rating: '',
    price_sign: '',
    api_image: '',
    category: '',
    tag_list: '',
    description:''
    }
  })
}

resetFilters = () => {
  this.setState({
    filtered: [], tags: [], category: '', currentTag: '', currentProduct: {
      id: 0,
      name: '',
      brand: '',
      price: 0,
      rating: 0,
      price_sign: '',
      api_image: '',
      category: '',
      tag_list: '',
      description: ''
    }
  })
  }
  render() {
    return (
      <div>
        <Navbar goHome={this.resetFilters} typeHandler={this.handleType} tagHandler={this.handleTag} category={this.state.category} handlePath={this.handlePath} tag={this.state.currentTag} />
        <Routes>
        <Route path={'*'} element={<ProductContainer addFav={this.handleFavorite} select={this.selectProduct} products={this.state.filtered}  tagss={this.state.tags} categoryy={this.state.category.substring(1)} reset={this.resetFilters} selected={this.state.currentProduct}/>}/>
        <Route exact path={'/favorites'} element={<Favorites favorites={this.state.favorites} />} />
        </Routes>
      </div>
    )
  }

}
export default App;