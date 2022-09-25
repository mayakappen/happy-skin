import {NavBtn, NavBtnLink} from "./Navbar/NavbarElements"
import React, {Component} from 'react'

class ProductPage extends Component {
    constructor(props) {
        super(props)
            this.state = {
                faved: false
            }
            
        }
    render() {
        return (
            <div className="product-page">
                <h1>{this.props.name}</h1>
                <h2>({this.props.category} + {''} + {this.props.product_type})</h2>
                <h3>{this.props.brand}</h3>
                {this.props.price > 0 &&
                    <h3>{this.props.price_sign}{this.props.price}</h3>}
                {this.props.api_featured_image &&
                    <img src={this.props.api_featured_image} alt={`View ${this.props.name}`} height="80px" width="auto" />
                }
                {this.props.rating &&
                    <h3>Rating: {this.props.rating}</h3>}
                <h3>{this.props.category}</h3>
                {this.props.tag_list &&
                    <h6>{this.props.tag_list.join(' + ')}</h6>}
                <NavBtn>
                    <NavBtnLink>Add</NavBtnLink>
                </NavBtn>
            </div>
        )
    }
}