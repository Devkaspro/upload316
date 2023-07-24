import React from 'react';
import { Logo, NavBtn, NavBtnLink, NavbarLink, NavbarMenu, Wrapper } from './style';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const ITEM_HEIGHT = 48;

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        <Wrapper>
          <Logo className="logo"> Logo </Logo>
          <NavbarMenu>
            <NavbarLink to={'/'}> Home </NavbarLink>
            <NavbarLink to={'/about'}> About </NavbarLink>
            <NavbarLink to={'/service'}> Service </NavbarLink>
            <NavbarLink to={'/contact'}> Contact</NavbarLink>
          </NavbarMenu>
          <NavBtn>
            <NavBtnLink to={'/signup'}>
              <PersonOutlineOutlinedIcon />
            </NavBtnLink>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem>
                <NavbarLink to={'/'}> Home </NavbarLink>
              </MenuItem>
              <MenuItem>
                <NavbarLink to={'/about'}> About </NavbarLink>
              </MenuItem>
              <MenuItem>
                <NavbarLink to={'/service'}> Service </NavbarLink>
              </MenuItem>
              <MenuItem>
                <NavbarLink to={'/contact'}> Contact</NavbarLink>
              </MenuItem>
            </Menu>
          </NavBtn>
        </Wrapper>
    </>
  );
}

export default Navbar;