import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { pink, blue } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = ({handleDrawerOpen, drawerOpen}) => {
    const theme = useTheme();
    console.log(theme.breakpoints);
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ boxShadow: 'unset' }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h1" component="div" sx={{ flexGrow: 1, display: matchUpSm ? 'block' : 'none' }}>
                            Project Logo
                        </Typography>
                        <Stack flexDirection="row" alignItems="center" gap={2}>
                            <Link href="">
                                <TwitterIcon 
                                    fontSize="large"
                                    sx={{ color: blue[500] }} />
                            </Link>
                            <Link href="">
                                <InstagramIcon 
                                    fontSize="large"
                                    sx={{ color: pink[500] }} />
                            </Link>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;