import React from 'react'
import Product from './Product'
import {NavBtn, NavBtnLink} from './Navbar/NavbarElements'

const ProductContainer = ({tagHandler, typeHandler, products, tagss, categoryy, reset, select, selected}) =>  {

const filtered =  products.map(product => {
    return (<Product selectProduct={select} value={product} key={product.id} id={product.id} name={product.name} brand={product.brand} type ={product.product_type}  price={product.price} 
        price_sign={product.price_sign}  api_image={product.api_featured_image} rating={product.rating}
        category={product.category} tag_list={product.tag_list}/>)})
    
return (
    <div className = 'product-container'>
        <div className = 'filters'>
            <h3>{categoryy}</h3>
            <h4>{tagss}</h4>
            <NavBtn onClick={reset}>
                <NavBtnLink to="/" >Clear</NavBtnLink>
            </NavBtn>
        </div>
        {filtered}
        {tagss.length > 0  && products.length === 0 ? 
        <h2>{`We're having trouble finding ${tagss} ${categoryy}`}</h2>
        :
        categoryy === '' && tagss.length === 0 &&
        <h2>Welcome to Happy Skin! Select your product type and filters to find the right match for you!</h2>
        }
    </div>
    
)
}


export default ProductContainer;