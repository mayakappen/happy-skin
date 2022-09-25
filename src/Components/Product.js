import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NavBtn, NavBtnLink } from './Navbar/NavbarElements'

const Product = ({ props }) => {
    return (
        <Link to={`${props.id}`}>
            <div className="product">

                <h2>{props.name}</h2>
                <h3>{props.brand}</h3>
                {props.price > 0 &&
                    <h3>{props.price_sign}{props.price}</h3>}
                {props.image_link &&
                    <img src={props.api_featured_image} alt={`View ${props.name}`} height="80px" width="auto" />
                }
                {props.rating &&
                    <h3>Rating: {props.rating}</h3>}
                <h3>{props.category}</h3>
                {props.tag_list &&
                    <h6>{props.tag_list.join(' + ')}</h6>}
                <NavBtn>
                    <NavBtnLink>Add</NavBtnLink>
                </NavBtn>

            </div>
        </Link>
    )
}
export default Product;
                // product_link
                // website_link
                // product_colors
                // api_featured_image
                // description: this.props.description,
                // product_type: this.props.product_type,