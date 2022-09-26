import { NavBtn, NavBtnLink } from "./Navbar/NavbarElements"
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const ProductPage = (currentProduct) => {
    const [product, setProduct] = useState({currentProduct})
    const location = useLocation()
    console.log(product)
    return (
        <div className="product-page">
            <h1>{currentProduct.currentProduct.name}</h1>
            <h2>({currentProduct.currentProduct.category} + {''} + {currentProduct.currentProduct.product_type})</h2>
            <h3>{currentProduct.currentProduct.brand}</h3>
            {currentProduct.currentProduct.price > 0 &&
                <h3>{currentProduct.currentProduct.price_sign}{currentProduct.price}</h3>}
            {currentProduct.currentProduct.api_featured_image &&
                <img src={currentProduct.currentProduct.api_featured_image} alt={`View ${currentProduct.currentProduct.name}`} height="80px" width="auto" />
            }
            {currentProduct.currentProduct.rating &&
                <h3>Rating: {currentProduct.currentProduct.rating}</h3>}
            {currentProduct.currentProducttag_list &&
                <h6>{currentProduct.currentProduct.tag_list.join(' + ')}</h6>}
            <NavBtn>
                <NavBtnLink>Add</NavBtnLink>
            </NavBtn>
        </div>
    )
}
export default ProductPage