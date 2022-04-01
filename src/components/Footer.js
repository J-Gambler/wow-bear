import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack, Link, Container, Typography, useMediaQuery } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink, blue } from '@mui/material/colors';
import LogoImage from '../assets/images/Logo.png';

const Image = styled('img')({
    maxWidth: '40px',
    width: '100%',
    height: 'auto'
})

export default function Footer () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Container sx={{ borderTop: "solid 1px #f0f0f0", py: 10 }}>
            <Stack flexDirection="row" justifyContent={ matchUpSm ? "space-between" : 'center' }>
                <Stack flexDirection={ matchUpSm ? 'row' : 'column' } alignItems="center" gap={3}>
                    <Box>
                        <Typography variant="h1">
                            <Image src={LogoImage} />
                        </Typography>
                    </Box>                            
                    <Link href="https://twitter.com" target="_blank">
                        <TwitterIcon 
                            fontSize="large"
                            sx={{ color: blue[500] }} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <InstagramIcon 
                            fontSize="large"
                            sx={{ color: pink[500] }} />
                    </Link>
                    <Link href="https://bullorbear.com" target="_blank">
                        <Typography color="#000000" variant="h5">BullorBear</Typography>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    );
}