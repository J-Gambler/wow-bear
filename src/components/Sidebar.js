import { Box, Stack, Typography, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
// import { black } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

const links = [
    { to: '/', title: 'Home' },
    // { to: '/register', title: 'Register' },
    // { to: '/lookup', title: 'Look Up' },
    // { to: '/nftlist', title: 'NFT List' },
    // { to: '/coins', title: 'Coins' },
    // { to: '/call', title: 'Call' },
    // { to: '/profile', title: 'Profile' },
    // { to: '/leaderboards', title: 'Leader Boards' },
    { to: 'https://bullorbear.com', title: 'BullorBear', external: true },
    { to: 'https://discord.gg/bullorbear', title: 'Discord', external: true },
]
export default function Sidebar ( {handleDrawerOpen, drawerOpen} )  {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={drawerOpen}
            sx={{ 
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: '260px',
                  boxSizing: 'border-box',
                },
            }}
        >
            <Stack flexDirection="row">
                <Box flex={1} pt={1}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Stack>
            <Stack
                sx={{
                    margin: 'auto',
                    gap: 2,
                    '& a': {
                        textDecoration: 'none',
                        color: '#000000',
                        '& span': {
                            fontWeight: 400
                        }
                    }
                }}
            >
                {links.map( (element, key) => 
                    element.external 
                    ?
                    <a href={element.to} target="_blank" key={key}>
                        <Typography component="span" variant="h2">{element.title}</Typography>
                    </a>
                    : 
                    <Link to={element.to} key={key}>
                        <Typography component="span" variant="h2">{element.title}</Typography>
                    </Link>
                )}
            </Stack>
        </Drawer>
    );
}

