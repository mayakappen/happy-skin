import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
const Navbar = () => {
    return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Happy-Skin</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/foundation">
                    Foundation
                </NavLink>
                <NavLink to="/blush">
                    Blush
                </NavLink>
                 <NavLink to="/bronzer">
                    Bronzer
                 </NavLink>
                <NavLink to="/eyebrow">
                    Eyebrows
                </NavLink>j
                <NavLink to="/eyeliner">
                    Eyeliner
                </NavLink>
                <NavLink to="/eyeshadow">
                    Eyeshadow
                </NavLink>
                <NavLink to="/lip-liner">
                    Lip Liner
                </NavLink>
                <NavLink to="/lipstick">
                    Lipstick
                </NavLink>
                <NavLink to="/mascara">
                    Mascara
                </NavLink>
                <NavLink to="/nail-polish">
                    Nail Polish
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/saved">Saved</NavBtnLink>
            </NavBtn>
        </Nav>
    </>  );
}
 
export default Navbar