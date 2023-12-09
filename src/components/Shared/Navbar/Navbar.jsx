

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
import AdbIcon from '@mui/icons-material/Adb';
import useAuth from '../../../hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import useActiveUser from '../../../hooks/useActiveUser';


const pages = ['Home', 'All Tests', 'Blog'];
const settings = ['Login', 'Register', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user,logOut} = useAuth();
  const [isAdmin] = useAdmin();
  const [isActiveUser] = useActiveUser();

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

  const handleLogOut = () => {
  logOut()
    .then(() => { })
    .catch(error => console.log(error))
}

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4dd0e1', padding: '14px 0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 45,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Medi <span style={{ color: 'green' }}>Scan</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
    <MenuItem
      key={page}
      component={RouterLink}
      to={
        page === 'Home'
          ? '/'
          : page === 'All Tests'
          ? '/allTests'
          : page === 'Blog'
          ? '/blogs'
          : '/'
      }
      onClick={handleCloseNavMenu}
    >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MediScan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
  <Button
    key={page}
    component={RouterLink}
    to={
      page === 'Home'
        ? '/'
        : page === 'All Tests'
        ? '/allTests'
        : page === 'Blog'
        ? '/blogs'
        : '/'
    }
    onClick={handleCloseNavMenu}
    sx={{ my: 2  , color: 'white', display: 'block' }}
  >
    {page}
  </Button>
))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, ml:1 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Hi! {user.displayName}
                </Typography>
              </>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar alt="User" src="default-avatar-image-url" />
                </IconButton>
              </Tooltip>
            )}
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
                <MenuItem
                key={setting}
                component={RouterLink}
                to={
                  setting === 'Login'
                    ? '/login'
                    : setting === 'Register'
                    ? '/register'
                    : setting === 'Dashboard'
                    ? isActiveUser && isAdmin
                      ? '/dashboard/welcome'
                      : isActiveUser && !isAdmin
                      ? '/dashboard/profile'
                      : '/'
                    : '/'
                }
                onClick={setting === 'Logout' ? handleLogOut : handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;









// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import useAdmin from '../../../hooks/useAdmin';

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const [isAdmin] = useAdmin();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//     handleMenuClose();
//   };

//   return (
//     <AppBar position="static" className="z-10">
//       <Toolbar className="bg-base-100">
//         <IconButton edge="start" color="inherit" aria-label="menu" className="lg:hidden" onClick={handleMenuClick}>
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id="navbar-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//         >
//           <MenuItem>
//             <NavLink to="/" className="nav-link">
//               Home
//             </NavLink>
//           </MenuItem>
//           <MenuItem>
//             <NavLink to="/allTests" className="nav-link">
//               All Tests
//             </NavLink>
//           </MenuItem>
//           <MenuItem>
//             <NavLink to="/login" className="nav-link">
//               Login
//             </NavLink>
//           </MenuItem>
//         </Menu>

//         <div className="flex-grow">
//           <Typography variant="h6" color="secondary" component="div">
//             Floral<span className="text-emerald-600">Diagnostic</span>
//           </Typography>
//         </div>

//         <div className="lg:flex">
//           <div className="flex">
//             <ul className="lg:flex menu-horizontal px-1 font-semibold">
//               <li>
//                 <NavLink to="/" className="nav-link "  >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/allTests" className="nav-link">
//                   All Tests
//                 </NavLink>
//               </li>
//               {user && isAdmin && (
//                 <li>
//                   <NavLink to="/dashboard/allUsers" className="nav-link">
//                     Dashboard
//                   </NavLink>
//                 </li>
//               )}
//               {user && !isAdmin && (
//                 <li>
//                   <NavLink to="/dashboard/profile" className="nav-link">
//                     Dashboard
//                   </NavLink>
//                 </li>
//               )}
//             </ul>
//           </div>

//           <div className="nav-item ml-2">
//             {user ? (
//               <div className="flex items-center">
//                 {user.photoURL ? (
//                   <div className="relative group">
//                     <Avatar
//                       src={user.photoURL}
//                       alt={`${user.displayName}'s Profile`}
//                       className="btn btn-ghost btn-circle avatar"
//                     />
//                     <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-800 text-white text-sm px-2 py-1 rounded -left-20 transform -translate-x-1/2 transition duration-300">
//                       Welcome, {user.displayName?.split(' ')[0]}!
//                     </span>
//                   </div>
//                 ) : (
//                   ''
//                 )}
//                 <Button color="error" className="mx-2" onClick={handleLogOut}>
//                   Logout
//                 </Button>
//               </div>
//             ) : (
//               <div className="nav-item">
//                 <Button component={Link} to="/login" variant="contained" color="primary">
//                   Login
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;