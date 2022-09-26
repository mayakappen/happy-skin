import React from 'react'
import Product from './Product'
import {NavBtn, NavBtnLink} from './Navbar/NavbarElements'
import CategoryContainer from './CategoryContainer'
const ProductContainer = ({products, tagss, categoryy, reset}) =>  { 
 
   console.log(categoryy)
   console.log(tagss)
    const filtered = products.map(product => {

    return (<Product key={product.id} props={product}/>)})
    const tags = tagss.join(', ')
    const category = categoryy.toUpperCase()
return (

    

    <div className = 'product-container'>
        <div className = 'filters'>
            <h3>{category}</h3>
            <h4>{tags}</h4>
            <NavBtn onClick={reset}>
                <NavBtnLink to="/" >Clear</NavBtnLink>
            </NavBtn>
        </div>
        {filtered}
        {tagss.length > 0  && products.length === 0 ? 
        <h2>{`We're having trouble finding ${tagss} ${categoryy}`}</h2>
        :
        category === '' && tagss.length === 0 &&
        <h2>Welcome to Happy Skin! Select your product type and filters to find the right match for you!</h2>
        }
    </div>
    
)
}


export default ProductContainer;