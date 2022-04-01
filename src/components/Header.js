import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoIcon from '../assets/icons/LogoIcon';
import DiscordIcon from '../assets/icons/DiscordIcon';

const Image = styled('img')({
    maxWidth: '40px',
    width: '100%',
    height: 'auto'
})

const Header = ({handleDrawerOpen, drawerOpen}) => {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ boxShadow: 'unset', p: 2, bgcolor: '#87AED0' }}>
                <Container>
                    <Toolbar sx={{ flexDirection: matchUpSm ? 'row' : 'column', justifyContent: 'space-between', alignItems: matchUpSm ? 'center': 'flex-start' }}>
                        <Stack>
                            <LogoIcon />
                        </Stack>
                        <Stack flexDirection="row" gap={5} alignItems="center">
                            <Link href="https://discord.gg/bullorbear">
                                <DiscordIcon />
                            </Link>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon fontSize="large" sx={{ color: 'white' }} />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;