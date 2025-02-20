import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import './styles.css';

const drawerWidth = 240;
const navItems = ['Inicio', 'Sobre', 'Serviços', 'Contato'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', padding: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 80 }} />
  
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} className='link'>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ my: 2 }} />
            {/* Botão de Atendimento ao Cliente no menu lateral */}
            <Button
                sx={{
                    backgroundColor: "#8E09CF",
                    color: "#fff",
                    padding: "8px 16px",
                    fontSize: "0.875rem",
                    textTransform: "none",
                    width: "100%",
                }}
                variant="contained"
            >
                <HeadsetMicIcon sx={{ fontSize: 18, marginRight: '8px' }} />
                Atendimento
            </Button>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                className='nav'
                component="nav"
                sx={{
                    background: {
                        xs: "linear-gradient(135deg, #0a0a0a 30%, #25003E 90%)",  // Gradiente no mobile
                        md: "transparent"  // Sem gradiente no tamanho médio em diante
                    },
                    backgroundImage: { xs: "", md: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))" },
                    boxShadow: "none",
                    color: "white",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Ícone de menu e logo */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <img src={logo} alt="Logo" style={{ height: 40 }} />
                            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", display: { xs: "none", sm: "block" } }}>
                                ZeroGravity
                            </Typography>
                        </Box>
                    </Box>

                    {/* Menu Central */}
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            gap: 2,
                        }}
                    >
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#fff" }} variant="text">
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Botão de Atendimento ao Cliente - Visível apenas no desktop */}
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Button
                            sx={{
                                backgroundColor: "#8E09CF",
                                color: "#fff",
                                padding: "6px 12px",
                                fontSize: "0.875rem",
                                textTransform: "none",
                            }}
                            variant="contained"
                        >
                            <HeadsetMicIcon sx={{ fontSize: 18, marginRight: '8px' }} />
                            Atendimento
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Menu lateral (Mobile) */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
