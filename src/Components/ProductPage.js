import { NavBtn, NavBtnLink } from "./Navbar/NavbarElements"
import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'

const ProductPage = ({currentProduct}) => {

    const [product, setProduct] = useState({})
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className="product-page">
            <h1>{currentProduct.name}</h1>
            <h2>({currentProduct.category} + {''} + {currentProduct.product_type})</h2>
            <h3>{currentProduct.brand}</h3>
            {currentProduct.price > 0 &&
                <h3>{currentProduct.price_sign}{currentProduct.price}</h3>}
            {currentProduct.api_featured_image &&
                <img src={currentProduct.api_featured_image} alt={`View ${currentProduct.name}`} height="80px" width="auto" />
            }
            {currentProduct.rating &&
                <h3>Rating: {currentProduct.rating}</h3>}
            <h3>{currentProduct.category}</h3>
            {currentProduct.tag_list &&
                <h6>{currentProduct.tag_list.join(' + ')}</h6>}
            <NavBtn>
                <NavBtnLink>Add</NavBtnLink>
            </NavBtn>
        </div>
    )
}
export default ProductPage