import React from 'react'
import { Link } from 'react-router-dom'
import { NavBtn, NavBtnLink } from './Navbar/NavbarElements'

const Product = ({selectProduct, id, name, brand, price , rating, price_sign, api_image, category, tag_list} ) => {

const chooseProduct = () => {
    selectProduct(id)
 
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
                <NavBtn>
                    <NavBtnLink>Add</NavBtnLink>
                </NavBtn>
            </div>
        </Link>
    )
}
export default Product;
                // product_link
                // website_link
                // product_colors
                // api_featured_image
                // description: this.props.description,
                // product_type: this.props.product_type,