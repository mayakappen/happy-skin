import React from 'react'
import Product from './Product'
import ProductPage from './ProductPage'
import {NavBtn, NavBtnLink} from './Navbar/NavbarElements'

const ProductContainer = ({products, tagss, categoryy, reset, select, selected, addFav}) =>  {

const filtered =  products.map(product => {
    return (<Product favorite={addFav} selectProduct={select} value={product} key={product.id} id={product.id} name={product.name} brand={product.brand} type ={product.product_type}  price={product.price} 
        price_sign={product.price_sign}  api_image={product.api_featured_image} rating={product.rating}
        category={product.category} tag_list={product.tag_list}/>)})
console.log(selected)

return (
filtered.length === 0 && tagss.length === 0 &&
<div className='products-container'>
< div className='filters' >
    <h3>{categoryy}</h3>
    <h4>{tagss}</h4>
    <NavBtn onClick={reset}>
        <NavBtnLink to="/happy-skin" >Clear</NavBtnLink>
    </NavBtn>
            </div>
                <div className='message'>
                    <h2>Welcome to Happy Skin! Select your product type and filters to find the right match for you!</h2>
                </div> 
</div>
|| selected.name !== '' &&

<ProductPage currentProduct={selected}/>

|| products.length  === 0 && {categoryy} !== '' &&

<div className='products-container'>
            < div className='filters' >
                <h3>{categoryy}</h3>
                <h4>{tagss}</h4>
                <NavBtn onClick={reset}>
                    <NavBtnLink to="/happy-skin" >Clear</NavBtnLink>
                </NavBtn>
                   
                <div className='error'>
                    <h2>{`We're having trouble finding ${tagss} ${categoryy}`}</h2>
                </div>
                :
            </div>
</div>

|| products.length > 0 &&

    <div className='products-container'>
        < div className='filters' >
            <h3>{categoryy}</h3>
            <h4>{tagss}</h4>
            <NavBtn onClick={reset}>
                <NavBtnLink to="/happy-skin" >Clear</NavBtnLink>
            </NavBtn>
        </div>
        {filtered}

    </div>
)
}


export default ProductContainer;