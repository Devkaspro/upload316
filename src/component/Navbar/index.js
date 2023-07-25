import React from 'react';
import { Logo, NavBtn, NavBtnLink, NavbarLink, NavbarMenu, Wrapper } from './style';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
        <Logo> <img src="" alt="Upload316" /> </Logo>
        <NavbarMenu>
          <NavbarLink to={'/'}> Home </NavbarLink>
          <NavbarLink to={'/about'}> About </NavbarLink>
          <NavbarLink to={'/service'}> Services </NavbarLink>
          <NavbarLink to={'/contact'}> Contact</NavbarLink>
        </NavbarMenu>
        <NavBtn>
          <NavBtnLink to={'/signup'}>
            <PersonOutlineIcon />
          </NavBtnLink>
          <NavBtnLink>
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
                'aria-labelledby': 'long-∏button',
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
                <NavbarLink to={'/service'}> Services </NavbarLink>
              </MenuItem>
              <MenuItem>
                <NavbarLink to={'/contact'}> Contact</NavbarLink>
              </MenuItem>
            </Menu>
          </NavBtnLink>

        </NavBtn>


      </Wrapper>
    </>
  );
}

export default Navbar;