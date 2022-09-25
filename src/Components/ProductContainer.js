import React from 'react'
import Product from './Product'

const ProductContainer = ({products, tagss, categoryy}) =>  { 
 
   console.log(categoryy)
   console.log(tagss)
    const filtered = products.map(product => {

    return (<Product key={product.id} props={product}/>)})
return (

    filtered.length > 0 && 

    <div className = 'product-container'>
       
        {filtered}
        
        <h2>{`We're having trouble finding ${tagss} ${categoryy}`}</h2>

    </div>
    
)
}


export default ProductContainer;