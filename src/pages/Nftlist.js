import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import NftlistImage from '../assets/images/Nftlist.png';

const Image = styled('img')({
    maxWidth: '300px',
    width: '100%',
    height: 'auto'
})

const nftlists = [
    { image: NftlistImage, description: 'NFT List' },
]
export default function Nftlist () {
    
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box py={10} pt={20}>
            {nftlists.map((element, key) => 
            <Stack flexDirection={ matchUpMd ? (key % 2  ? "row-reverse": "row") : "column" } key={key} alignItems="center" gap={2}>
                <Box sx={{ flex: '1' }}>
                    <Image src={element.image} sx={{ boxShadow: '5px 5px 35px #c0c0c0' }} />
                </Box>
                <Typography variant="h1" sx={{ flex: '1', textAlign: key % 2 ? 'right' : 'left', fontWeight: 400 }} >{element.description}</Typography>
            </Stack>
            )}
        </Box>
    );
}