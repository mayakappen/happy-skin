import PropTypes from "prop-types"
import React from 'react'
import { Link } from 'react-router-dom'
import { AddBtn } from './ProductElements'

const Product = ({selectProduct, id, name, brand, price , rating, price_sign, api_image, category, tag_list, favorite} ) => {

const chooseProduct = () => {
    selectProduct(id)
}

const favoriteProduct = () => {
    favorite(id)
}
    return (
        <Link to={`/${id}`} id={id} key={id}> 
            <div className="product" onClick={chooseProduct}>
                <h2>{name}</h2>
                <h3>{brand}</h3>
                {price > 0 && price_sign &&
                    <h3>{price_sign}{price}</h3>}
                {api_image &&
                    <img src={api_image} alt={`View ${name}`} height="80px" width="auto" />
                }
                {rating &&
                    <h3>Rating: {rating}</h3>}
                {category &&
                <h3>{category}</h3>
}
                {tag_list &&
                    <h6>{tag_list.join(' + ')}</h6>}
                <AddBtn onClick={favoriteProduct}>Add</AddBtn>
            </div>
        </Link>
    )
}

Product.propTypes = {
  api_image: PropTypes.string,
  brand: PropTypes.string,
  category: PropTypes.string,
  favorite: PropTypes.func,
  id: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.string,
  price_sign: PropTypes.any,
  rating: PropTypes.number,
  selectProduct: PropTypes.func,
  tag_list: PropTypes.array
}
export default Product;
                // product_link
                // website_link
                // product_colors
                // api_featured_image
                // description: this.props.description,
                // product_type: this.props.product_type,