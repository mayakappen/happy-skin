import React from 'react'
import Product from './Product'

const ProductContainer = ({products}) =>  { 
 
    const filtered = products.map(product => {

        return (<Product key={product.id} props={product}/>)})

return (
    <div className = 'product-container'>
        {filtered}
    </div>
)
}


export default ProductContainer;