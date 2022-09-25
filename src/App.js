import Navbar from './Components/Navbar'
import ProductContainer from './Components/ProductContainer'
import { Component} from 'react'
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
  let tag = event.target.id.split('+').join(' ')
  let category = this.state.category.substring(1)
  console.log(category)
  let filterdd
  {this.state.products.length === 0 &&
   fetchByProductTag(tag)
    .then(data => this.setState({filtered: data, tags: [...this.state.tags, tag], currentTag: '/' + event.target.id}))
    .catch(err => console.log(err))
  } 
  
  this.state.filtered.length === 0 ? 
     filterdd = this.state.products.filter(product =>
      product.tag_list.includes(event.target.id.split('+').join(' '))
    ):
    filterdd = this.state.filtered.filter(product => product.tag_list.includes(event.target.id.split('+').join(' ')))
      this.setState({ filtered: filterdd, currentTag: '/' + event.target.id, tags: [...this.state.tags, tag] })
  
    return (
    this.setState({ filtered: filterdd, currentTag: '/' + event.target.id, tags: [...this.state.tags, tag] })
    )
  }


componentDidMount() {
  fetchAllProducts()
    .then(data => this.setState({products: data}))
    .catch(error => console.log(error))
  }

handleType = event => {
let filteredd
{this.state.category.substring(1) !== event.target.id &&  
    this.setState({category: `/${event.target.id}`, filtered: []})

  if  (this.state.products.length === 0) {
    fetchByProductType(event.target.id)
    .then(data => this.setState({
    filtered: data
    }))
    .catch(error => console.log(error))
  }
  else if (this.state.filtered.length === 0) {
  let match = this.state.products.find(product => product.product_type === event.target.id)
  filteredd = this.state.products.filter(product => product.product_type === event.target.id)
  { match !== undefined &&
    this.setState({filtered: filteredd})
  }
}
  else if (this.state.filtered.length > 1 ) {
    let match = this.state.filtered.find(product => product.product_type === event.target.id)
    let filtered = this.state.filtered.filter(product => product.product_type === event.target.id)
    { match !== undefined &&
      this.setState({filtered: filtered})
  }
}
}
}
  resetFilters = () => {
    this.setState({ filtered: [], tags: [], category: '', currentTag: '', })
  }
  render() {
    return (
      <Router>
        <Navbar goHome={this.resetFilters} typeHandler={this.handleType} tagHandler={this.handleTag} category={this.state.category} handlePath={this.handlePath} tag={this.state.currentTag} />
        <ProductContainer products={this.state.filtered} />
        <CategoryContainer />
      </Router>
    )
  }
}

export default App;
