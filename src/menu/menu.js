import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from 'react-router-dom';

const pages = [
  {name:'近期賽事',router:'/event'}, 
  {name:'賽事成績', router:'/result'}, 
  {name:'選手專區',router:'/player'}, 
  {name:'排名',router:'/ranking'}, 
  {name:'新聞',router:'/news'}, 
  {name:'影片',router:'/video'}, 
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <div style={{
      backgroundColor:'#d36103',
      display:'flex',
      alignItems:'center',
      height: '4vw',
      minHeight: '50px'
    }}>
        
          <MenuItem onClick={()=>{navigate('/')}}>
            <h2>PINGPONG</h2>
          </MenuItem>
          <div > 
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>{
                  navigate(page.router);
                }}
              >
               <p style={{
                 fontSize: '18px',
                 color: 'white'
               }}>
                 {page.name}
                </p>
              </Button>
            ))}
          </div>

          
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        
    </div>
  );
};
export default ResponsiveAppBar;