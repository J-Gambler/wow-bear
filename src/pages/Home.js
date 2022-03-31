import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import Call from './Call';
import Coins from './Coins';
import LeaderBoards from './LeaderBoards';
import Lookup from './Lookup';
import Nftlist from './Nftlist';
import Profile from './Profile';
import Register from './Register';

const Home = () => {
    useEffect(() => {

    }, [])

    return (
        <Container sx={{  pt: 20, pb: 10 }}>
            <Register />
            <Lookup />
            <Nftlist />
            <Coins />
            <Call />
            <Profile />
            <LeaderBoards />
        </Container>
    );
}

export default Home;