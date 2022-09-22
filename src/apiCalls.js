export const fetchByProductType = ({ type }) => {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)
        .then(response => response.json())
}

export const fetchByProductTag = ({ tag }) => {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products?product_tags=${tag}`)
}

export const fetchByProductTypeAndTag = ({ type, tag }) => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products?product_tags=${tag}&product_type=${type}`)
}