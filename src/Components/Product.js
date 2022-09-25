import React, { Component } from 'react'

const Product = ({props}) => {
return (
    
    <div className="product">
                <h1>{props.brand}</h1>
                <h1>{props.name}</h1>
                // price:name:  this.props.price,
                // image_link: this.props.image_link,
                // website_link: this.props.image_link,
                // description: this.props.description,
                // rating: this.props.rating,
                // category: this.props.category,
                // product_type: this.props.product_type,
                // tag_list: this.props.tag_list,

</div>
)}

export default Product;