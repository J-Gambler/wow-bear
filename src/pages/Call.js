import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import BuyCryptoImage from '../assets/images/Call - Buy Crypto.png';
import BuyNFTImage from '../assets/images/Call - Buy NFT.png';
import SellCryptoImage from '../assets/images/Call - Sell Crypto.png';
import SellNFTImage from '../assets/images/Call - Sell NFT.png';

const Image = styled('img')({
    maxWidth: '300px',
    width: '100%',
    height: 'auto'
})

const calls = [
    { image: BuyNFTImage, description: 'Buy NFT' },
    { image: BuyCryptoImage, description: 'Buy Crypto' },
    { image: SellNFTImage, description: 'Sell NFT' },
    { image: SellCryptoImage, description: 'Sell Crypto' }
]
export default function Call () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack py={10} pt={20} gap={2}>
            {calls.map((element, key) => 
            <Stack flexDirection={ matchUpMd ? (key % 2  ? "row-reverse": "row") : "column" } key={key} alignItems="center" gap={2}>
                <Box sx={{ flex: '1' }}>
                    <Image src={element.image} sx={{ boxShadow: '5px 5px 35px #c0c0c0' }} />
                </Box>
                <Typography variant="h1" sx={{ flex: '1', textAlign: key % 2 ? 'right' : 'left', fontWeight: 400 }} >{element.description}</Typography>
            </Stack>
            )}
        </Stack>
    );
}