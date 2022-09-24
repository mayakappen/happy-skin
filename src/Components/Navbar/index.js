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
                <NavLink to="/foundation" id="foundation" >
                    Foundation
                </NavLink>
                <NavLink to="/blush" id="blush">
                    Blush
                </NavLink>
                 <NavLink to="/bronzer" id="bronzer">
                    Bronzer
                 </NavLink>
                <NavLink to="/eyebrow" id="eyebrow">
                    Eyebrows
                </NavLink>j
                <NavLink to="/eyeliner" id="eyeliner">
                    Eyeliner
                </NavLink>
                <NavLink to="/eyeshadow" id="eyeshadow">
                    Eyeshadow
                </NavLink>
                <NavLink to="/lip-liner" id="lip-liner">
                    Lip Liner
                </NavLink>
                <NavLink to="/lipstick" id="lipstick">
                    Lipstick
                </NavLink>
                <NavLink to="/mascara" id="mascara">
                    Mascara
                </NavLink>
                <NavLink to="/nail-polish" id="nail-polish">
                    Nail Polish
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/saved">Saved</NavBtnLink>
            </NavBtn>
        </Nav>
        <Tags>
            <NavTags onClick={this.props.tagHandler}>
                <NavLink to={this.props.tags + this.props.category}id="hypoallergenic">
                    HypoAllergenic
                </NavLink>
                    <NavLink to={this.props.tags + this.props.category} id="vegan">
                    Vegan
                </NavLink>
                    <NavLink to={'/cruelty-free' + this.props.category} id="cruelty+free">
                    Cruelty-Free
                </NavLink>
                <NavLink to="/natural" id="natural">
                    Natural
                </NavLink>
                <NavLink to="/organic" id="organic">
                    Organic
                </NavLink>
                <NavLink to="/ewg-verified" id="ewg+verified">
                    EWG-Verified
                </NavLink>
                <NavLink to="/purpicks" id="purpicks">
                    Purpicks
                </NavLink>
                <NavLink to="/eco-cert" id="eco+cert">
                    EcoCert
                </NavLink>
                <NavLink to="/no-talc" id="No+Talc">
                    No-Talc
                </NavLink>
                <NavLink to="/chemical-free" id="chemical+free">
                    Chemical-Free
                </NavLink>
                <NavLink to="/alcohol-free" id="alcohol+free">
                    Alcohol-Free
                </NavLink>
                <NavLink to="/silicone-free" id="silicone+free">
                    Silicone-Free
                </NavLink>
                <NavLink to="/oil-free" id="oil+free">
                    Oil-Free
                </NavLink>
                <NavLink to="/dairy-free" id="dairy+free">
                    Dairy-Free
                </NavLink>
                <NavLink to="/peanut-free" id="peanut+free">
                    Peanut-Free
                </NavLink>
                <NavLink to="/gluten-free" id="gluten+free">
                    Gluten-Free
                </NavLink>
                <NavLink to="/sugar-free" id="sugar+free">
                    Sugar-Free
                </NavLink>
                <NavLink to="/water-free" id="water+free">
                    Water-Free
                </NavLink>

            </NavTags>
        </Tags>
    </>  );
    }
}
 
export default Navbar