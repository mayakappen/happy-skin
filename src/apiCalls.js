import React from 'react'
export const fetchAllProducts = () => {
    
    return fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    Headers: 'Access-Control-Allow-Origin'
    .then(res=> res.json())
}
export const fetchByProductType = (type ) => {
   
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)
        .then(res => res.json())
}

export const fetchByProductTag = ( tag ) => {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${tag}`)
    .then(res => res.json())
}

export const fetchByProductTypeAndTag = ({ type, tag }) => {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products?product_tags=${tag}&product_type=${type}`)
}