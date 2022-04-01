import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import LeaderBoardsImage from '../assets/images/Leaderboards.png';

const Image = styled('img')({
    maxWidth: '300px',
    width: '100%',
    height: 'auto'
})

const leaderboards = [
    { image: LeaderBoardsImage, description: 'Leader Boards' },
]
export default function LeaderBoards () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box>
            {leaderboards.map((element, key) => 
            <Stack flexDirection={ matchUpMd ? (key % 2  ? "row-reverse": "row") : "column-reverse" } key={key} alignItems="center" gap={2}>
                <Box sx={{ flex: '1' }}>
                    <Image src={element.image} />
                </Box>
                <Typography variant="h1" sx={{ flex: '1', textAlign: key % 2 ? 'right' : 'left', fontWeight: 400 }} >{element.description}</Typography>
            </Stack>
            )}
        </Box>
    );
}