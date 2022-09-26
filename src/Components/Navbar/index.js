import PropTypes from "prop-types"
import React, { Component } from 'react'
import { Nav, Tags, NavLink, Bars, NavMenu, NavTags, NavBtn, NavBtnLink } from './NavbarElements'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            products: []
        }
    }
componentDidMount() {
this.props.category &&
this.setState({type: this.props.category})
}
render() {
    return (
    <>
        <Nav>
            <NavLink onClick={this.props.goHome}to="/">
                <h1>Happy-Skin</h1>
            </NavLink>
            <Bars />
                <NavMenu onClick={this.props.typeHandler}>
                <NavLink to={"/foundation" + this.props.tag} id="Foundation" >
                    Foundation
                </NavLink>
                <NavLink to={"/blush" + this.props.tag} id="Blush">
                    Blush
                </NavLink>
                 <NavLink to={"/bronzer" + this.props.tag} id="Bronzer">
                    Bronzer
                 </NavLink>
                <NavLink to={"/eyebrow" + this.props.tag} id="Eyebrow">
                    Eyebrow
                </NavLink>j
                <NavLink to={"/eyeliner" + this.props.tag} id="Eyeliner">
                    Eyeliner
                </NavLink>
                <NavLink to={"/eyeshadow" + this.props.tag} id="Eyeshadow">
                    Eyeshadow
                </NavLink>
                <NavLink to={"/lip_liner" + this.props.tag} id="Lip_Liner">
                    Lip Liner
                </NavLink>
                <NavLink to={"/lipstick" + this.props.tag} id="Lipstick">
                    Lipstick
                </NavLink>
                <NavLink to={"/mascara" + this.props.tag} id="Mascara">
                    Mascara
                </NavLink>
                <NavLink to={"/nail_polish" + this.props.tag} id="Nail_Polish">
                    Nail Polish
                </NavLink>
            </NavMenu>
            <NavBtn>
                    <NavBtnLink to={'/favorites'}>Saved</NavBtnLink>
            </NavBtn>
        </Nav>
            
                
        <Tags>
              
                <NavTags onClick={this.props.tagHandler}>
                    <NavLink to={this.props.category + '/hypoallergenic'} id="Hypoallergenic">
                    HypoAllergenic
                </NavLink>
                <NavLink to={this.props.category + '/vegan'} id="Vegan">
                    Vegan
                </NavLink>
                <NavLink to={this.props.category + '/cruelty-free'} id="cruelty+free">
                    Cruelty-Free
                </NavLink>
                <NavLink to={this.props.category + '/natural'} id="Natural">
                    Natural
                </NavLink>
                <NavLink to={this.props.category + '/organic'} id="Organic">
                    Organic
                </NavLink>
                <NavLink to={this.props.category + '/ewg-verified'} id="EWG+Verified">
                    EWG-Verified
                </NavLink>
                <NavLink to={this.props.category + '/purpicks'} id="purpicks">
                Purpicks
                </NavLink>
                <NavLink to={this.props.category + '/eco-cert'} id="EcoCert">
                    EcoCert
                </NavLink>
                <NavLink to={this.props.category + '/no-talc'} id="No+Talc">
                    No-Talc
                </NavLink>
                <NavLink to={this.props.category + '/chemical-free'} id="Chemical+Free">
                    Chemical-Free
                </NavLink>
                <NavLink to={this.props.category + '/alcohol-free'} id="alcohol+free">
                    Alcohol-Free
                </NavLink>
                <NavLink to={this.props.category + '/silicone-free'} id="silicone+free">
                    Silicone-Free
                </NavLink>
                <NavLink to={this.props.category + '/oil-free'} id="oil+free">
                    Oil-Free
                </NavLink>
                <NavLink to={this.props.category + '/cert-clean'} id="CertClean">
                    CertClean
                </NavLink>
                    <NavLink to={this.props.category + '/gluten-free'} id="Gluten+Free">
                    Gluten-Free
                </NavLink>
                    <NavLink to={this.props.category + '/usda-organic'} id="USDA+Organic">
                    USDA Organic
                </NavLink>
                <NavLink to={this.props.category + '/peanut-free-product'} id="Peanut+Free+Product">
                    Peanut-Free
                    </NavLink>
                <NavLink to={this.props.category + '/water-free'} id="water+free">
                    Water-Free
                </NavLink>

            </NavTags>
        </Tags>
    </>  );
    }
}

Navbar.propTypes = {
  category: PropTypes.string,
  goHome: PropTypes.func,
  tag: PropTypes.any,
  tagHandler: PropTypes.func,
  typeHandler: PropTypes.func
}
 
export default Navbar