import React from 'react';
import { Logo, NavBtn, NavBtnLink, NavbarLink, NavbarMenu, Wrapper } from './style';
import { Link } from "react-router-dom";
import { Person, List } from "react-bootstrap-icons";
function Navbar() {
  return (
    <>
      <div className='main-container'>
        <Wrapper>
          <Logo className="logo"> Logo </Logo>
          <NavbarMenu>
            <NavbarLink to={'/'}> Home </NavbarLink>
            <NavbarLink to={'/about'}> About </NavbarLink>
            <NavbarLink to={'/service'}> Service </NavbarLink>
            <NavbarLink to={'/contact'}> Contact</NavbarLink>
          </NavbarMenu>
          <NavBtn>
            <NavBtnLink to="#Login"> <Person /> </NavBtnLink>
            <NavBtnLink to="#List"> <List />
            </NavBtnLink>
          </NavBtn>
        </Wrapper>
      </div>
    </>
  );
}

export default Navbar;