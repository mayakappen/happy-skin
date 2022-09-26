import React from 'react'
export const fetchAllProducts = () => {
    
    return fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    
    .then(res=> res.json())
}
export const fetchByProductType = (type ) => {
   
    return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)
        .then(res => res.json())
}

export const fetchByProductTag = ( tag ) => {
    return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${tag}`)
    .then(res => res.json())
}

export const fetchByProductTypeAndTag = ({ type, tag }) => {
    return fetch(`https://makeup-api.herokuapp.com/api/v1/products?product_tags=${tag}&product_type=${type}`)
}