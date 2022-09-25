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
            <NavLink to="/">
                <h1>Happy-Skin</h1>
            </NavLink>
            <Bars />
                <NavMenu onClick={this.props.typeHandler}>
                <NavLink to={"/foundation" + this.props.tag} id="foundation" >
                    Foundation
                </NavLink>
                <NavLink to={"/blush" + this.props.tag} id="blush">
                    Blush
                </NavLink>
                 <NavLink to={"/bronzer" + this.props.tag} id="bronzer">
                    Bronzer
                 </NavLink>
                <NavLink to={"/eyebrow" + this.props.tag} id="eyebrow">
                    Eyebrows
                </NavLink>j
                <NavLink to={"/eyeliner" + this.props.tag} id="eyeliner">
                    Eyeliner
                </NavLink>
                <NavLink to={"/eyeshadow" + this.props.tag} id="eyeshadow">
                    Eyeshadow
                </NavLink>
                <NavLink to={"/lip-liner" + this.props.tag} id="lip-liner">
                    Lip Liner
                </NavLink>
                <NavLink to={"/lipstick" + this.props.tag} id="lipstick">
                    Lipstick
                </NavLink>
                <NavLink to={"/mascara" + this.props.tag} id="mascara">
                    Mascara
                </NavLink>
                <NavLink to={"/nail-polish" + this.props.tag} id="nail-polish">
                    Nail Polish
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/saved">Saved</NavBtnLink>
            </NavBtn>
        </Nav>
        <Tags>
            <NavTags onClick={this.props.tagHandler}>
                    <NavLink to={this.props.category + '/hypoallergenic'} id="hypoallergenic">
                    HypoAllergenic
                </NavLink>
                <NavLink to={this.props.category + '/vegan'} id="vegan">
                    Vegan
                </NavLink>
                <NavLink to={this.props.category + '/cruelty-free'} id="cruelty+free">
                    Cruelty-Free
                </NavLink>
                <NavLink to={this.props.category + '/natural'} id="natural">
                    Natural
                </NavLink>
                <NavLink to={this.props.category + '/organic'} id="organic">
                    Organic
                </NavLink>
                <NavLink to={this.props.category + '/ewg-verified'} id="ewg+verified">
                    EWG-Verified
                </NavLink>
                <NavLink to={this.props.category + '/purpicks'} id="purpicks">
                Purpicks
                </NavLink>
                <NavLink to={this.props.category + '/eco-cert'} id="eco+cert">
                    EcoCert
                </NavLink>
                <NavLink to={this.props.category + '/no-talc'} id="No+Talc">
                    No-Talc
                </NavLink>
                <NavLink to={this.props.category + '/chemical-free'} id="chemical+free">
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
                    <NavLink to={this.props.category + '/dairy-free'} id="dairy+free">
                    Dairy-Free
                </NavLink>
                    <NavLink to={this.props.category + '/peanut-free'} id="peanut+free">
                    Peanut-Free
                </NavLink>
                    <NavLink to={this.props.category + '/gluten-free'} id="gluten+free">
                    Gluten-Free
                </NavLink>
                    <NavLink to={this.props.category + '/sugar-free'} id="sugar+free">
                    Sugar-Free
                </NavLink>
                <NavLink to={this.props.category + '/water-free'} id="water+free">
                    Water-Free
                </NavLink>

            </NavTags>
        </Tags>
    </>  );
    }
}
 
export default Navbar