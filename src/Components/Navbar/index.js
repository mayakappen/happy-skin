import React, { Component } from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            products: []
        }
    }




render() {
    return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Happy-Skin</h1>
            </NavLink>
            <Bars />
                <NavMenu onClick={this.props.handler}>
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
    </>  );
    }
}
 
export default Navbar