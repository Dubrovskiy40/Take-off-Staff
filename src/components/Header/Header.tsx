import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ContactsIcon from "@mui/icons-material/Contacts";
import Grid from "@mui/material/Grid";
import {NavLink, useLocation} from "react-router-dom";
import ModalWindow from "../ModalWindow/ModalWindow";

const pages = [
    {id: 1, type: 'Авторизация', path: '/'},
    {id: 2,type: 'Контакты', path: '/contacts'},
];

const Header = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
        const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };

    const location = useLocation();
        const addContact = () => {
            if (location.pathname === '/contacts') {
                setModalActive(true)
            } else {
                console.log('user not login')
            }
        };

    return (
        <>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><NavLink to={page.path}>{page.type}</NavLink></Typography>
                                </MenuItem>
                            ))}
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" onClick={addContact}>Добавить контакт</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                    <Grid item xs={8} mr={10}>
                        <ContactsIcon sx={{ fontSize: 30 }} />
                    </Grid>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to={page.path}>{page.type}</NavLink>
                            </Button>
                        ))}
                            <Button
                                onClick={addContact}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Добавить контакт
                            </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <ModalWindow active={modalActive} setActive={setModalActive} />
    </>
    );
};

export default Header;
