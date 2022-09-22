export const fetchByProductType = ({ type }) => {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)
        .then(response => response.json())
}